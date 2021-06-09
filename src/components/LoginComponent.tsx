import { Principal } from "../dtos/principal";

interface ILoginProps {
    currentUser: Principal,
    updateCurrentUser: (nextCurrentUser: Principal) => void
}

function LoginComponent(props: ILoginProps) {
    return (
        <>
            <h1>Login works!</h1>
        </>
    )
}

export default LoginComponent;