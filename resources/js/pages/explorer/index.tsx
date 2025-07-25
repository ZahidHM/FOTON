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
    // companies: Company[];
}
export default function Index(
    // { companies }: Props
) {



    // console.log(companies);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 border-4'>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <ExplorerForm/>
                </div>
            </div>

        </AppLayout>
    );
}
