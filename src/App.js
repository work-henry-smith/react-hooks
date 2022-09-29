import './App.css';
import Button from './Button';
import CheckBox from './CheckBox';
import StarRating from './StarRating';
import Title from './Title';
import FetchData from './FetchData';

function App() {
    return (
        <>
            <Button />
            <CheckBox />
            <StarRating totalStars={5} />
            <Title />
            <FetchData />
        </>
    )
}

export default App;