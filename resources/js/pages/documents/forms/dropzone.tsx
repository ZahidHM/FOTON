import { useDropzone } from "react-dropzone"

export function DropzoneInput({
    value,
    onChange,
}: {
    value: File[] | undefined
    onChange: (files: File[]) => void
}) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            onChange(acceptedFiles)
        },
    })

    return (
        <div
            {...getRootProps()}
            className={`p-6 border-2 border-dashed rounded cursor-pointer text-center ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
        >
            <input {...getInputProps()} />
            {value && value.length > 0 ? (
                <ul className="text-left">
                    {value.map((file, i) => (
                        <li key={i}>{file.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Arrastra archivos aquí o haz clic para seleccionar</p>
            )}
        </div>
    )
}