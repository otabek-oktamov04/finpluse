import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ConfigProvider locale={ruRu}>
        <App />
      </ConfigProvider>
    </ChakraProvider>
  </React.StrictMode>
);
