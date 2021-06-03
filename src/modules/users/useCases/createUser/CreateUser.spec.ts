import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO"
import { UsersRepositoriesInMemory } from "@modules/users/infra/InMemory/repositories/UsersRepositoriesInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoriesInMemory

describe('Create User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoriesInMemory()
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it('Should be able to create a new user', async() => {
        const user: ICreateUserDTO = {
            cpf: '01223284721',
            name: 'John',
            lastName: 'Doe',
            password: '123',
            phone: '+55119988023212'
        }

        await createUserUseCase.execute(user)

    })

})