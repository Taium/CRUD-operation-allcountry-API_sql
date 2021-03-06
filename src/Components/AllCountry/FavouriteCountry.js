import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavouriteCountry = (props) => {
    const { id, country, capital } = props.country
    const handleDelete = () => {
        const formData = new FormData()
        formData.append("id", id)
        fetch(`http://localhost:5000/deletedata`, {
            method: 'DELETE',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                props.handleShow()
            })
    }
    return (
        <div>
            <h1>{country}</h1>
            <p>{capital}</p>
            <Button className="btn btn-danger" onClick={handleDelete}>delete</Button>
          <Link to={"/edit/"+id}>  <Button className="btn btn-primary">edit</Button></Link>

        </div>
    );
};

export default FavouriteCountry;