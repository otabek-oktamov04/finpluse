import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Transactions from "../components/transactions/transactions";
import CounterParts from "../components/counter-parts/counter-parts";
import Projects from "../components/projects/projects";
import CompanyAccounts from "../components/company-accounts/company-accounts";
import Banks from "../components/banks/banks";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="counterparts" element={<CounterParts />} />
      <Route path="projects" element={<Projects />} />
      <Route path="company-accounts" element={<CompanyAccounts />} />
      <Route path="banks" element={<Banks />} />
    </Routes>
  );
};

export default PrivateRoutes;
