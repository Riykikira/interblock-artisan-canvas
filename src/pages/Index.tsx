import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AngularTool from "@/components/AngularTool";
import Products from "@/components/Products";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AngularTool />
      <Products />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
