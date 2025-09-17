<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use App\Models\Materia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('alumnos/index', [
            'alumnos' => Alumno::with('materias')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('alumnos/create', [
            'materias' => Materia::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'apellido_pat' => ['required', 'string', 'max:255'],
            'apellido_mat' => ['required', 'string', 'max:255'],
            'edad' => ['required', 'integer', 'min:0'],
            'matricula' => ['required', 'string', 'max:255', 'unique:alumnos'],
            'grado' => ['required', 'string', 'max:50'],
            'materias' => [],
        ]);

        $alumno = Alumno::create($validated);
        $alumno->materias()->sync($validated['materias']);

        return redirect()->route('alumnos.index')->with('success', 'Alumno creado correctamente.');
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
        $alumno = Alumno::with('materias')->findOrFail($id);
        $materias = Materia::all();
        return Inertia::render('alumnos/edit', [
            'alumno' => $alumno,
            'materias' => $materias
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'apellido_pat' => ['required', 'string', 'max:255'],
            'apellido_mat' => ['required', 'string', 'max:255'],
            'edad' => ['required', 'integer', 'min:0'],
            'matricula' => ['required', 'string', 'max:255'],
            'grado' => ['required', 'string', 'max:50'],
            'materias' => [],
        ]);

        $alumno = Alumno::findOrFail($id);

        $alumno->update($validated);
        $alumno->materias()->sync($validated['materias']);

        return redirect()->route('alumnos.index')->with('success', 'Alumno actualizado correctamente.');
    }

    /**
     *  Remove the specified resource from storage.       
     */
    public function destroy(string $id)
    {
        $alumno = Alumno::findOrFail($id);

        if ($alumno->materias()->exists()) {
            return redirect()->route('alumnos.index')
                ->with('error', 'No puedes eliminar el alumno porque tiene materias asociadas.');
        }

        $alumno->delete();
        return redirect()->route('alumnos.index')->with('success', 'Alumno eliminado correctamente.');
    }
}
