import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";


function Repos() {
    const [dataRepos, setRepos] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://api.github.com/users/vvserko/repos`);
            const data = await response.json();
            setRepos(data);
        })();

    }, []);
    return (
        <Fragment>

            {dataRepos.map(
                elem => (
                    <div>
                        <a href={`${elem.html_url}`} key={elem.id}>{elem.html_url} {<br />}</a>
                    </div>

                )
            )}
        </Fragment>
    );
}
export default Repos
