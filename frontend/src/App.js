import "@/index.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const LogementsPage = lazy(() => import("./pages/LogementsPage").then(m => ({ default: m.LogementsPage })));
const DonsPage = lazy(() => import("./pages/DonsPage").then(m => ({ default: m.DonsPage })));
const OffresPage = lazy(() => import("./pages/OffresPage").then(m => ({ default: m.OffresPage })));
const EquipePage = lazy(() => import("./pages/EquipePage").then(m => ({ default: m.EquipePage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const AchatVentePage = lazy(() => import("./pages/AchatVentePage").then(m => ({ default: m.AchatVentePage })));

// Layout wrapper - conditionally renders footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {/* Footer is embedded in HomePage's dark wrapper, show standalone for other pages */}
      {!isHomePage && <Footer />}
      <WhatsAppFloat />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/logements" element={<LogementsPage />} />
              <Route path="/dons" element={<DonsPage />} />
              <Route path="/offres" element={<OffresPage />} />
              <Route path="/achat-vente" element={<AchatVentePage />} />
              <Route path="/equipe" element={<EquipePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
