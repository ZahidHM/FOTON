import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ExplorerForm } from './forms/form';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Carpetas',
        href: '/explorer',
    },
];

interface Props {
}
export default function Create(
    { id_carpeta = null, types_documents }: any
) {
    console.log("CARPETA", id_carpeta);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 border-4'>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <ExplorerForm id_carpeta={id_carpeta} types_documents={types_documents} />
                </div>
            </div>

        </AppLayout>
    );
}
