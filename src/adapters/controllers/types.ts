export type ControllerResponseType<T> = {
    payload: T
}

type MissingEntityError = any
type Operator = any

export type Repository<T> = {
    find: (query?: Query<T>) => Promise<T[]>
    get?: (id: string) => Promise<T | undefined>
    create: (item: Omit<T, 'id'>) => Promise<T>
    update?: (item: T) => Promise<T | undefined | MissingEntityError>
    delete?: (id: string) => Promise<undefined | MissingEntityError>
}

export type Query<T> = {
    [k in keyof T]: {operator: Operator; value: unknown}
}
