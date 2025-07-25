<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Direction extends Model
{
    protected $table = 'directions';
    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $fillable = [
        'id_empresa',
        'nombre',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'id_empresa');
    }

    public function area(): HasMany
    {
        return $this->hasMany(Area::class);
    }
}
