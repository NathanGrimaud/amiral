import {boomify} from 'boom'

export const NoToken = boomify( new Error("No token"),{
    statusCode:400,
})
export const InvalidToken = boomify(new Error("Invalid token"),{
    statusCode:400,
})
export const TokenExpired =  boomify(new Error("Token expired"),{
    statusCode:400,
})
