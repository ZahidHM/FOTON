import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { useDropzone } from "react-dropzone"
import { DropzoneInput } from "./dropzone"
import { router } from "@inertiajs/react"
import { useState } from "react"

const formSchema = z.object({
  nombre: z.string().nonempty({
    message: "El nombre es requerido",
  }),
})

export function ExplorerForm(
  { parent, id_area }: { parent?: [], id_area?: number }
) {
  const [currentParent] = useState(parent);
  const [currentIdArea] = useState(id_area);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("id", currentIdArea);
    console.log("pariente", currentParent);
    // Aquí podrías subir archivos con FormData o enviar a backend
    router.post('/folders', {
      ...values, parent: currentParent,
      id_area: currentIdArea,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la carpeta</FormLabel>
              <FormControl>
                <Input placeholder="Nueva Carpeta" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  )
}


