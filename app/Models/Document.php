<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Document extends Model
{
    protected $table = 'documents';

    protected $fillable = [
        'id_carpeta',
        'id_tipo_documento',
        'nombre',
        'archivo',
    ];
    public function folder(): BelongsTo
    {
        return $this->belongsTo(Folder::class, 'id_carpeta');
    }

    public function typeDocument(): BelongsTo
    {
        return $this->belongsTo(TypeDocument::class, 'id_tipo_documento');
    }
}
