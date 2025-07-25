<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Folder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // dd($request->all());
        // $folders = Folder::where('id_padre', $request->input('id_padre'))
        //     ->with('hijas') // Recursivo
        //     ->get();
        // // dd($request->all());
        // return Inertia::render('folders/index', [
        //     'folders' => $folders
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $id = $request->input('id');
        $table_id_area = $request->input('table_id_area');
        $parent = null;

        try {
            if ($id) {
                $parent = Folder::findOrFail($id);
            } else
                if ($table_id_area) {
            }
            return Inertia::render('folders/create', [
                'parent' => $parent,
                'id_area' => $table_id_area
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            abort(404, 'La carpeta padre no existe.');
        } catch (\Throwable $th) {
            report($th);
            abort(500, 'Ha ocurrido un error inesperado.');
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            if ($request->filled('id_area')) {
                $validated = $request->validate([
                    'id_padre' => ['integer'],
                    'id_area' => ['integer'],
                    'nombre' => ['string', 'max:255'],
                ]);
                Folder::create($validated);
                return redirect('/folders/' . $request->id_area);
            } elseif ($request->filled('parent')) {

                $validated = $request->validate([
                    'parent.id' => ['required', 'integer'],  // o 'string' según tu esquema
                    'parent.id_area' => ['required', 'integer'],
                    'nombre' => ['required', 'string', 'max:255'],
                ]);


                Folder::create([
                    'id_padre' => $validated['parent']['id'],
                    'id_area' => $validated['parent']['id_area'],
                    'nombre' => $validated['nombre'],
                ]);
                return redirect('/folders/' . $validated['parent']['id_area']);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $folders = Folder::with('hijas')->with('documents')->whereNull('id_padre')->get();
        $folders = Folder::with(['hijas.documents', 'hijas.hijas.documents', 'documents'])
            ->whereNull('id_padre')
            ->get();

        return Inertia::render('folders/index', [
            'folders' => $folders,
            'table_id_area' => $id
        ]);
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
        //
    }
}
