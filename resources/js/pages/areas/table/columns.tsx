import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "@inertiajs/react"
import { ColumnDef } from "@tanstack/react-table"
import { CirclePlus, Clipboard, EditIcon, EyeIcon, MoreHorizontal, Trash } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

export type Area = {
  id: string
  id_direccion: string
  nombre: string

}

export const columns: ColumnDef<Area>[] = [
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
    id: "nombre",
    accessorKey: "nombre",
    header: "Area",
  },
  {
    id: "direccion",
    accessorKey: "direction.nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Direccion
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {

    id: "acciones",
    size: 50,
    cell: ({ row }) => {
      const direction = row.original

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
            <DropdownMenuItem>
              {/* <Link href={route('explorer.index', direction.id)} className="flex w-full items-center"> */}
              <Link href={route('folders.index', direction.id)} className="flex w-full items-center">
                <EyeIcon />
                Ver
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={route('areas.edit', direction.id)} className="flex w-full items-center">
                <EditIcon />
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="" className="flex w-full items-center">
                <Trash />
                Eliminar
              </Link>

            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(direction.nombre)}
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