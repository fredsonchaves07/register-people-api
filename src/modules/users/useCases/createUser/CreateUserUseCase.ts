import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"


class CreateUserUseCase{

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ cpf, name, lastName, phone, password }: ICreateUserDTO): Promise<void>{
        this.usersRepository.create({cpf, name, lastName, phone, password})
    }
}

export { CreateUserUseCase }