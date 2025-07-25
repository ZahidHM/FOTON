import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

export default function Chart() {
    const chartData = [
        { month: "Enero", desktop: 186, mobile: 80 },
        { month: "Febrero", desktop: 305, mobile: 200 },
        { month: "Marzo", desktop: 237, mobile: 120 },
        { month: "Abril", desktop: 73, mobile: 190 },
        { month: "Mayo", desktop: 209, mobile: 130 },
        { month: "Junio", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Direcciones",
            color: "#2563eb",
        },
        mobile: {
            label: "Areas",
            color: "#60a5fa",
        },
    } satisfies ChartConfig
    return (

        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis

                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    tick={{
                        style: {
                            fill: "#111827", // Tailwind gray-900
                        },
                    }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
        </ChartContainer>

    );
}