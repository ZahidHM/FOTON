import Chart from '@/components/custom/example-chart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, GraduationCap, PencilLineIcon } from 'lucide-react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inicio',
        href: '/dashboard',
    },
];

type Stats = {
    stats: {
        companies: number
    };
};
export default function Dashboard({ stats }: Stats) {
    toast.info("Bienvenido.");
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 lg:grid-cols-2  p-1 ">
                    <Link href='/alumnos'>
                        <Card className='bg-linear-to-r from-red-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <GraduationCap className='h-10 w-10' />
                                    <p className='text-2xl'>Alumnos</p>
                                    <Link href='/alumnos'>
                                        <ArrowRight className='text-red-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href='/profesores'>
                        <Card className='bg-linear-to-r from-red-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <PencilLineIcon className='h-10 w-10' />
                                    <p className='text-2xl'>Profesores</p>
                                    <Link href='/profesores'>
                                        <ArrowRight className='text-red-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href='/materias'>
                        <Card className='bg-linear-to-r from-red-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <BookOpen className='h-10 w-10' />
                                    <p className='text-2xl'>Materias</p>
                                    <Link href='/materias'>
                                        <ArrowRight className='text-red-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>

                </div>
            </div>
        </AppLayout>
    );
}
