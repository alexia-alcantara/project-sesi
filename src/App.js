import React from "react";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="flex flex-col">
      <AppRoutes/>
      <Footer/> 
      {/* <Login />
      <Footer/> */}
    </div>
  );
}

export default App;
