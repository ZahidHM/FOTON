import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { Alumno, columns } from './table/columns';
import { toast } from 'sonner';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumnos',
        href: '/alumnos',
    },
];

interface Props {
    alumnos: Alumno[];
}
export default function Index({ alumnos }: Props) {



    console.log(alumnos);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 '>
                <DataTable columns={columns} data={alumnos} />
            </div>

        </AppLayout>
    );
}
