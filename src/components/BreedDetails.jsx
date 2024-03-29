import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
export default function BreedDetails() {
    const { id } = useParams();
    const url = "https://api.thedogapi.com";
    const endpoint = "/v1/breeds/" + id;
    const imageEndpoint = "/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true"
    const fullUrl = url + endpoint;
    const fullImageUrl = url + imageEndpoint;
    const API_KEY = "live_JUgqzcYzqb0FURPkEFFi83KUeyJ1MAoGYAuQfsUsBEee74JasK9N4x549pXLfmv9";
    const [data, setData] = useState(null);
    const [images, setImages] = useState(null);

    useEffect(() => {

        console.log(id);
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
                    <h2>{data.name}</h2>
                    <p>This breed is know for: {data.bred_for}</p>
                    <p>This breed was originated in: {data.origin}</p>
                    <p>They are usually {data.temperament}</p>

                </div>
            )}
        </div>
    )
}