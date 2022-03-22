import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface tg{
  toggleTheme: () => void;
}

function Router({toggleTheme}:tg){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:coinId/*" element={<Coin toggleTheme={toggleTheme}/>} />
          <Route path={`/`} element={<Coins />}/>
        </Routes>
      </BrowserRouter>
    )
}
export default Router;