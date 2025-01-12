import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import RegisterTeacher from "./pages/RegisterTeacher/RegisterTeacher";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={ <Navigate to="/login" /> } /> 
               <Route path="/login" element={ <Login/> } />
               <Route path="/register" element={ <Register/> } />
               <Route path="/registro-professor" element={ <RegisterTeacher/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;