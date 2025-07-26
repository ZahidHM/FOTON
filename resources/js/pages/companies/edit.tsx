import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Company } from '../companies/table/columns';
import { EditForm } from './forms/edit';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Direcciones',
        href: '/directions',
    },
    {
        title: 'Editar Direccion',
        href: '/companies/edit',
    },
];

interface Props {
    company: Company;
}
export default function Edit(
    { company }: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm company={company}  />
            </div>
        </AppLayout>
    );
}
