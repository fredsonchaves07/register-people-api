import { v4 as uuid } from 'uuid'

class User{

    name: string

    lastName: string

    password: string

    phone: string

    cpf: string

    id: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User }