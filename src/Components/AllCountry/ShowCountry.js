import React from 'react';

const ShowCountry = (props) => {
    const {name,capital,flag}=props.country
    return (
        <div>
            <img src={flag} height="50px" width="50px"></img>
            <h1>{name}</h1>
            <p>{capital}</p>
        </div>
    );
};

export default ShowCountry;