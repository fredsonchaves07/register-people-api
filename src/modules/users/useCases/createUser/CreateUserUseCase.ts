import { validateCPF } from './../../../../utils/validateCPF';
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"
import { AppError } from "@shared/errors/AppError"


class CreateUserUseCase{

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ cpf, name, lastName, phone, password }: ICreateUserDTO): Promise<void>{
        if(!validateCPF(cpf)){
            throw new AppError('CPF invalid!')
        }

        const cpfAlreadyExists = await this.usersRepository.findByCPF(cpf)

        if(cpfAlreadyExists){
            throw new AppError('CPF already exists')
        }

        await this.usersRepository.create({ cpf, name, lastName, phone, password })
    }
}

export { CreateUserUseCase }