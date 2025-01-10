import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import RegisterTeacher from "./pages/RegisterTeacher/RegisterTeacher";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={ <Login/> } > </Route>
               <Route path="/register" element={ <Register/> } > </Route>
               <Route path="/registro-professor" element={ <RegisterTeacher/> } > </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;