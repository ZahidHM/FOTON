<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FileExplorerController extends Controller
{
    public function index()
    {
        return Inertia::render('explorer/index');
    }
    public function upload(Request $request)
    {
        dd($request->all());
    }
}
