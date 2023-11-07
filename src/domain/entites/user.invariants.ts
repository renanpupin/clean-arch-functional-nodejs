import {SafeParseReturnType, z} from 'zod'
import {UserEntity} from './user.entity'
import {logger} from '../../drivers/logger'

const UserSchema: z.ZodType<UserEntity> = z.object({
    id: z.string(),
    name: z.string().min(2),
    createdAt: z.date()
})

type UserZodType = z.infer<typeof UserSchema>

const parse = (user: unknown): UserEntity => {
    return UserSchema.parse(user)
}

const safeParse = (user: unknown): SafeParseReturnType<UserEntity, UserEntity> => {
    return UserSchema.safeParse(user)
}

export const isValid = (user: unknown): boolean => {
    const result = safeParse(user)
    return result.success
}

export const validate = (user: unknown): boolean => {
    const result = parse(user)
    logger.debug(`validate result=${result}`)

    return true
}
