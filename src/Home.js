import Topics from "./components/Accordion";
import Cards from "./components/Cards";
import FormOrder from "./components/Form";
import Hero from "./components/Hero";
import NavbarSection from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <NavbarSection />
      <Hero />
      <Cards />
      <Topics />
      <FormOrder />
    </div>
  );
};

export default Home;
