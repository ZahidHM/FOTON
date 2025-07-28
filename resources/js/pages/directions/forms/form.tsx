import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Company } from "@/pages/companies/table/columns"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  nombre: z.string().nonempty({
    message: "El nombre es requerido",
  }),
  id_empresa: z.string().nonempty({
    message: "La empresa es requerido",
  }),

})
interface Props {
  companies: Company[];
}
export function DirectionForm({ companies }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      id_empresa: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
    router.post('/directions', values)


  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la direccion</FormLabel>
              <FormControl>
                <Input placeholder="Direccion de desarrollo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="id_empresa"
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
                  {companies.map((company) =>
                    <SelectItem value={String(company.id)} key={company.id}>{company.nombre}</SelectItem>

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