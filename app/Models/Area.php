<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Area extends Model
{
    protected $table = 'areas';
    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $fillable = [
        'id_direccion',
        'nombre',
    ];
    public function direction(): BelongsTo
    {
        return $this->belongsTo(Direction::class, 'id_direccion');
    }
    public function folder(): HasMany
    {
        return $this->hasMany(Folder::class);
    }
}
