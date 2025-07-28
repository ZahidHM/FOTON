<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    protected $table = 'companies';
    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
    ];

    public function directions(): HasMany
    {
        return $this->hasMany(Direction::class, 'id_empresa');
    }
}
