import {z} from 'zod'
import {UserEntity} from './user.entity'
import {logger} from '../../drivers/logger'

const UserSchema: z.ZodType<UserEntity> = z.object({
    id: z.string().optional(),
    name: z.string().min(2),
    createdAt: z.date().optional()
})

//if we want to export types from zod
type UserZodType = z.infer<typeof UserSchema>

export const isValid = (user: Partial<UserEntity>): {success: boolean; error: string | null} => {
    const validate = UserSchema.safeParse(user)

    logger.debug(validate)

    return {
        success: validate.success,
        error: !validate.success ? validate.error.message : null
    }
}

export const validate = (user: Partial<UserEntity>): boolean => {
    const result = UserSchema.parse(user)

    logger.debug(result)

    return true
}
