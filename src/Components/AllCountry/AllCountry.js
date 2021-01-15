import React, { useEffect, useState } from 'react';
import ShowCountry from './ShowCountry';

const AllCountry = () => {
    const [country, setcountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(result => {
                setcountry(result)
            })
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {
                        country.map(country => <ShowCountry country={country}></ShowCountry>)
                    }
                </div>
                <div className="col-md-6">
                    {
                        country.map(country => <ShowCountry country={country}></ShowCountry>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCountry;