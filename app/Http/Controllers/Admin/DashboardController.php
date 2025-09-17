<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'companies' => Alumno::count(),
        ];
        return Inertia::render('dashboard', [
            'stats' => $stats,
        ]);
    }
}
