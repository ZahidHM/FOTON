import { DeleteDialog } from "@/components/custom/DeleteDialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link, router } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { CirclePlus, Clipboard, EditIcon, EyeIcon, MoreHorizontal, Trash } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { useState } from "react"

export type Alumno = {
  id: string
  nombre: string
}

export const columns: ColumnDef<Alumno>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "apellido_pat",
    header: "Apellido Paterno",
  },
  {
    accessorKey: "apellido_mat",
    header: "Apellido Materno",
  },
  {
    accessorKey: "edad",
    header: "Edad",
  },
  {
    accessorKey: "matricula",
    header: "Matricula",
  },
  {
    accessorKey: "grado",
    header: "Grado",
  },

  {

    id: "acciones",
    size: 50,
    cell: ({ row }) => {
      const company = row.original
      const [open, setOpen] = useState(false);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              <Link className="flex w-full items-center" 
              href=
              ""
              // {route('directions.show', company.id)}
              >
                <EyeIcon />
                Ver
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="flex w-full items-center" href={route('alumnos.edit', company.id)}>

                <EditIcon />
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteDialog
                resourceId={company.id}
                routeName="alumnos.destroy"
                description="Esta acción no se puede deshacer. Se eliminará permanentemente la empresa."
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(company.nombre)}
            >
              <Clipboard />
              Copiar nombre
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]