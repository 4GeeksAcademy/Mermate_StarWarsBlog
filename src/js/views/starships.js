import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Starships = () => {

    const { store, actions } = useContext(Context);

    return (
            <>
            <div className="starships_container text-center mt-5">
                
            <h1>Starships</h1>
            <div className="row flex row flex-nowrap" style={{overflowX:"auto", overflowY:"hidden",whiteSpace:"nowrap",padding:"2rem", display:"flex"}}>
                        {store.starships.map((item, index) => (
                    
                        <div className="card m-3" style={{width: "400px"}}>
                        <img src="" 

                        className="card-img-top" 
                        alt="..."/>

                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Model: {item.model}</p>
                            <p className="card-text">Speed : {item.max_atmosphering_speed}</p>
                            <p className="card-text">Crew: {item.crew}</p>

                           
                         <button className="btn btn-outline-primary">Learn more!</button>
                          


                        </div>
                    </div>))}

            </div>
            </div>
            </>
    );
};
export default Starships;