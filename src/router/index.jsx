import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { InsideHome } from "../pages/InsideHome";
import { Questionario1 } from "../pages/Questionario1";
import { Questionario2 } from "../pages/Questionario2";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/SignIn" element={<SignIn /> } />
            <Route path="/SignUp" element={<SignUp /> } />
            <Route path="/InsideHome" element={<InsideHome /> } />
            <Route path="/Questionario1" element={<Questionario1 /> } />
            <Route path="/Questionario2" element={<Questionario2 /> } />
        </Routes>
    )
}