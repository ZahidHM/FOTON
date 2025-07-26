import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { AreaForm } from './forms/form';
import { Company } from '../companies/table/columns';
import { Direction } from '../directions/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Areas',
        href: '/areas',
    },
    {
        title: 'Crear Area',
        href: '/areas/create',
    },
];

export default function Create() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <AreaForm />
            </div>
        </AppLayout>
    );
}
