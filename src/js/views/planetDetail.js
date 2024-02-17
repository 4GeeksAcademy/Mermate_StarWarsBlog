import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import DetailImage from "../../img/800x600.png";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

	
    return (

        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                    <img src={DetailImage} className="mb-3" alt="..." style={{width: '600px'}} />
                    </div>

                    <div className="col-4 info_planet">
                    <h2>{store.planets[params.planet].name}</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tortor non nibh fermentum lacinia aliquet quis ipsum. Nam interdum auctor eros, ut venenatis ex pulvinar at. Donec finibus tortor turpis, non semper purus ultricies porttitor. Proin bibendum euismod tristique. Proin finibus lacus sit amet orci sagittis vestibulum. Morbi a lectus sed velit pretium lobortis vitae ut tortor. Curabitur a luctus felis, gravida porttitor tortor. Duis a justo neque. Integer at risus sed risus convallis lacinia vitae efficitur elit. Pellentesque imperdiet ex a quam elementum commodo. Mauris eu posuere nunc. Morbi ac velit vel mauris lacinia tempus. Aliquam erat volutpat. Nulla semper iaculis est at eleifend.</p>
                    </div>

                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table Planet_table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Population</th>
                                        <th scope="col">Orbital Period</th>
                                        <th scope="col">Rotation Period</th>
                                        <th scope="col">Diameter</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{store.planets[params.planet].name}</td>
                                        <td>{store.planets[params.planet].climate}</td>
                                        <td>{store.planets[params.planet].population}</td>
                                        <td>{store.planets[params.planet].orbital_period}</td>
                                        <td>{store.planets[params.planet].rotation_period}</td>
                                        <td>{store.planets[params.planet].diameter}</td>
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

PlanetDetail.propTypes = {
	match: PropTypes.object
};