import Banner from "./Banner/Banner";
import Benefit from "./Benefit/Benefit";
import FAQ from "./FAQ/FAQ";
import Saying from "./Saying/Saying";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Benefit></Benefit>
          <Saying></Saying>
          <FAQ></FAQ>
        </div>
    );
};

export default Home;