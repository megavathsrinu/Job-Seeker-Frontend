import { JobForm } from "../Components/JobForm/JobForm";
import JobImage from '../assets/job.png';

export const AddJob = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <JobForm />
            </div>
            <div style={{ flex: 1 }}>
                <img style={{ height: "100vh", width: "100%", objectFit: "cover" }} src={JobImage} alt="Job" />
            </div>
        </div>
    );
};
