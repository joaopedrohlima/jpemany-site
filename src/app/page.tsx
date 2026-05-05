import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col">
      <Header />
      <div className="flex-1">
        <Hero />
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
