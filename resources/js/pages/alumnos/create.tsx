import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { CustomForm } from './forms/form';
import { Materia } from '../materias/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumnos',
        href: '/alumnos',
    },
    {
        title: 'Crear Alumno',
        href: '/alumnos/create',
    },
];
interface Props {
    materias: Materia[];
}
export default function Create({materias}:Props) {

    console.log(materias);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <CustomForm data={materias}/>
            </div>
        </AppLayout>
    );
}
