import './App.css';
import Button from './Button';
import CheckBox from './CheckBox';
import StarRating from './StarRating';

function App() {
    return (
        <>
            <Button />
            <CheckBox />
            <StarRating totalStars={10} />
        </>
    )
}

export default App;