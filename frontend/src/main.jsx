import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import DownloadPage from "./components/pages/DownloadPage";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/helper/ScrollToTop";
import TermsCustomer from "./components/pages/TermsCustomer";
import PrivacyPoliciesPage from "./components/pages/PrivacyPoliciesPage";
import JobsPage from "./components/pages/JobsPage";
import RegisterCv from "./components/pages/RegisterCv";
import TermsSeller from "./components/pages/TermsSeller";
import TermsDelivery from "./components/pages/TermsDelivery";
import SupportPage from "./components/pages/SupportPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simula un tiempo de carga para demostración

    // Limpia el temporizador cuando el componente se desmonta o cuando isLoading cambia a falso
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/termsCustomer" element={<TermsCustomer />} />
            <Route path="/termsSeller" element={<TermsSeller />} />
            <Route path="/termsDelivery" element={<TermsDelivery />} />
            <Route path="/privacyPolicies" element={<PrivacyPoliciesPage />} />
            <Route path="/jobsPage" element={<JobsPage />} />
            <Route path="/register" element={<RegisterCv />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
      {isLoading && <Preloader />}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
