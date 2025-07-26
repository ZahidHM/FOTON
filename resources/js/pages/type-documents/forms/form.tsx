import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Direction } from "@/pages/directions/table/columns"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { typeDocuments } from "../table/columns"

const formSchema = z.object({
  nombre: z.string().nonempty({
    message: "El nombre es requerido",
  }),


})

export function AreaForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
    router.post('/types-documents', values)


  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del tipo de documento</FormLabel>
              <FormControl>
                <Input placeholder="Documento" {...field} />
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