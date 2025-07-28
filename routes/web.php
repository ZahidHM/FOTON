<?php

use App\Http\Controllers\Admin\AreaController;
use App\Http\Controllers\Admin\CompanyController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DirectionController;
use App\Http\Controllers\Admin\DocumentController;
use App\Http\Controllers\Admin\FileExplorerController;
use App\Http\Controllers\Admin\FolderController;
use App\Http\Controllers\Admin\TypeDocumentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::resource('companies', CompanyController::class);
Route::resource('directions', DirectionController::class);
Route::resource('areas', AreaController::class);


Route::resource('folders', FolderController::class);
Route::resource('documents', DocumentController::class);
Route::resource('types-documents', TypeDocumentController::class);

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
