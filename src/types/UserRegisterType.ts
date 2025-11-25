export type UserRegisterType = {
    name:string;
    surname: string;
    email  : string;
    password: string;
    confirmPassword?:string;
    image?: File | null;
    teamId?: number;
    type: string;
}