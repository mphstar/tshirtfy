<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\LoginController;
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

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [LandingController::class, 'login'])->name('login');
});

Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

Route::middleware(['auth'])->group(function () {

    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index']);
        Route::get('/product/add', [ProductController::class, 'create']);
        Route::get('/product/{id}', [ProductController::class, 'product']);
        Route::get('/product/edit/{id}', [ProductController::class, 'edit']);


        Route::get('/tag', [TagController::class, 'index']);
        Route::get('/tag/add', [TagController::class, 'create']);
        Route::get('/tag/edit/{id}', [TagController::class, 'edit']);
    });
});
