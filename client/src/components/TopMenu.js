import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../redux/actions/auth'

const TopMenu = () => {

    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
            CarStore3000
            </Link>

            <div className="navbar-nav ml-auto">
                {currentUser ? (
                    <>
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">Profile</Link>
                        </li>
                        {currentUser.role === 'customer' ? (
                            <>
                                <li className="nav-item">
                                    <Link to={"/tinder"} className="nav-link">Tinder</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/user"} className="nav-link">Settings</Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to={"/clients"} className="nav-link">Clients</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link" onClick={logOut}>LogOut</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">Sign Up</Link>
                        </li>
                    </>
                )}
            </div>
        </nav>
    );
};

export default TopMenu;