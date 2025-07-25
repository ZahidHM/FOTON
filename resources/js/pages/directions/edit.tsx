import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DirectionForm } from './forms/form';
import { Company } from '../companies/table/columns';
import { EditForm } from './forms/edit';
import { Direction } from './table/columns';
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
    direction: Direction;
    companies: Company[];
}
export default function Edit(
    { direction, companies }: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm companies={companies} direction={direction} />
            </div>
        </AppLayout>
    );
}
