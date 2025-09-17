import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { DataTable } from './table/data-table';
import { Materia, columns } from './table/columns';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Materias',
        href: '/materias',
    },
];

interface Props {
    materias: Materia[];
}
export default function Index({ materias }: Props) {



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className='container mx-auto py-10 px-10 '>
                <DataTable columns={columns} data={materias} />
            </div>

        </AppLayout>
    );
}
