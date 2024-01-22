import Button from "../Componot/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';


// export default function User() {
//     return(
//         <div>
//             <h1>User</h1>
//             <br/>
//             <NavLink to={'/dashbord'}>
//                 <Button name={"go to dashbord"} clor={"#f0a7a7"}/>
//             </NavLink>
//
//         </div>
//     )
//
// }

  //         ***********************Uese navigate*******************

export default function User() {

    const  Navigate = useNavigate();
    function ClicNavigate() {
        Navigate('dashbord')

    }

    return(
        <div>
            <h1>User</h1>
            <br/>
           
                <Button onClick={()=>{ClicNavigate()}} name={"go to dashbord"} clor={"#f0a7a7"}/>

            <br/>
            <br/>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )

}