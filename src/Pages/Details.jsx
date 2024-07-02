import { Navbar } from "../Components/Navbar/Navbar"
import { Details } from "../Components/Details/Details"
export const Detail = ()=>{
    return(
        <div style={{background:" #FFEFEF",overflowX:"hidden"}}>
            <Navbar/>
            <Details/>
        </div>
    )
}