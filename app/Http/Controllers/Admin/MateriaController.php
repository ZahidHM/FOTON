<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Materia;
use App\Models\Profesor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('materias/index', [
            'materias' => Materia::with('profesor')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('materias/create', [
            'profesores' => Profesor::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255', 'unique:materias,nombre'],
            'horario_inicio' => ['required',],
            'horario_fin'    => ['required',  'after:horario_inicio'],
            'id_profesor'    => ['required', 'exists:profesores,id'], 
        ]);
        Materia::create($validated);
        return redirect()->route('materias.index')->with('success', 'Materia creada correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $materia = Materia::findOrFail($id);
        $profesores = Profesor::all();
        return Inertia::render('materias/edit', [
            'materia' => $materia,
            'profesores' => $profesores,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'horario_inicio' => ['required',],
            'horario_fin'    => ['required',  'after:horario_inicio'],
            'id_profesor'    => ['exists:profesores,id'], 
        ]);
        $materia = Materia::findOrFail($id);

        $materia->update($validated);

        return redirect()->route('materias.index')->with('success', 'Materia actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $materia = Materia::findOrFail($id);

        if ($materia->alumnos()->exists()) {
            return redirect()->route('materias.index')
                ->with('error', 'No puedes eliminar la materia porque tiene alumnos inscritos.');
        }

        $materia->delete();
        return redirect()->route('materias.index')->with('success', 'Materia eliminada correctamente.');
    }
}
