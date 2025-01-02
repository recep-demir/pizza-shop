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







        // <div className="home">
        //     <div className="banner">
        //         <img src={BannerImage} alt="banner" />
        //     </div>
        //     <div className="content">
        //         <h1> Welcome to Pizza Place </h1>
        //         <p> The best pizza in town </p>
        //     </div>
        // </div>
    );
}


export default Home;