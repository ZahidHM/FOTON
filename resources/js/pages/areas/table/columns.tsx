import { DeleteDialog } from "@/components/custom/DeleteDialog"
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
    id: "area",
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
      const area = row.original
      console.log("AREA", area.id);
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
              <Link href={route('folders.show', area.id)} className="flex w-full items-center">
                <EyeIcon />
                Ver
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={route('areas.edit', area.id)} className="flex w-full items-center">
                <EditIcon />
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteDialog
                resourceId={area.id}
                routeName="areas.destroy"
                description="Esta acción no se puede deshacer. Se eliminará permanentemente el area."
              />
            </DropdownMenuItem> 
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(area.nombre)}
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