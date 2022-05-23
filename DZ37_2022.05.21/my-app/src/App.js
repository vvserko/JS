import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h4>https://api.github.com/users</h4>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/vvserko">/vvserko</Link> {' '}
        <Link to="/repos">/repos</Link> {' '}
      </nav>
      <Outlet/> 
    </div>
    
  );
}