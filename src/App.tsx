import React from 'react';
import Layout from "./Component/Layout/layout";
import Header from "./Component/Header/header";
import Main from "./Component/Main/main";
import Footer from "./Component/Footer/footer";

function App() {
    return (
        <Layout
          HeaderComponent={<Header />}
          MainComponent={<Main />}
          FooterComponent={<Footer />}
        />
    );
}

export default App;
