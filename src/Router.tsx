import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:coinId/*" element={<Coin />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />}/>
        </Routes>
      </BrowserRouter>
    )
}
export default Router;