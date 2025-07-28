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
    { parent = null, id_area = null }: any
) {
    console.log(parent,id_area);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10'>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <ExplorerForm parent={parent} id_area={id_area} />
                </div>
            </div>

        </AppLayout>
    );
}
