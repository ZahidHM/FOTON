import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Profesor } from "@/pages/profesores/table/columns"
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Materia } from "../table/columns"

const formSchema = z.object({
  nombre: z.string().nonempty({ message: "El nombre es requerido" }),
  horario_inicio: z.string().nonempty({ message: "El horario es requerido" }),
  horario_fin: z.string().nonempty({ message: "El horario es requerido" }),
  id_profesor: z.string(),

})

interface Props {
  data: Profesor[];
  materia: Materia;
}
export function EditForm({ data, materia }: Props) {
  console.log(data);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: materia.nombre,
      horario_inicio: materia.horario_inicio,
      horario_fin: materia.horario_fin,
      id_profesor: String(materia.id_profesor) ?? "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.put(`/materias/${materia.id}`, values, {
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
                <Input placeholder="Nombre de la materia" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="horario_inicio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horario inicio</FormLabel>
              <FormControl>
                <Input type="time" placeholder="11:11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="horario_fin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horario fin</FormLabel>
              <FormControl>
                <Input type="time" placeholder="16:00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="id_profesor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profesor</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Selecciona un profesor</option>
                  {data.map((prof) => (
                    <option key={prof.id} value={prof.id}>
                      {prof.nombre}
                    </option>
                  ))}
                </select>
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
