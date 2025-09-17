import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { CustomForm } from './forms/form';
import { Profesor } from '../profesores/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Materias',
        href: '/materias',
    },
    {
        title: 'Materias',
        href: '/materias/create',
    },
];
interface Props {
    profesores: Profesor[];
}
export default function Create({profesores}:Props) {
    console.log(profesores);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <CustomForm data={profesores}/>
            </div>
        </AppLayout>
    );
}
