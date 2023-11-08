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

export const validateUpdateEntityBusinessRules = (
    user: UserEntity,
    updatedProperties: Partial<UserEntity>
) => {
    if (updatedProperties?.id && updatedProperties?.id !== user.id) {
        throw new Error('Cannot update user id.')
    }
}

export const isValid = (user: Partial<UserEntity>): {success: boolean; error: string | null} => {
    const validate = UserSchema.safeParse(user)
    logger.debug(validate)

    return {
        success: validate.success,
        error: !validate.success ? validate.error.message : null
    }
}

export const validate = (
    user: Partial<UserEntity>,
    updatedProperties: Partial<UserEntity>
): boolean => {
    const result = UserSchema.parse(user)
    logger.debug(result)

    validateUpdateEntityBusinessRules(user, updatedProperties)

    return true
}
