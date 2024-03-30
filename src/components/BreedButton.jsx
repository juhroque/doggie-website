import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/BreedButton.css';
export default function BreedButton({ breed }) {

    const navigate = useNavigate();

    const handleClick = (breed) => (e) => {
        e.preventDefault();
        navigate('/breed/' + breed.id);
    };

    return (
        <button onClick={handleClick(breed)} key={breed.id}>
            <h2>{breed.name}</h2>
            <p>{breed.temperament}</p>
        </button>
    );
}