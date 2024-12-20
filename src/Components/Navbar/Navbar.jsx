import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/fcplogo.svg';
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {

    const { user, googleSignIn, logOut } = useContext(AuthContext);


    const navOptions =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/livetv'>Live TV</NavLink></li>
            <li><NavLink to='/jersey'>Jersey</NavLink></li>
            <li><NavLink to='/clubbulletin'>Club Bulletin</NavLink></li>
            <li>
                <details>
                    <summary>More</summary>
                    <ul className="p-2">
                        <li><NavLink to='/allpredators'>All Predators</NavLink></li>
                        <li><NavLink to='/predatorstournament'>Tournament</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </details>
            </li>

        </>

    const handleSignIn = () => {
        googleSignIn();
        document.getElementById('loginModal').close();
    }

    return (
        <div className="w-full">
            <div style={{ border: 'solid #d5a538', borderWidth: '0px 1px 1px 1px', borderRadius: '0px 0px 10px 10px' }} className="flex justify-between w-full fixed navbar bg-base-100/0 backdrop-blur z-[100] text-[#d5a538] font-bold">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost hidden sm:flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="items-center justify-center text-center text-[10px] text-[#d5a538]" to='/'><img className="w-[90px]" src={logo} alt="" /></Link>
                </div>
                <div className=" sm:hidden flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="">
                    {user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={user.name}
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <div className="text-center p-3 text-[#d5a538] font-bold">{user?.displayName}</div>
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <button onClick={() => document.getElementById('loginModal').showModal()} className="btn text-[#d5a538]">Log In</button>
                            <dialog id="loginModal" className="modal">
                                <div className="modal-box flex flex-col items-center">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                                    </form>
                                    <h3 className="text-center font-bold text-lg mb-3">Log In or Sign up with google</h3>
                                    <button onClick={handleSignIn} className="btn"><FcGoogle className="text-3xl" /></button>
                                </div>
                            </dialog>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
