<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Google\Service\YouTube;
use Google_Client;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class YoutubeController extends Controller
{
    private function getYoutubeService(): YouTube
    {
        $client = new Google_Client();
        /** @var User $user */
        $user = Auth::user();
        $client->setAuthConfig(storage_path('app/google/client_secret.json'));
        $client->setAccessToken($user->google_access_token);

        if ($client->isAccessTokenExpired()) {
            $refreshToken = $client->getRefreshToken() ?: $user->google_refresh_token;
            $newAccessToken = $client->fetchAccessTokenWithRefreshToken($refreshToken);
            $client->setAccessToken($newAccessToken);
            $user->google_access_token = $newAccessToken;
            $user->save();
        }
        return new YouTube($client);
    }

    public function channelInfo()
    {
        $youtube = $this->getYoutubeService();
        $response = $youtube->channels->listChannels('snippet,statistics,contentDetails', [
            'mine' => true
        ]);

        return response()->json($response);
    }

    public function channelVideos()
    {
        $youtube = $this->getYoutubeService();
        $channelsResponse = $youtube->channels->listChannels('contentDetails', [
            'mine' => true
        ]);

        $uploadsPlaylistId = $channelsResponse->items[0]->contentDetails->relatedPlaylists->uploads;

        $videos = [];
        $nextPageToken = null;

        // yt api return max 50 video per request
        do {
            $response = $youtube->playlistItems->listPlaylistItems('snippet', [
                'playlistId' => $uploadsPlaylistId,
                'maxResults' => 50,
                'pageToken' => $nextPageToken
            ]);

            $videos = array_merge($videos, $response->items);
            $nextPageToken = $response->nextPageToken;
        } while ($nextPageToken);

        return response()->json($videos);
    }
}
