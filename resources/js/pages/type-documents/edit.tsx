import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Company } from '../companies/table/columns';
import { EditForm } from './forms/edit';
// import { Area } from './table/columns';
import { Direction } from '../directions/table/columns';
import { typeDocuments } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Areas',
        href: '/areas',
    },
    {
        title: 'Editar Area',
        href: '/areas/edit',
    },
];

interface Props {
    typeDocument: typeDocuments;
}
export default function Edit(
    { typeDocument }: Props
) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <EditForm typeDocument={typeDocument}  />
            </div>
        </AppLayout>
    );
}
