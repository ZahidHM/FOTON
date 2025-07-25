import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Company } from "@/pages/companies/table/columns"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Area } from "../table/columns"
import { Direction } from "@/pages/directions/table/columns"

const formSchema = z.object({
  nombre: z.string().nonempty({
    message: "El nombre es requerido",
  }),
  id_direccion: z.string().nonempty({
    message: "La empresa es requerido",
  }),

})
interface Props {
  area: Area;
  directions: Direction[];
}
export function EditForm({ directions, area }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: area.nombre,
      id_direccion: String(area.id_direccion),
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    console.log(area.id)
    router.put(`/areas/${area.id}`,values)


  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del area</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="id_direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una empresa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {directions.map((direction) =>
                    <SelectItem value={String(direction.id)} key={direction.id}>{direction.nombre}</SelectItem>

                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  )

}