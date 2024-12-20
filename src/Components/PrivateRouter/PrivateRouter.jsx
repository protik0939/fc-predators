import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import NotAuthorized from "../NotAuthorized/NotAuthorized";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (!loading && !user?.email) {
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.showModal();
            }
        }
    }, [loading, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user?.email) {
        return children;
    }

    return <NotAuthorized></NotAuthorized>;
};

export default PrivateRouter;
