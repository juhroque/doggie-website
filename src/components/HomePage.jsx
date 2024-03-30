import BreedButton from "./BreedButton";
import React, { useState, useEffect } from 'react';
import './style/HomePage.css';
export default function HomePage() {

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


    return (
        <div>
            <h1>I'm Julia Roque.</h1>
            <h2>And this is my randon dog website. Select a breed to get facts about it.</h2>

            <div className="dog-breeds-btns">
                {data && data.map((breed) => {
                    return <BreedButton breed={breed} key={breed.id} />;
                })}

            </div>
        </div>
    );
}