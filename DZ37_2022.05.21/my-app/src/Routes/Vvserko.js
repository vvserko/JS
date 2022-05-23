import { useState, useEffect, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";



export default function Vvserko() {
    const [data, setData] = useState({});

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://api.github.com/users/vvserko`);
            const data = await response.json();
            setData(data);
        })();

    }, []);
    const keys = Object.keys(data);//получили массив ключей 
    return (
        <Fragment>
            <h4>Список репозиториев:</h4>
            <Link to={'/repos'}>Repos{<br/>}</Link>
            <h4>Информация о репозитории:</h4>
            {keys.map((key, i) => (
                <div key={i}>
                    {key}{' : '}{data[key]}
                    
                </div>
            ))}
                                
            
        </Fragment>

    );
}



