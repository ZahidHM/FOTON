import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { EditForm } from './forms/edit';
import { Materia } from '../materias/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumnos',
        href: '/alumnos',
    },
    {
        title: 'Editar Alumno',
        href: '/alumnos/edit',
    },
];
type Alumno = {
    id: string
    nombre: string
    apellido_pat: string
    apellido_mat: string
    edad: string
    matricula: string
    grado: string
    materias: Materia[]
}
interface Props {
    alumno: Alumno;
    materias: Materia[];

}
export default function Edit(
    { alumno ,materias}: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm alumno={alumno} materias={materias} />
            </div>
        </AppLayout>
    );
}
