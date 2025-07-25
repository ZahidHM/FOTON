import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { columns, Direction } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Direcciones',
        href: '/directions',
    },
];

interface Props {
  directions: Direction[];
}
export default function Index({ directions }: Props) {



    console.log(directions);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 max-w-lg'>
                <DataTable columns={columns} data={directions} />
            </div>

        </AppLayout>
    );
}
