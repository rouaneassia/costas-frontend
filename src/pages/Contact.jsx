import Contact from "../component/Email";
import MyMap from "../component/MyMaps";
import Navcontact from "../component/Navcontact";

export default function Contacts(){
    return(
        <div>
            <Navcontact/>
            <Contact/>
            <MyMap/>
        </div>
    )
}