import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const SingleCountry = () => {
    const { id } = useParams()
    
    const [favcountry, setfavcountry] = useState([])
    const [singleCountry , setSingleCountry] = useState([])
    // useEffect(() => {
    //     const formData = new FormData();
    //     formData.append('id',id)
    //     fetch('http://localhost:5000/singlecountry',{
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             setfavcountry(result.result)
    //         })
    // }, [])

    useEffect(() => {
        
        fetch(`http://localhost:5000/singlecountry/${id}`)
            .then(res => res.json())
            .then(result => {
                setSingleCountry(result.data.result)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/show')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result.result)
            })
    }, [])
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('country',data.country)
        formData.append('capital',data.capital)
        formData.append('id',id)

        fetch('http://localhost:5000/updatedata',{
            method:'PUT',
            body: formData
        })

    }

    console.log(singleCountry);
    return (
        <div>
            {favcountry.filter(inf => inf.id == id).map(filteredPerson => (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label>country</label>
                    <input name="country" defaultValue={filteredPerson.country} ref={register} />
                    <label>capital</label>

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="capital" defaultValue={filteredPerson.capital} ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            ))}
        </div>
    );
};

export default SingleCountry;

