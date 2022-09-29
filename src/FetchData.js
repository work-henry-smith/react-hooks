import {useState,useEffect} from 'react';

function FetchData () {
    const [data,setData] = useState([]);
    useEffect(() => {fetch(`https://api.github.com/users`).then(response => response.json()).then(res => setData(res))},[])

    if (data) {
        return (
            <ul>{data.map((user) => (<li key={user.id}>{user.login}</li>))}</ul>
        )
    }
    return (
        <p>No Users</p>
    )
}

export default FetchData;