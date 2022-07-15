
import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Swift-Digital Assignment</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/signup">signUp</Link> |{" "}
                <Link to="/signin">signIn</Link>
            </nav>
            <Outlet />
        </div>
    );
}