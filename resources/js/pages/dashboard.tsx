import Chart from '@/components/custom/example-chart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Building, ChevronRightIcon, TrendingUp } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inicio',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3 border-1 border-green-500 p-1">
                    {/* <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div> */}
                    <Card className='bg-linear-to-b from-blue-600 to-gray-300 max-w-sm '>
                        <CardHeader>
                            <CardTitle className='border flex items-center justify-between'>
                                <Building className='h-10 w-10' />
                                <Button asChild variant="link">
                                    <Link href='/companies'>
                                        <p className='text-2xl'>Empresas</p>
                                    </Link>
                                </Button>
                                <Badge className=''>
                                    <TrendingUp />
                                    +10%
                                </Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className=' '>
                            <p className='font-bold text-lg '>Total: 50</p>
                            <Chart />
                        </CardContent>
                    </Card>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
