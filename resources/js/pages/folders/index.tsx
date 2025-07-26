import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, FilePlus, Folder, Plus, PlusCircle } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Carpetas',
    href: '/explorer',
  },
];

type Document = {
  id: number;
  id_carpeta: number;
  id_tipo_documento: number;
  nombre: string;
  archivo: string;
}
type FolderType = {
  id: number;
  id_area: number;
  id_padre: number;
  nombre: string;
  hijas: FolderType[];
  documents?: Document[];
};

interface Props {
  folders: FolderType[];
  table_id_area: number;
}
export default function Index(
  { folders, table_id_area }: Props
) {

  console.log(folders);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      {folders.length === 0 && (
        <div className="p-10">
          <Link href="/folders/create" data={{ table_id_area: table_id_area }} className=' flex items-center' >
            <Folder className="text-sm mr-1" />
            Crear carpeta
            <PlusCircle className="ml-1 text-sm text-blue-500" />
          </Link>
        </div>
      )}
      <div>
        {folders.length > 0 && (

          <Link href="/folders/create"
            data={{ table_id_area: folders[0].id_area }}
            className=' flex items-center' >
            <Folder className="text-sm mr-1" />
            Crear carpeta
            <PlusCircle className="ml-1 text-sm text-blue-500" />
          </Link>
        )}
        {folders.map((folder) => (
          <FolderTree key={folder.id} folder={folder} id_area={folders[0].id_area} />
        ))}
      </div>
    </AppLayout>

  );
}

function FolderTree({ folder, level = 0, id_area }: { folder: FolderType; level?: number, id_area: number }) {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (


    <div className="ml-4">

      <div className="flex items-center">
        <div className="flex items-center cursor-pointer"
          onClick={toggle}

        >
          {folder.hijas.length > 0 ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4 mr-1" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-1" />
            )
          ) : (
            <span className="w-4 h-4 mr-1" />
          )}
          <Folder className="w-4 h-4 mr-2" />
          <span>{folder.nombre}</span>
        </div>
        <Link href={`/folders/create`}
          data={{ id: folder.id }}
        >
          <PlusCircle className="ml-1 text-sm text-blue-500 " />
        </Link>
        <Link href={`/documents/create`}
          data={{ id: folder.id, id_area: id_area }}
        >
          <FilePlus className="ml-1 text-sm text-cyan-500 " />
        </Link>

      </div>

      {isOpen && folder.hijas && folder.hijas.length > 0 && (
        <div>
          {folder.hijas.map((child) => (
            <FolderTree key={child.id} folder={child} level={level + 1} id_area={id_area} />
          ))}
        </div>
      )}

      {isOpen && folder.documents && folder.documents.length > 0 && (
        <div className="ml-4">
          {folder.documents.map((doc) => (
            <div key={doc.id} className="flex items-center">
              <span className="w-4 h-4 mr-1">📄</span>
              <a
                href={`/storage/${doc.archivo}`}
                className="text-blue-600 underline"
                target="_blank"
              >
                {doc.nombre}
              </a>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
