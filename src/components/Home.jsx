import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
    return (
      
        <div className="home" id="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Noname's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <a href="#menu">
          <button> ORDER NOW </button>
        </a>
      </div>
    </div>

    );
}


export default Home;