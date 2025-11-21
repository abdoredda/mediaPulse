<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    private $scope = [
        'openid',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/yt-analytics.readonly',
    ];

    private function client()
    {
        $client = new \Google_Client();
        $client->setAuthConfig(storage_path('app/google/client_secret.json'));
        $client->setAccessType('offline'); // gets refresh token
        $client->setPrompt('consent');      // always ask for permission
        $client->setRedirectUri(url('/auth/google/callback'));
        $client->setScopes($this->scope);

        return $client;
    }

    public function redirect()
    {
        $authUrl = $this->client()->createAuthUrl();
        return redirect()->away($authUrl);
    }

    public function callback(Request $request)
    {
        if (!$request->code) {
            return response()->json([
                'error' => 'No authorization code returned!'
            ], 400); // Bad Request
        }

        $client = $this->client();

        try {
            // Exchange code for access token
            $token = $client->fetchAccessTokenWithAuthCode($request->code);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch access token',
                'message' => $e->getMessage()
            ], 500);
        }

        // Set access token to client
        $client->setAccessToken($token);

        // Fetch Google user info
        $oauth2 = new \Google_Service_Oauth2($client);
        $googleUser = $oauth2->userinfo->get();

        // Validate scopes
        $definedScope = $this->scope;
        $receivedScope = explode(' ', $token['scope']);
        $missingScopes = array_diff($definedScope, $receivedScope);
        // dd($receivedScope);
        if (!empty($missingScopes)) {
            return response()->json([
                'error' => 'Missing required permissions',
                'missing_scopes' => $missingScopes
            ], 403); // Forbidden
        }

        $user = User::updateOrCreate(
            ['google_id' => $googleUser->id],
            [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'google_access_token' => $token['access_token'] ?? null,
                'google_refresh_token' => $token['refresh_token'] ?? null
            ]
        );

        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user
        ], 200);
    }
}
