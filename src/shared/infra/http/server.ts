import { AppError } from '@shared/errors/AppError'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

const app = express()

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }

    console.error(err.message)

    return response.status(500).json({
        success: false,
        message: 'Internal server error'
    })
})

app.listen(3333, () => {
    console.log('Server is running...')
})