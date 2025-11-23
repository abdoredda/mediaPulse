<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\YoutubeController;

Route::get('/auth/google', [GoogleAuthController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);
Route::get('/youtube/data', [GoogleAuthController::class, 'youtubeData']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('yt-channel-info', [YoutubeController::class, 'channelInfo']);
    Route::get('yt-channel-videos', [YoutubeController::class, 'channelVideos']);
});
