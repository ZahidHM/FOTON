import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { CirclePlus, Clipboard, EditIcon, EyeIcon, MoreHorizontal, Trash } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

export type Company = {
  id: string
  nombre: string
}

export const columns: ColumnDef<Company>[] = [
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

    id: "acciones",
    size: 50,
    cell: ({ row }) => {
      const company = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              <Link className="flex w-full items-center" href={route('directions.show', company.id)}>
                <EyeIcon />
                Ver
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="flex w-full items-center" href={route('companies.edit', company.id)}>

                <EditIcon />
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash />
              Eliminar
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