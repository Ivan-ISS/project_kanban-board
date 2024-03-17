import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from "./Component/Layout/layout";
import Header from "./Component/Header/header";
import Main from "./Component/Main/main";
import Footer from "./Component/Footer/footer";

function App() {
    return (
        <BrowserRouter>
            <Layout
              HeaderComponent={<Header />}
              MainComponent={<Main />}
              FooterComponent={<Footer />}
            />
        </BrowserRouter>
    );
}

export default App;
