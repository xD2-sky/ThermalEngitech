import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import Seo from "@/components/Seo";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsStrip from "@/components/landing/StatsStrip";
import Marquee from "@/components/landing/Marquee";
import About from "@/components/landing/About";
import Products from "@/components/landing/Products";
import WhyUs from "@/components/landing/WhyUs";
import Industries from "@/components/landing/Industries";
import Certifications from "@/components/landing/Certifications";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";
import FloatingActions from "@/components/landing/FloatingActions";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        let id;
        const raf = (time) => {
            lenis.raf(time);
            id = requestAnimationFrame(raf);
        };
        id = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="font-sans">
            <Seo
                title="Thermal Engitech — Industrial Steam Boilers & Thermic Fluid Heaters"
                siteName="Thermal Engitech"
                description="Steam boilers, thermic fluid heaters and process-heat systems, engineered and manufactured in Dhamatwan, Gujarat. IBR, ASME and ISO 9001:2015 compliant."
                image="/images/hero-boiler-bright-final.jpg"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Thermal Engitech Pvt. Ltd.",
                    description:
                        "Manufacturer of steam boilers, thermic fluid heaters, heat exchangers and process-heat systems in Dhamatwan, Gujarat.",
                    telephone: "+91 70693 06431",
                    email: "info@thermalengitech.com",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "12B, Shrey Industrial Park, Road, Dhamatwan, Undrel",
                        addressLocality: "Ahmedabad",
                        addressRegion: "Gujarat",
                        postalCode: "382435",
                        addressCountry: "IN",
                    },
                }}
            />
            <Navbar />
            <main>
                <Hero />
                <StatsStrip />
                <Marquee />
                <About />
                <Products />
                <WhyUs />
                <Industries />
                <Certifications />
                <CtaBand />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}

export default App;
