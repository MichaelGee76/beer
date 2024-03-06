import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./RandomBeers.css";
import Footer from "../../components/Footer/Footer";

const RandomBeers = () => {
    const [myRandomBeer, setRandomBeer] = useState();
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => response.json())
            .then((data) => setRandomBeer(data))
            .catch((error) => console.log("An error has occured 5!!", error));
    }, []);

    console.log(myRandomBeer);
    // Sorgt dafür dass die daten erst gefetched werden bevor das html gebaut wird!
    // ähnlich wie der ternary nur kürzer und besser!!!!
    if (myRandomBeer === undefined) return "Loading...";
    return (
        <div>
            <div className="output">
                <h1>Beer of the Day</h1>
                <img src={myRandomBeer.image_url} alt="" />
                <h2 className="headingRandom">
                    {myRandomBeer.name} <span className="italic">Contributed by {myRandomBeer.contributed_by}</span>
                </h2>
                <p className="paramRandom">{myRandomBeer.tagline}</p>
                <p className="firstBrewed">First brewed: {myRandomBeer.first_brewed}</p>
                <p className="attRandom">Attenuation level: {myRandomBeer.attenuation_level}</p>
                <p className="description">{myRandomBeer.description}</p>
            </div>
            <Footer />
        </div>
    );
};

export default RandomBeers;
