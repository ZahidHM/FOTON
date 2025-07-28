<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\TypeDocument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $id = $request->input('id');
        $id_area = $request->input('id_area');

        $types_documents = TypeDocument::all();
        return Inertia::render('documents/create', [
            'id_carpeta' => $id,
            'types_documents' => $types_documents,
            'id_area' => $id_area
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id_area = $request->input('id_area');
        $validated = $request->validate([
            'id_tipo_documento' => 'required|string',
            'nombre' => 'required|string',
            'id_carpeta' => 'required|integer',
            'otro' => 'required|array',
            'otro.*' => 'file|mimes:pdf,jpg,png,docx', 
        ]);

        $archivosGuardados = [];

        foreach ($request->file('otro') as $archivo) {
            $ruta = $archivo->store('uploads', 'public');

            $document = new Document();
            $document->id_tipo_documento = $validated['id_tipo_documento'];
            $document->nombre = $validated['nombre'];
            $document->id_carpeta = $validated['id_carpeta'];
            $document->archivo = $ruta; // ruta del archivo guardado
            $document->save();

            $archivosGuardados[] = $document;
        }


        return redirect()->route('folders.show', $id_area)->with('success', 'Archivo creado correctamente.');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $document = Document::with('folder')->findOrFail($id);

        $document->delete();

        return redirect('/folders/' . $document->folder->id_area)
            ->with('success', 'Documento eliminado correctamente.');
    }
}
