//import Button from "../../Componot/Button/Button.jsx";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Dashbord() {
    return(
        <div>
            <h1>DASH BORD</h1>
            <br/>
            <br/>
            <NavLink to={'/user'}>
                <Button name={'Go to user '} clor={'#f5f2f2'} bc={'#e30909'} bgclor={'#db1010'}/>
            </NavLink>
            <br/>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>

        </div>


    )
}