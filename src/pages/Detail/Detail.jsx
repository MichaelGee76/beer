import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Detail.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Detail = () => {
    const [myBeer, setMyBeer] = useState([]);
    const [filteredBeer, setFilteredBeer] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then((res) => res.json())
            .then((fetchData) => setMyBeer(fetchData))
            .catch((error) => console.log("An error has occured", error));
    }, []);

    const { id } = useParams();

    useEffect(() => {
        const currentBeer = myBeer.find((i) => i._id === id);
        setFilteredBeer(currentBeer);
    }, [myBeer]);
    // Sorgt dafür dass die daten erst gefetched werden bevor das html gebaut wird!
    // ähnlich wie der ternary nur kürzer
    if (filteredBeer === undefined) return "Loading...";
    return (
        <div>
            <div className="output">
                <h1>Beer of the Day</h1>
                <img src={filteredBeer.image_url} alt="" />
                <h2 className="headingRandom">
                    {filteredBeer.name} <span className="italic">Contributed by {filteredBeer.contributed_by}</span>
                </h2>
                <p className="paramRandom">{filteredBeer.tagline}</p>
                <p className="firstBrewed">First brewed: {filteredBeer.first_brewed}</p>
                <p className="attRandom">Attenuation level: {filteredBeer.attenuation_level}</p>
                <p className="description">{filteredBeer.description}</p>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;
