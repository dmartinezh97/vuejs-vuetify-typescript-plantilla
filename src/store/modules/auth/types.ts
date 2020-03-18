export interface User{
    id: string;
    username: string;
    password: string;
    email: string;
    token: string;
    tipoUsuario: string;
}

export interface AuthState{
    user: User | null;
    isLogged: boolean;
}