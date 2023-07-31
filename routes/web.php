<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


require __DIR__.'/auth.php';

Route::get('/', [App\Http\Controllers\LaguController::class, 'index']);

Route::get('/lagu', [App\Http\Controllers\LaguController::class, 'index'])->name('lagu.index');
Route::get('/lagu/show/{id}', [App\Http\Controllers\LaguController::class, 'show']);
Route::post('/lagu', [App\Http\Controllers\LaguController::class, 'store']);
Route::get('/lagu/create', [App\Http\Controllers\LaguController::class, 'create']);
Route::put('/lagu', [App\Http\Controllers\LaguController::class, 'update']);
Route::get('/lagu/edit/{id}', [App\Http\Controllers\LaguController::class, 'edit']);
Route::delete('/lagu/delete/{id}', [App\Http\Controllers\LaguController::class, 'destroy']);

Route::middleware('auth')->get('/profil', function () {
    return Inertia::render('Profile/Index');
});