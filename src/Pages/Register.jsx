import { RegisterForm } from '../Components/Register/Register';
import LoginImage from '../assets/login.png';

export const Register = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RegisterForm />
            </div>
            <div style={{ flex: 1 }}>
                <img style={{ height: "100vh", width: "100%", objectFit: "cover" }} src={LoginImage} alt="Register" />
            </div>
        </div>
    );
};
