import {UserEntity} from './user.entity'

export const getUsername = (name: string): string => {
    return String(name).toLowerCase()
}
