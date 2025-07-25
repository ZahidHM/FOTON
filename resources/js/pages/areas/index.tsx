import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { Area, columns } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Areas',
        href: '/areas',
    },
];

interface Props {
  areas: Area[];
}
export default function Index({ areas }: Props) {



    console.log(areas);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 max-w-lg'>
                <DataTable columns={columns} data={areas} />
            </div>

        </AppLayout>
    );
}
