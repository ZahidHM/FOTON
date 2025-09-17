import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Profesor } from "../table/columns"

const formSchema = z.object({
  nombre: z.string().nonempty({ message: "El nombre es requerido" }),
  apellido_pat: z.string().nonempty({ message: "El apellido paterno es requerido" }),
  apellido_mat: z.string().nonempty({ message: "El apellido materno es requerido" }),
})

interface Props {
  profesor: Profesor;
}
export function EditForm({ profesor }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: profesor.nombre,
      apellido_pat: profesor.apellido_pat,
      apellido_mat: profesor.apellido_mat,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.put(`/profesores/${profesor.id}`, values, {

      onError: (errors) => {
        Object.entries(errors).forEach(([key, value]) => {
          const message = Array.isArray(value) ? value.join(", ") : String(value);
          form.setError(key as any, {
            type: "server",
            message,
          });
        });
      }

    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del profesor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="apellido_pat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido Paterno</FormLabel>
              <FormControl>
                <Input placeholder="Apellido paterno" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="apellido_mat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido Materno</FormLabel>
              <FormControl>
                <Input placeholder="Apellido materno" {...field} />
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
