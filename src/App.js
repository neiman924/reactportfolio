import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Head from "./components/head";
import Navbar from "./components/navbar";
//import Header from "./components/header";
import Footer from "./components/footer";

function App(){
    return(
        <div>
            <Navbar/>
            <Head/>
            <PortfolioContainer/>
            <Footer />
        </div>
    );
}

//const App = () => <PortfolioContainer/>

export default App;
