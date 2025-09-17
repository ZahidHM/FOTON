<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;

    protected $table = 'profesores';
     
    protected $fillable = ['nombre', 'apellido_pat', 'apellido_mat'];

    public function materias()
    {
        return $this->hasMany(Materia::class,'id_profesor');
    }
}
