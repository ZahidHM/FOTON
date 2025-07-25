<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TypeDocument extends Model
{
    protected $table = 'types_documents';

    protected $fillable = [
        'nombre',
    ];

    public function documents(): HasMany
    {
        return $this->hasMany(Document::class);
    }
}
