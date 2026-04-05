import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { HomePage } from "./pages/HomePage";
import { LogementsPage } from "./pages/LogementsPage";
import { DonsPage } from "./pages/DonsPage";
import { OffresPage } from "./pages/OffresPage";
import { EquipePage } from "./pages/EquipePage";
import { ContactPage } from "./pages/ContactPage";
import { AchatVentePage } from "./pages/AchatVentePage";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logements" element={<LogementsPage />} />
            <Route path="/dons" element={<DonsPage />} />
            <Route path="/offres" element={<OffresPage />} />
            <Route path="/achat-vente" element={<AchatVentePage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
