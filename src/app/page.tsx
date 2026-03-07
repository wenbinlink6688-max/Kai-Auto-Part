import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain">
      <Header />
      <Hero />
      <div className="section-divider" />
      <Categories />
      <div className="section-divider" />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
