import {useState,useEffect} from 'react';


function Title () {
    const [name,setName] = useState('henry');
    const [admin,setAdmin] = useState(false);
    useEffect(() => {document.title = `celebrate ${name} !`;}, [name]);
    useEffect(() => {console.log(`${admin ? 'is the admin' : 'is not the admin'}`);},[admin]) 
    return (
        <section>
            <p>Congratulations, {name}</p>
            <button onClick={() => setName("eve")}>Change the winner</button>

            <p>The second use effect function, {admin}</p>
            <button onClick={() => setAdmin(true)}>Log In</button>
        </section>
    )
}

export default Title;