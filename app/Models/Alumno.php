<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Alumno extends Model
{
    protected $table = 'alumnos';
    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'apellido_pat',
        'apellido_mat',
        'edad',
        'matricula',
        'grado',
    ];



    public function materias()
    {
        return $this->belongsToMany(Materia::class, 'alumno_materia', 'id_alumno', 'id_materia');
    }
}
