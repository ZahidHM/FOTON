<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    //
    protected $table = 'folders';
    protected $fillable = [
        'nombre',
        'id_padre',
        'id_area',
    ];

    public function padre()
    {
        return $this->belongsTo(Folder::class, 'id_padre');
    }

    public function hijas()
    {
        return $this->hasMany(Folder::class, 'id_padre')->with('hijas');
    }

    public function area()
    {
        return $this->belongsTo(Area::class, 'id_area');
    }

    public function documents()
    {
        return $this->hasMany(Document::class, 'id_carpeta');
    }
}
