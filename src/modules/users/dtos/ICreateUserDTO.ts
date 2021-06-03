interface ICreateUserDTO{
    name: string
    lastName: string
    password: string
    phone: string
    cpf: string
    id?: string
}

export { ICreateUserDTO }