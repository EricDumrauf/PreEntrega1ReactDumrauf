import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ExplorerEdp from "./img/exploreredp.png";
import TheOne from "./img/theone.png";
import Wanted from "./img/wanted.png";
import BadBoy from "./img/badboy.png";
import LinterditEdp from "./img/linterditedp.png";
import TheOneGold from "./img/theonegold.png";
import GoodGirl from "./img/goodgirl.png";
import WantedGirl from "./img/wantedgirl.png";
import "bulma/css/bulma.css";

function App(){
    return(
        <div>
            <section className="hero is-black">
                <NavBar/>
            </section>

            <ItemListContainer greating="Bienvenidos a ED PERFUMERIE"/>

            <div className="container mt-2">
                <h2 className="title">Fragancias Masculinas</h2>
                <div className="columns">
                    <h2></h2>
                    <div className="column is-3">
                        <ProfileCard titulo="Explorer EDP" marca="MONTBLANC" img={ExplorerEdp}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="The One For Men Intense EDP" marca="DOLCE & GABBANA" img={TheOne}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="Wanted EDT" marca="AZZARO" img={Wanted}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="Bad Boy Le Parfum EDP" marca="CAROLINA HERRERA" img={BadBoy}/>
                    </div>
                </div>
                <h2 className="title">Fragancias Femeninas</h2>
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard titulo="L'Interdit EDP" marca="GIVENCHY" img={LinterditEdp}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="The One Gold EDP" marca="DOLCE & GABBANA" img={TheOneGold}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="Wanted Girl By Night EDP" marca="AZZARO" img={WantedGirl}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="Good Girl Supreme EDP" marca="CAROLINA HERRERA" img={GoodGirl}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;