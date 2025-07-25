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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  id_tipo_documento: z.string().nonempty({
    message: "El tipo de archivo es requerido",
  }),
  nombre: z.string().nonempty({
    message: "El nombre es requerido",
  }),
  otro: z
    .array(z.instanceof(File))
    .nonempty({
      message: "El archivo es requerido",
    }),
})

interface Props {
  id_carpeta: string;
  types_documents: TypeDocument[];
}
type TypeDocument = {
  id: string
  nombre: string
}
export function ExplorerForm(
  { id_carpeta, types_documents }: Props
) {
  const [current_id_carpeta] = useState(id_carpeta);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      id_tipo_documento: "",
      otro: [],
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    router.post('/documents', {
      ...values,
      id_carpeta: current_id_carpeta,
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
              <FormLabel>Nombre del archivo</FormLabel>
              <FormControl>
                <Input placeholder="Nuevo Archivo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="id_tipo_documento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de archivo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una empresa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {types_documents.map((type) =>
                    <SelectItem value={String(type.id)} key={type.id}>{type.nombre}</SelectItem>

                  )}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="otro"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Subir archivos (Dropzone)</FormLabel>
                <FormControl>
                  <DropzoneInput value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  )
}


