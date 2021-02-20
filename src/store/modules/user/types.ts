export interface IUser{
    id: number,
    name: string,
    email: string,
    age: number
}

export interface IState{
    users: IUser[]
}