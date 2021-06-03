import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO"
import { UsersRepositoriesInMemory } from "@modules/users/infra/InMemory/repositories/UsersRepositoriesInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoriesInMemory

describe('Create User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoriesInMemory()
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it('Should be able to create a new user', async() => {
        expect(async () => {
            await createUserUseCase.execute({
                cpf: '01223284721',
                name: 'John',
                lastName: 'Doe',
                password: '123',
                phone: '+55119988023212'
            })
        }).not.toBeInstanceOf(AppError)
    })

    it('Should not be able to create a new user with cpf already exist', async() => {
        expect(async() => {
            await createUserUseCase.execute({
                cpf: '01223284721',
                name: 'John',
                lastName: 'Doe',
                password: '123',
                phone: '+55119988023212'
            })

            await createUserUseCase.execute({
                cpf: '01223284721',
                name: 'Maria',
                lastName: 'Doe',
                password: '123',
                phone: '+551199880231002'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it('Should not be able to create a new user with invalid cpf', async() => {
        expect(async() => {
            await createUserUseCase.execute({
                cpf: '00000000000',
                name: 'John',
                lastName: 'Doe',
                password: '123',
                phone: '+55119988023212'
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})