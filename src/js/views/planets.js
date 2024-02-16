import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
            <>
            <div className="planets_container text-center mt-5">
                
            <h1>Planets</h1>
            <div className="row flex row flex-nowrap" style={{overflowX:"auto", overflowY:"hidden",whiteSpace:"nowrap",padding:"2rem", display:"flex"}}>
            {store.planets.map((item, index) => (
                    
                        <div className="card m-3" style={{width: "400px"}}>
                        <img src="" 

                        className="card-img-top" 
                        alt="..."/>

                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Climate: {item.climate}</p>
                            <p className="card-text">Terrain : {item.terrain}</p>
                            <p className="card-text">Population: {item.population}</p>

                           
                         <button className="btn btn-outline-primary">Learn more!</button>
                          


                        </div>
                    </div>))}

            </div>
            </div>
            </>
    );
};
export default Planets;