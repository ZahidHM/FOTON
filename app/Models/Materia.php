<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'horario_inicio', 'horario_fin','id_profesor'];


    public function alumnos()
    {
        return $this->belongsToMany(Alumno::class, 'alumno_materia', 'id_materia', 'id_alumno');
    }
    public function profesor()
    {
        return $this->belongsTo(Profesor::class, 'id_profesor');
    }
}
