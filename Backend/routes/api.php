<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use App\Http\Controllers\CartController;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::get('/users', [UserController::class, 'index']);
// Route::post('/users', [UserController::class, 'store']);

// Route::get('/products', [ProductController::class, 'index']);
// Route::post('/products', [ProductController::class, 'store']);
// Route::get('/products/{id}', [ProductController::class, 'show']);
// Route::put('/productsupdate/{id}', [ProductController::class, 'update']);
// Route::delete('/productsdelete/{id}', [ProductController::class, 'destroy']);

Route::middleware(['web'])->group(function () {
   
    Route::get('/users', [UserController::class, 'index']);
    // Route::post('/users', [UserController::class, 'store']);
    Route::post('/register', [UserController::class, 'register']);


    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::put('/productsupdate/{id}', [ProductController::class, 'update']);
    Route::delete('/productsdelete/{id}', [ProductController::class, 'destroy']);
    

    // Thêm route mới cho việc thêm vào giỏ hàng
    Route::post('/cart/add', [CartController::class, 'addToCart']);
    Route::get('/cart', [CartController::class, 'index']);
});