import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Trash } from "lucide-react"
import { router } from "@inertiajs/react"
import { useState } from "react"

interface DeleteDialogProps {
  resourceId: string | number
  routeName: string 
  description?: string
}

export const DeleteDialog = ({
  resourceId,
  routeName,
  description = "Esta acción no se puede deshacer. Se eliminará permanentemente.",
}: DeleteDialogProps) => {
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    router.delete(route(routeName, resourceId));
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className="flex items-center w-full hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
          <Trash className="w-4 h-4 " />
          <span className="text-sm">Eliminar</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
