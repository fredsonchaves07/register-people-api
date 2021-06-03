import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"
import { User } from "../../typeorm/entities/User"

class UsersRepositoriesInMemory implements IUsersRepository{

    users: User[] = []

    async create({ cpf, name, lastName, password, phone }: ICreateUserDTO): Promise<void> {
        const user = new User()

        Object.assign(user, {
            cpf, name, lastName, password, phone
        })

        this.users.push(user)
    }

}

export { UsersRepositoriesInMemory }