import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/BreedButton.css';
export default function BreedButton() {
    const url = "https://api.thedogapi.com";
    const endpoint = "/v1/breeds?limit=10&page=0";
    const fullUrl = url + endpoint;
    const API_KEY = "live_JUgqzcYzqb0FURPkEFFi83KUeyJ1MAoGYAuQfsUsBEee74JasK9N4x549pXLfmv9";
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(fullUrl, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
                console.log(data);
            }
            );
    }, []);

    const navigate = useNavigate();

    const handleClick = (breed) => (e) => {
        e.preventDefault();
        navigate('/breed/' + breed.id);
    };

    const handleOtherClick = (e) => {
        e.preventDefault();
        navigate('/random');
    }

    return (
        <div className='doggie-breeds-btns'>
            <h1>I'm Julia Roque.</h1>
            <h2>And this is my doggie website. Select a breed to get facts about it.</h2>
            <button onClick={handleOtherClick}>Or click here and see a random doggie!</button>
            {data && data.map((breed, index) => (
                <button onClick={handleClick(breed)} key={index}>
                    <h2>{breed.name}</h2>
                    <p>{breed.temperament}</p>
                </button>
            ))}
        </div>);
}