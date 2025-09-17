import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Materia } from './table/columns';
import { EditForm } from './forms/edit';
import { Profesor } from '../profesores/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Materias',
        href: '/materias',
    },
    {
        title: 'Editar Materia',
        href: '/materias/edit',
    },
];

interface Props {
    materia: Materia;
    profesores: Profesor[];
}
export default function Edit(
    { materia,profesores }: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm materia={materia} data={profesores} />
            </div>
        </AppLayout>
    );
}
