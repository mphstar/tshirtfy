<?php

use App\Http\Controllers\Admin\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/tag/add', [TagController::class, 'store']);
Route::post('/tag/edit', [TagController::class, 'update']);
Route::post('/tag/delete', [TagController::class, 'destroy']);


