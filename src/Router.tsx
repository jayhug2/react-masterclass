import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface tg{
  toggleTheme: () => void;
  isDark : boolean
}

function Router({toggleTheme,isDark}:tg){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:coinId/*" element={<Coin toggleTheme={toggleTheme} isDark={isDark}/>} />
          <Route path={`/`} element={<Coins />}/>
        </Routes>
      </BrowserRouter>
    )
}
export default Router;