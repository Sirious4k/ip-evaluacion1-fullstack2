import { Navigate } from "react-router-dom";
import { getSession } from "../utils/auth";

function PrivateAdminRoute({ children }) {
    const { token, role } = getSession();

    if (!token) {
        return <Navigate to ="/login" />;
    }

    if (role !== "ADMIN") {
        return <Navigate to="/" />;
    }

    return children;
}
export default PrivateAdminRoute