<?php

use App\Http\Controllers\Admin\AreaController;
use App\Http\Controllers\Admin\CompanyController;
use App\Http\Controllers\Admin\DirectionController;
use App\Http\Controllers\Admin\FileExplorerController;
use App\Http\Controllers\Admin\FolderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

//EMPRESAS
Route::resource('companies', CompanyController::class);
Route::resource('directions', DirectionController::class);
Route::resource('areas', AreaController::class);

Route::get('/explorer', [FileExplorerController::class, 'index'])->name('explorer.index');
Route::post('/upload', [FileExplorerController::class, 'upload'])->name('explorer.upload');

Route::resource('folders', FolderController::class);

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
