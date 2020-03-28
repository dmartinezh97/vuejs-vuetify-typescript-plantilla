export interface User{
    id: string;
    username: string;
    password: string;
    email: string;
    token: string;
    rol: string;
}

export interface AuthState{
    user: User | null;
    isLogged: boolean;
}