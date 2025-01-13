import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import RegisterTeacher from "./pages/RegisterTeacher/RegisterTeacher";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={ <Navigate to="/login" /> } /> 
               <Route path="/login" element={ <Login/> } />
               <Route path="/register" element={ <Register/> } />
               <Route path="/registro-professor" element={ <RegisterTeacher/> } />
               <Route path="/registro-aluno" element={ <RegisterStudent/>} />
               <Route path="/redefinir-senha" element={ <ResetPassword/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;