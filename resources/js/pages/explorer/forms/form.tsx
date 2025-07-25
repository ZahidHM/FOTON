
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
//DROPZONE
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from "react"
import { router } from "@inertiajs/react"

// const [file, setFile] = useState();
const formSchema = z.object({
    file: z.array(z.instanceof(File)).min(1, {
        message: "Debes seleccionar al menos un archivo.",
    })
})



export function ExplorerForm() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            file: [],
        },
    })
    const onDrop = useCallback((acceptedFiles: any[]) => {
        // Do something with the files
        // console.log(acceptedFiles[0]);
        form.setValue("file", acceptedFiles, { shouldValidate: true })

    }, [])
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values.file[0]);
        console.log(acceptedFiles);
        router.post('/upload', values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field: { onChange, value, ...fieldProps } }) => (
                        <FormItem>
                            <FormControl>
                                {/* <Input type="file"
                                    onChange={(e) => onChange(e.target.files)}
                                    {...fieldProps}
                                /> */}
                                <div {...getRootProps()} className="border-2 bg-gray-200 rounded-md p-8 border-dashed border-blue-600">
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                            <p>Arrastra los archivos aqui...</p> :
                                            <p>Arrastra los archivos aqui , o haz click para seleccionar</p>
                                    }
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}