import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Folder } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Carpetas',
    href: '/explorer',
  },
];

type Folder = {
  id: number;
  id_area: number;
  id_padre: number;
  nombre: string;
  hijas: Folder[];
};

interface Props {
  folders: Folder[];
}
export default function Index(
  { folders }: Props
) {



  console.log(folders);
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="container mx-auto py-10 px-10 border-4">
        <div className="grid grid-cols-1 border">
          {folders.map((folder) => (
            <FolderTree key={folder.id} folder={folder} />
          ))}
        </div>
      </div>

    </AppLayout>
  );
}

function FolderTree({ folder, level = 0 }: { folder: Folder; level?: number }) {
  return (
    <div className={`pl-${level * 4} flex items-center space-x-2 border border-red-500`}>
      <Folder className="w-4 h-4" />
      <span>{folder.nombre}</span>
      {folder.hijas && folder.hijas.length > 0 && (
        <div className="pl-4">
          {folder.hijas.map((child) => (
            <FolderTree key={child.id} folder={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}