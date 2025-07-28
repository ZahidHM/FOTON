import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart";

type ChartData = {
    month: string;
    total: number;
}[];

interface Props {
    data: ChartData;
}

export default function Chart({ data }: Props) {
    const chartConfig = {
        total: {
            label: "Empresas",
            color: "#10b981",
        },
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
            <BarChart data={data} >
                <CartesianGrid vertical={false}  />
                <XAxis 
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    tick={{
                        style: {
                            fill: "#111827",
                        },
                    }}
                />
                <ChartTooltip   content={<ChartTooltipContent   />} />
                <Bar  dataKey="total" fill="var(--chart-1)" radius={4}  
                />
            </BarChart>
        </ChartContainer>
    );
}
