import { AuthenticationRequest } from "../dtos/authentication-request";
import { Principal } from "../dtos/principal";
import { quizzardClient } from "./quizzard-client";

export const authenticate = async (credentials: AuthenticationRequest) => {
        
    let resp = await quizzardClient.post<Principal>('/auth', credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let token: string = resp.headers['authorization'];

    let principal = await resp.data;
    principal.token = token;
    
    return principal;

}