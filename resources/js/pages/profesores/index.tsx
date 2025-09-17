import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { Profesor, columns } from './table/columns';
import { toast } from 'sonner';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profesores',
        href: '/profesores',
    },
];

interface Props {
    profesores: Profesor[];
}
export default function Index({ profesores }: Props) {



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 '>
                <DataTable columns={columns} data={profesores} />
            </div>

        </AppLayout>
    );
}
