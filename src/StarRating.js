import './App.css';
import {FaStar} from 'react-icons/fa';
import {useState} from 'react';

const createArray = (length) => [...Array(length)];

function Star() {
    return <FaStar />
}

function StarRating({totalStars}) {
    return createArray(totalStars).map((n,i) => (<Star key={i} />));
}


export default StarRating;