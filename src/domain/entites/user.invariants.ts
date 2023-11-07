import {SafeParseReturnType, z} from "zod";
import {User} from './user'

const UserSchema: z.ZodType<User> = z.object({
    id: z.string(),
    name: z.string().min(2),
    createdAt: z.date()
});

type UserZodType = z.infer<typeof UserSchema>;

export const parse = (user: unknown): User => {
    return UserSchema.parse(user)
}

export const safeParse = (user: unknown): SafeParseReturnType<User, User> => {
    return UserSchema.safeParse(user)
}

export const isValid = (user: unknown): boolean => {
    const result = safeParse(user)
    return result.success
}
