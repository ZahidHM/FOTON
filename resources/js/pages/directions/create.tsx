import React from 'react';

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import {  DirectionForm } from './forms/form';
import { Company } from '../companies/table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Direcciones',
        href: '/companies',
    },
    {
        title: 'Crear Direccion',
        href: '/companies/create',
    },
];

interface Props{
    companies : Company[];
}
export default function Create({companies}:Props) {
    console.log(companies);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-10">
                <DirectionForm companies={companies}/>
            </div>
        </AppLayout>
    );
}
