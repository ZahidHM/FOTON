import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { CustomForm } from './forms/form';
import { Materia } from '../materias/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profesores',
        href: '/profesores',
    },
    {
        title: 'Crear Profesor',
        href: '/profesores/create',
    },
];
export default function Create() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <CustomForm />
            </div>
        </AppLayout>
    );
}
