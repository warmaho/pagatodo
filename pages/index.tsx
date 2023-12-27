import React from "react";

import { Cards, Footer, Header, Main, NextTranslateExample, Counter, AxiosExample } from "@components";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <div className="container">
        <NextTranslateExample  defaultNamespace={"en"}/>
        <Counter />
        <AxiosExample />
        <Main />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
