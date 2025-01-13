import React from "react";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";
import './index.css'
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
