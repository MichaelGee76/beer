import { useState } from "react";
import "./AllBeers.css";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AllBeers = () => {
    const [myData, setMyData] = useState();
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then((res) => res.json())
            .then((fetchData) => setMyData(fetchData))
            .catch((error) => console.log("An error has occured", error));
    }, []);
    console.table(myData);

    return (
        <div>
            {myData ? (
                myData.map((element, index) => (
                    <div key={index} className="tile">
                        <img className="imgAll" src={element.image_url} alt={element.name} />
                        <div className="right">
                            <h2 className="heading2All">{element.name}</h2>
                            <h5 className="heading5All">{element.tagline}</h5>
                            <p className="paraAll">{element.first_brewed}</p>
                            <Button>
                                <Link className="detail" to={`/detail/${element._id}`}>
                                    Details
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Data loading ....</p>
            )}

            <Footer />
        </div>
    );
};

export default AllBeers;
