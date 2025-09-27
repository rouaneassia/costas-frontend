import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./component/Header";
import Acceuil from "./pages/Acceuil";
import Footer from "./component/Footer";
import APropos from "./pages/Aprops";
import DomaineServic from "./pages/DomainesService";
import Contacts from "./pages/Contact";
import Equipe from "./pages/Equipe";
import RendezVousForm from "./component/FormulaireRendez";
import Register from "./auth/Register";
import AuthProtected from "./conditions/AuthProtected";
import LoginForm from "./auth/login";
import PublicationPage from "./component/Publication";
import PublicationsFeed from "./component/Publication";

function App() {
  const location = useLocation();

  // Liste des routes sans Header/Footer
  const hideLayoutPaths = ["/login", "/register"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <AuthProvider>
      {!shouldHideLayout && <Header />}
      
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/domaine" element={<DomaineServic />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/rendez-vous" element={<RendezVousForm />} />
        <Route path="/publication" element={<PublicationsFeed />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </AuthProvider>
  );
}

export default App;
