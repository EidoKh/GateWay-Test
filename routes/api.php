<?php

use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\FineController;
use App\Http\Controllers\Api\LoanController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/check_login', function () {
    return true;
});


Route::post('login', [\App\Http\Controllers\Api\UserController::class, 'login']);
Route::post('register', [\App\Http\Controllers\Api\UserController::class, 'register']);
Route::post('logout', [\App\Http\Controllers\Api\UserController::class, 'logout']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [\App\Http\Controllers\Api\UserController::class, 'logout']);
    Route::apiResource('users', \App\Http\Controllers\Api\UserController::class);
    Route::apiResource('categories', \App\Http\Controllers\Api\CategoryController::class);
    Route::apiResource('books', \App\Http\Controllers\Api\BookController::class);
    Route::apiResource('authors', \App\Http\Controllers\Api\AuthorController::class);
    Route::apiResource('loans', \App\Http\Controllers\Api\LoanController::class);
    Route::get('user-loans/{id}',  [LoanController::class, 'userLoans']);
    Route::get('user-fines/{id}',  [FineController::class, 'userFines']);
    Route::apiResource('fines', \App\Http\Controllers\Api\FineController::class);
    Route::apiResource('reservations', \App\Http\Controllers\Api\ReservationController::class);
});
Route::get('all-categories', [CategoryController::class, 'getAll']);
Route::get('all-categories/{slug}', [CategoryController::class, 'getDetails']);
Route::get('random-categories', [CategoryController::class, 'getRandomly']);
Route::get('most-liked', [BookController::class, 'mostLiked']);
Route::get('all_books', [BookController::class, 'getAll']);
Route::get('category_books/{category_id}', [BookController::class, 'categoryBooks']);
Route::get('book_details/{slug}', [BookController::class, 'getDetails']);
Route::get('all-authors', [AuthorController::class, 'getAll']);
Route::get('all-authors/{slug}', [AuthorController::class, 'getDetails']);
Route::get('author_books/{author_id}', [AuthorController::class, 'authorBooks']);
