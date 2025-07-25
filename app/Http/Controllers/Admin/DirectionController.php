<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Direction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DirectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $directions = Direction::with('company:id,nombre')->get();
        return Inertia::render('directions/index', [
            'directions' => $directions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $companies = Company::all();
        return Inertia::render(
            'directions/create',
            [
                'companies' => $companies
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'id_empresa' => ['required', 'string', 'max:255'],
        ]);

        Direction::create($validated);

        return redirect()->back()->with('success', 'Direccion creada.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $directions = Direction::where('id_empresa', $id)->with('company:id,nombre')->get();
        return Inertia::render('directions/show', [
            'directions' => $directions
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $companies = Company::all();
        $direction = Direction::find($id);
        return Inertia::render('directions/edit', [
            'direction' => $direction,
            'companies' => $companies
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'id_empresa' => 'required|exists:companies,id',
        ]);

        $direction = Direction::findOrFail($id);

        $direction->update($validated);

        return redirect()->route('directions.index')
            ->with('success', 'Dirección actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
