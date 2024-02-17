import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const StarshipDetail  = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    return (

        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="img_Starship_Detail" src=""></img>
                    </div>

                    <div className="col-4 info_starship">
                    <h2>{store.starships[params.starship].name}</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor non nibh fermentum lacinia aliquet quis ipsum. Nam interdum auctor eros, ut venenatis ex pulvinar at. Donec finibus tortor turpis, non semper purus ultricies porttitor. Proin bibendum euismod tristique. Proin finibus lacus sit amet orci sagittis vestibulum. Morbi a lectus sed velit pretium lobortis vitae ut tortor. Curabitur a luctus felis, gravida porttitor tortor. Duis a justo neque. Integer at risus sed risus convallis lacinia vitae efficitur elit. Pellentesque imperdiet ex a quam elementum commodo. Mauris eu posuere nunc. Morbi ac velit vel mauris lacinia tempus. Aliquam erat volutpat. Nulla semper iaculis est at eleifend.</p>
                    </div>

                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table starship_table">
                                <thead>
                                    <tr>
                                    
                                        <th scope="col">Name</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Passengers</th>
                                        <th scope="col">Crew</th>
                                        <th scope="col">Speed</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                                       
                                    <tr>
                                        <td>{store.starships[params.starship].name}</td>
                                        <td>{store.starships[params.starship].model}</td>
                                        <td>{store.starships[params.starship].starship_class}</td>
                                        <td>{store.starships[params.starship].passengers}</td>
                                        <td>{store.starships[params.starship].crew}</td>
                                        <td>{store.starships[params.starship].max_atmosphering_speed}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

StarshipDetail.propTypes = {
    match: PropTypes.object
};