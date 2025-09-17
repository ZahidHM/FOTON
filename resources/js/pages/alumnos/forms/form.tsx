import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Materia } from "@/pages/materias/table/columns"
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from "@inertiajs/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  nombre: z.string().nonempty({ message: "El nombre es requerido" }),
  apellido_pat: z.string().nonempty({ message: "El apellido paterno es requerido" }),
  apellido_mat: z.string().nonempty({ message: "El apellido materno es requerido" }),
  edad: z
    .string()
    .nonempty({ message: "La edad es requerida" })
    .refine((val) => /^\d+$/.test(val), { message: "La edad debe ser un número" })
  ,
  matricula: z.string().nonempty({ message: "La matrícula es requerida" }),
  grado: z.string().nonempty({ message: "El grado es requerido" }),
  materias: z.array(z.string()).optional(),
})
interface Props {
  data: Materia[];
}
export function CustomForm({ data }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido_pat: "",
      apellido_mat: "",
      edad: "",
      matricula: "",
      grado: "",
      materias: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.post('/alumnos', values, {
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
                <Input placeholder="Nombre del alumno" {...field} />
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

        <FormField
          control={form.control}
          name="edad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Edad</FormLabel>
              <FormControl>
                <Input placeholder="Edad del alumno" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="matricula"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Matrícula</FormLabel>
              <FormControl>
                <Input placeholder="Ej: A2025-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="grado"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grado</FormLabel>
              <FormControl>
                <Input placeholder="Ej: 3ro Secundaria" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="materias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Materias</FormLabel>
              <FormControl>
                <div className="flex flex-col space-y-2">
                  {data.map((m) => (
                    <label key={m.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={m.id}
                        checked={field.value?.includes(String(m.id)) || false}
                        onChange={(e) => {
                          const newValue = field.value ? [...field.value] : [];
                          if (e.target.checked) {
                            newValue.push(String(m.id));
                          } else {
                            const index = newValue.indexOf(String(m.id));
                            if (index > -1) newValue.splice(index, 1);
                          }
                          field.onChange(newValue);
                        }}
                      />
                      <span>{m.nombre} ({m.horario_inicio} - {m.horario_fin})</span>
                    </label>
                  ))}
                </div>
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
