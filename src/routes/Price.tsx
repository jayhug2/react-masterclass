import { useQuery } from "react-query";
import { fetchCoinHistory2 } from "../api";
import styled from "styled-components"

const Container = styled.div`
    max-width:480px;
    margin: 0 auto;
    padding: 0px 20px;
`

const DataList = styled.div`
    width:100%;
    font-size: 15px;
    background-color:rgba(0,0,0,0.5);
    line-height:30px;
    border-radius:10px;
    padding: 5px;
    color: white;
    span{
        color:${props => props.theme.accentColor}
    }
    & + & {
        margin-top:20px;
    }
`
interface PriceProps {
    coinId: string;
}
function Price({ coinId }:PriceProps){
    const {isLoading, data} = useQuery(["ohlcv", coinId], () => fetchCoinHistory2(coinId))    
    console.log(data);
    return (
        <Container>
            {isLoading? ("Loading...") : (
                <>
                <DataList><span>Market Cap : </span>{data[0].market_cap} $</DataList>
                <DataList><span>All Time High : </span>{data[0].high.toFixed(3)} $</DataList>
                <DataList><span>All Time Date : </span>{data[0].time_open.substr(0,10)}</DataList>
                </>
            )
            }
        </Container>
    )
}

export default Price;