import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { columns, typeDocuments } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tipo de documentos',
        href: '/types-documents',
    },
];

interface Props {
    typeDocuments: typeDocuments[];
}
export default function Index({ typeDocuments }: Props) {



    console.log(typeDocuments);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 max-w-lg'>
                <DataTable columns={columns} data={typeDocuments} />
            </div>

        </AppLayout>
    );
}
