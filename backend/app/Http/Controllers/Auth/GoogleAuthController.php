<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Auth\GoogleAuthService;
use Illuminate\Http\Request;

class GoogleAuthController extends Controller
{
    private GoogleAuthService $googleAuth;

    public function __construct(GoogleAuthService $googleAuth)
    {
        $this->googleAuth = $googleAuth;
    }

    public function redirect()
    {
        return redirect()->away($this->googleAuth->getAuthUrl());
    }

    public function callback(Request $request)
    {
        if (!$request->code) {
            return redirect('http://localhost:3000/login?error=' . urlencode('Login cancelled.'));
        }

        try {
            [$googleUser, $token] = $this->googleAuth->fetchUser($request->code);
        } catch (\Exception $e) {
            $errorMessage = 'Authentication failed. Please try again.';
            if (str_contains($e->getMessage(), 'Missing required scopes')) {
                $errorMessage = 'To use MediaPulse, you must grant all requested permissions.';
            }
            return redirect('http://localhost:3000/login?error=' . urlencode($errorMessage));
        }

        $user = User::updateOrCreate(
            ['google_id' => $googleUser->id],
            [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'google_access_token' => $token['access_token'] ?? null,
                'google_refresh_token' => $token['refresh_token'] ?? null,
                'avatar' => $googleUser->picture,
            ]
        );

        $token = $user->createToken('auth-token')->plainTextToken;

        return redirect('http://localhost:3000/auth/callback?token=' . $token);
    }
}
