import { NavLink } from "react-router-dom";
import "./Home.css";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

const Home = () => {
    return (
        <div>
            <HeaderHome />
            <div className="container">
                <NavLink className="heroLink" to={"/allbeers"}>
                    <div className="inner">
                        <img className="hero" src="./all.avif" alt="two beers, two hands , sunset, landscape" />
                        <h2 className="heading2Hero">All Beers</h2>
                        <p className="info">
                            Did you know that Japanese sake is actually a type of beer, not a wine? Your tongue has about 10,000 taste buds, so put them to good work and try a new beer! 85 to 90% of beer consumed in Canada is manufactured in Canada. How many industries can say the same thing? Canada
                            has one of the highest beer taxes in the world. In Canada, beer has 3 times the economic impact of wine and spirits combined. The Canadian brewing industry has reduced its energy consumption by 58% since 1990, which is beneficial to the environment and saves costs.
                        </p>
                        <hr />
                    </div>
                </NavLink>

                <NavLink className="heroLink" to="/randombeers">
                    <div className="inner">
                        <img className="hero" src="./random.avif" alt="cold beer and bread" />
                        <h2 className="heading2Hero">Random Beers</h2>
                        <p className="info">
                            Tasting and serving beer: When experimenting with taste-testing, try to take notes with a mechanical pencil, as the smell of a wood pencil can affect your perceptions of the beer in question. The head on the side of your glass? That is called "lacing" and is a sign of a
                            clean glass and a good brew. Professional tasters may prefer their beer be presented in stemmed white wine glasses because of the shape: by holding the stem, the beer is not warmed up by the judge's hand, while the upward lip of the glass allows the beer's aromas to flow
                            freely. Amber glass bottles provide excellent protection against light (natural and artificial) that interacts with hop compounds and can cause the beer to have a "skunky" taste. Beer with this quality is sometimes called "light struck" beer.
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
