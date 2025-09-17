<?php

use App\Http\Controllers\Admin\AlumnoController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MateriaController;
use App\Http\Controllers\Admin\ProfesorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::resource('alumnos', AlumnoController::class);
Route::resource('materias', MateriaController::class);
Route::resource('profesores', ProfesorController::class);


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
