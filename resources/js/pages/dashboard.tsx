import Chart from '@/components/custom/example-chart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Blocks, Building, ChevronRightIcon, File, TrendingUp, Users } from 'lucide-react';
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
                    <Link href='/companies'>
                        <Card className='bg-linear-to-r from-blue-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <Building className='h-10 w-10' />
                                    <p className='text-2xl'>Empresas</p>
                                    <Link href='/companies'>
                                        <ArrowRight className='text-blue-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href='/directions'>
                        <Card className='bg-linear-to-r from-blue-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <Blocks className='h-10 w-10' />
                                    <p className='text-2xl'>Direcciones</p>
                                    <Link href='/directions'>
                                        <ArrowRight className='text-blue-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href='/areas'>
                        <Card className='bg-linear-to-r from-blue-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <Users className='h-10 w-10' />
                                    <p className='text-2xl'>Áreas</p>
                                    <Link href='/areas'>
                                        <ArrowRight className='text-blue-600' />
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href='/types-documents'>
                        <Card className='bg-linear-to-r from-blue-600 to-gray-300 max-w-md hover:scale-100 scale-95 '>
                            <CardHeader>
                                <CardTitle className=' flex items-center justify-between'>
                                    <File className='h-10 w-10' />
                                    <p className='text-2xl'>Tipo de documentos</p>
                                    <Link href='/types-documents'>
                                        <ArrowRight className='text-blue-600' />
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
