import React from "react";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";
import './index.css'
function App() {
  return (
    <div className="lg:flex-1">
      <AppRoutes/>
      <Footer/> 
      {/* <Login />
      <Footer/> */}
    </div>
  );
}

export default App;
