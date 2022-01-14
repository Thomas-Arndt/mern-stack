import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Display = () => {
    const {resource, id} = useParams();
    const history = useHistory();
    const [responseData, setResponseData] = useState(null);
    const [homeworld, setHomeworld] = useState("");
    const [errorImg, setErrorImg] = useState("");

    const starWarsAPI = `https://swapi.dev/api/${resource}/${id}`;
    console.log(starWarsAPI);

    const pointerStyling = {
        cursor: 'pointer'
    }

    useEffect(() => {
        axios.get(starWarsAPI)
        .then(response=>{
            console.log(response.data);
            setErrorImg("")
            setResponseData(response.data);
            response.data.homeworld && getHomeworld(response.data.homeworld)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            setErrorImg('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg');
        })
    }, [resource, id]);

    const getHomeworld = (homeworldEndpoint) => {
        axios.get(homeworldEndpoint)
        .then(response=>{
            console.log(response.data);
            setHomeworld(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    const goToHomeworld = () => {
        let homeworldSplit = homeworld.url.split('/');
        let homeworldId = homeworldSplit[homeworldSplit.length-2];
        history.push(`/planets/${homeworldId}`)
    }


    return(
        <div className='w-100 mt-3'>
            {(responseData.name && !errorImg) && <h2>Name: {responseData.name}</h2>}
            {/* People Data */}
            {(responseData.birth_year && !errorImg) && <h5>Born: {responseData.birth_year}</h5>}
            {(responseData.height && !errorImg) && <h5>Height: {responseData.height}cm</h5>}
            {(responseData.mass && !errorImg) && <h5>Mass: {responseData.mass}kg</h5>}
            {(responseData.homeworld && !errorImg) && <h5>Homeworld: <span style={pointerStyling} className="text-primary" onClick={goToHomeworld}>{homeworld.name}</span></h5>}
            {/* Planet Data */}
            {(responseData.population && !errorImg) && <h5>Population: {responseData.population}</h5>}
            {(responseData.climate && !errorImg) && <h5>Climate: {responseData.climate}</h5>}
            {(responseData.gravity && !errorImg) && <h5>Gravity: {responseData.gravity}</h5>}
            {(responseData.diameter && !errorImg) && <h5>Diameter: {responseData.diameter}km</h5>}
            {/* Starship Data */}
            {(responseData.model && !errorImg) && <h5>Model: {responseData.model}</h5>}
            {(responseData['length'] && !errorImg) && <h5>Length: {responseData['length']}m</h5>}
            {(responseData.crew && !errorImg) && <h5>Crew: {responseData.crew}</h5>}
            {(responseData.cost_in_credits && !errorImg) && <h5>Cost: {responseData.cost_in_credits} CR</h5>}
            {/* Error Image */}
            {errorImg && <img src={errorImg} alt="These are not the droids you are looking for"></img>}

        </div>
    )
}
export default Display;