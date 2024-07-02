import { LoginForm } from "../Components/Login/Login";
import LoginImage from '../assets/login.png';

export const Login = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LoginForm />
            </div>
            <div style={{ flex: 1 }}>
                <img style={{ height: "100vh", width: "100%", objectFit: "cover" }} src={LoginImage} alt="Login" />
            </div>
        </div>
    );
};
