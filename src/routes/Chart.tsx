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
                        labels: {show: false},
                        axisTicks: {show : false },
                        axisBorder: { show: false},
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