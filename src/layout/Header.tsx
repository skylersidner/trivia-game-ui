import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="navbar-item">SUPER TRIVIA</div>
            </div>
            <div className="navbar-end">
                <NavLink to="/join" className="navbar-item btn-primary">
                    Join Game
                </NavLink>
                <NavLink to="/create" className="navbar-item btn-primary">
                    Create Game
                </NavLink>
                <NavLink to="/" className="navbar-item btn-primary">
                    Dashboard
                </NavLink>
            </div>
        </div>
    );
}

export { Header };
