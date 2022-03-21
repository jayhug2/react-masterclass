import { useQuery } from "react-query"
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number; 
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({coinId}: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))
    console.log(data);
    return (
        <div>
            {isLoading ? ("Loading Chart...")
            : (
            <ReactApexChart
                type="line"
                options={{ 
                    theme: {
                        mode: "dark",
                    },
                    chart: {
                        height:300, 
                        width:500,
                        toolbar:{
                            show: false
                        },
                        background:"transparent",
                    },
                    grid:{ show: false },
                    stroke: {
                        curve: "smooth",
                        width: 3
                    },
                    yaxis:{
                        show:false
                    },
                    xaxis:{
                        axisBorder: { show: false},
                        axisTicks: {show : false },
                        labels: {
                            show: false,
                            datetimeFormatter:{month:"mmm'yy"},
                        },
                        type:"datetime",
                        categories: data?.map((price) => price.time_close),
                        
                    },
                    fill: { 
                        type: "gradient", 
                        gradient:{gradientToColors:["#0be881"], stops: [0,100]},
                    },
                    colors: ["#0fbcf9"],
                    tooltip: {
                        y: {
                            formatter: (value) => `$${value.toFixed(3)}`
                        }
                    }
                }}
                series={[
                    { 
                        name: "sales", 
                        data: data?.map((price) => price.close)??[],
                    }
                ]}
            />
            )
            }
        </div>
    )
}

export default Chart;