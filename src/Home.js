import Cards from "./components/Cards";
import Hero from "./components/Hero";
import NavScrollExample from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <NavScrollExample />
      <Hero />
      <Cards />
    </div>
  );
};

export default Home;
