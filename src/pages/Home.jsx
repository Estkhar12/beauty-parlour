import Banner from "../components/Banner";
import BannerAbout from "../components/BannerAbout";
import Header from "../components/Header";
import Testomonial from "../components/Testomonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Testomonial />
      <Banner />
      <BannerAbout />
    </div>
  );
};

export default Home;
