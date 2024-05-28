<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', [BooksController::class, 'index']);

Route::get('/', [LandingController::class, 'index']);
Route::get('/product', [LandingController::class, 'product']);
Route::get('/artikel', [LandingController::class, 'artikel']);
Route::get('/store', [LandingController::class, 'store']);
Route::get('/service', [LandingController::class, 'service']);
Route::get('/login', [LandingController::class, 'login']);
