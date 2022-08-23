import db from '../configs/db/db'
import { v4 as uuidv4 } from 'uuid';

export async function insertUser(data: any){
        const usernameExists = await db("users").where({username: data.username})
        const userEmailExists = await db("users").where({email: data.email})
        const shouldSignUp = {usernameExist: usernameExists.length !== 0, userEmailExists: userEmailExists.length !== 0 }
        
        if(!shouldSignUp.userEmailExists && !shouldSignUp.usernameExist){
             return db('users').insert({
                id: uuidv4(),
                ...data,
                created_at: new Date()
            }).then(()=>{return 'Conta Criada!'})
        }
        else {
            if(shouldSignUp.userEmailExists){
                return 'Essa Conta já existe, esqueceu sua senha?'
            }
            else if(shouldSignUp.usernameExist){
                return 'Esse nome de usuário já foi cadastrado'
            }
        }
}