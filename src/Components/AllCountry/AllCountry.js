import React, { useEffect, useState } from 'react';
import FavouriteCountry from './FavouriteCountry';
import ShowCountry from './ShowCountry';

const AllCountry = () => {
    const [country, setcountry] = useState([])
    const [favcountry, setfavcountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(result => {
                setcountry(result)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/show')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result.result)
            })
    }, [])

        const handleShow = () => {
            fetch('http://localhost:5000/show')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result.result)
            })
        }    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {
                        country.map(country => <ShowCountry handleShow={handleShow} country={country}></ShowCountry>)
                    }
                </div>
                <div className="col-md-6">
                    {
                        favcountry.map(country =><FavouriteCountry handleShow={handleShow} country={country}></FavouriteCountry>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCountry;