import './App.css';
import {AiFillApple} from 'react-icons/ai';
import {useState} from 'react';


const createNumStars = (length) => [...Array(length)];

function ColorTheseStars ({selected = false, onSelect}) {
    return (
        <AiFillApple color={selected ? 'yellow' : 'white'} onClick={onSelect} />
    )
}

function Star({totalStars = 5}) {

    const [selectedStars, setSelectedStars] = useState(0);

    return (
        createNumStars(totalStars).map((n,i) => (
        <ColorTheseStars
        key={i}
        selected={selectedStars > i}
        onSelect={() => setSelectedStars(i+1)} />))
    )
}

export default Star;