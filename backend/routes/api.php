<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Log\Logger;
use App\Http\Controllers\GoogleAuthController;



Route::get('/test', function () {
    \logger('1');
});
