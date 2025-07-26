<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TypeDocument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TypeDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $typeDocuments = TypeDocument::all();
        return Inertia::render('type-documents/index', [
            'typeDocuments' => $typeDocuments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('type-documents/create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
        ]);

        TypeDocument::create($validated);

        return redirect()->route('types-documents.index')->with('success', 'Tipo creado correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $typeDocument = TypeDocument::findOrFail($id);
        return Inertia::render('type-documents/edit', [
            'typeDocument' => $typeDocument
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $typeDocument = TypeDocument::findOrFail($id);

        $typeDocument->update($validated);

        return redirect()->route('types-documents.index')->with('success', 'Tipo actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
