import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove the token
        alert("You have been logged out!");
        navigate("/signin"); // Redirect to signin
    };

    return (
        <Button onClick={handleLogout} variant="danger" style={{ fontWeight: "bold", marginLeft: "15px" }}>
            Logout
        </Button>
    );
};

export default LogoutButton;
