import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { columns, Company } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Empresas',
        href: '/companies',
    },
];

interface Props {
  companies: Company[];
}
export default function Index({ companies }: Props) {



    console.log(companies);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 max-w-lg'>
                <DataTable columns={columns} data={companies} />
            </div>

        </AppLayout>
    );
}
