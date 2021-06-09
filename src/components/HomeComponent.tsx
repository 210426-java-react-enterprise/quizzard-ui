import { Redirect } from "react-router-dom";
import { Principal } from "../dtos/principal";

interface IHomeProps {
    currentUser: Principal | undefined
}

function HomeComponent(props: IHomeProps) {
    return (
        !props.currentUser ? <Redirect to="/login"/> :
        <>
            <h1>Welcome, {props.currentUser?.username}</h1>
        </>
    );
}

export default HomeComponent;