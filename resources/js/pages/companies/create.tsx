import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { CompanieForm } from './forms/form';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Empresas',
        href: '/companies',
    },
    {
        title: 'Crear Empresa',
        href: '/companies/create',
    },
];
export default function Create() {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <CompanieForm />
            </div>
        </AppLayout>
    );
}
