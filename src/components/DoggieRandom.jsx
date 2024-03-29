import React, { useEffect, useState } from 'react';
import './style/DoggieRandom.css';

export default function DoggieRandom() {
    const url = "https://api.thedogapi.com";
    const endpoint = "/v1/images/search?has_breeds=true";
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
            {data && (
                <div>
                    <h2>Here is a random doggie!</h2>
                    <img src={data[0].url} alt="random doggie" />
                    <p>{data[0].breeds[0].name}</p>
                </div>
            )}
        </div>
    )

  
}