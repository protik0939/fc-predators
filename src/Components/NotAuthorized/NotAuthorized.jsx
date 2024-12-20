import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NotAuthorized = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-center text-[#d5a538] p-5">You can't access this without <span className={`${user ? 'hidden' : ''}`}>login and </span>owner permission</h1>
        </div>
    );
};

export default NotAuthorized;