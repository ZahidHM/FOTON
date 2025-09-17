import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Profesor } from './table/columns';
import { EditForm } from './forms/edit';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profesor',
        href: '/profesores',
    },
    {
        title: 'Editar Profesor',
        href: '/profesores/edit',
    },
];

interface Props {
    profesor: Profesor;
}
export default function Edit(
    { profesor }: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm profesor={profesor}  />
            </div>
        </AppLayout>
    );
}
