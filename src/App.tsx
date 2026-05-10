import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Clients } from "./pages/Clients";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <div className="app">
                    <Header />
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/clients" element={<Clients />} />
                            <Route path="/careers" element={<Careers />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
