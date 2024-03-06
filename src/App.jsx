import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllBeers from "./pages/AllBeers/AllBeers";
import RandomBeers from "./pages/RandomBeers/RandomBeers";
import Detail from "./pages/Detail/Detail";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/allbeers" element={<AllBeers />}></Route>
                    <Route path="/randombeers" element={<RandomBeers />}></Route>
                    <Route path="/detail/:id" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
