import './App.css';
import Button from './Button';
import CheckBox from './CheckBox';
import StarRating from './StarRating';
import Title from './Title';

function App() {
    return (
        <>
            <Button />
            <CheckBox />
            <StarRating totalStars={5} />
            <Title />
        </>
    )
}

export default App;