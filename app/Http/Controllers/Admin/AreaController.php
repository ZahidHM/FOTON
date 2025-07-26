<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\Direction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $areas = Area::with('direction:id,nombre')->get();
        return Inertia::render('areas/index', [
            'areas' => $areas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $directions = Direction::all();
        return Inertia::render(
            'areas/create',
            [
                'directions' => $directions
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
            'id_direccion' => ['required', 'string', 'max:255'],
        ]);

        Area::create($validated);

        return redirect()->route('areas.index')->with('success', 'Area creada correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $areas = Area::where('id_direccion', $id)->with('direction:id,nombre')->get();
        return Inertia::render('areas/show', [
            'areas' => $areas
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $directions = Direction::all();
        $area = Area::find($id);
        return Inertia::render('areas/edit', [
            'directions' => $directions,
            'area' => $area
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'id_direccion' => 'required|exists:companies,id',
        ]);

        $area = Area::findOrFail($id);

        $area->update($validated);

        return redirect()->route('areas.index')->with('success', 'Area actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
