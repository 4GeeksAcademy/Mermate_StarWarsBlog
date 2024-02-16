import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
            <>
            <div className="characters_container text-center mt-5">
                
            <h1>Characters</h1>
            <div className="row flex row flex-nowrap" style={{overflowX:"auto", overflowY:"hidden",whiteSpace:"nowrap",padding:"2rem", display:"flex"}}>
            {store.characters.map((item, index) => (
                    
                        <div className="card m-3" style={{width: "400px"}}>
                        <img src="" 

                        className="card-img-top" 
                        alt="..."/>

                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Gender: {item.gender}</p>
                            <p className="card-text">Hair Color : {item.hair_color}</p>
                            <p className="card-text">Eye Color: {item.eye_color}</p>

                           
                         <button className="btn btn-outline-primary">Learn more!</button>
                          


                        </div>
                    </div>))}

            </div>
            </div>
            </>
    );
};
export default Characters;