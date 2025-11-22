<?php

namespace App\Services\Auth;

use App\Dtos\Auth\DtoGoogleUser;
use Google_Client;
use Google_Service_Oauth2;

class GoogleAuthService
{
    private array $scope = [
        'openid',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/yt-analytics.readonly',
    ];

    public function client(): Google_Client
    {
        $client = new Google_Client();
        $client->setAuthConfig(storage_path('app/google/client_secret.json'));
        $client->setAccessType('offline');
        $client->setPrompt('consent');
        $client->setRedirectUri(url('/api/auth/google/callback'));
        $client->setScopes($this->scope);

        return $client;
    }

    public function getAuthUrl(): string
    {
        return $this->client()->createAuthUrl();
    }

    public function fetchUser(string $code)
    {
        $client = $this->client();
        $token = $client->fetchAccessTokenWithAuthCode($code);
        $client->setAccessToken($token);

        // Validate scopes
        $receivedScope = explode(' ', $token['scope'] ?? '');
        $missingScopes = array_diff($this->scope, $receivedScope);
        if (!empty($missingScopes)) {
            throw new \Exception('Missing required scopes: ' . implode(', ', $missingScopes));
        }

        // Fetch user info
        $oauth2 = new Google_Service_Oauth2($client);
        $googleUser = $oauth2->userinfo->get();

        return [DtoGoogleUser::fromGoogleUser($googleUser), $token];
    }
}
