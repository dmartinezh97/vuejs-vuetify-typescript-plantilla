export interface User{
    id: number;
    username: string;
    password: string;
    token: string;
}

export interface AuthState{
    user: User | null;
    isLogged: boolean;
}