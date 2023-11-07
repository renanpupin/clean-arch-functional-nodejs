//db memory mock
let data = {
    users: [
        {
            id: '1',
            name: 'Bob'
        }
    ]
}

type TableType = 'users'

const MemoryDbFactory = () => {
    const create = (table: TableType, item: any): Promise<any> => {
        const createdUser = {...item, id: new Date().getTime().toString()}
        data[table].push(createdUser)

        return Promise.resolve(createdUser)
    }

    const update = (table: TableType, item: any): Promise<any> => {
        return Promise.resolve(
            data[table].map(record => {
                if (record.id === item.id) {
                    return record
                }
                return item
            })
        )
    }

    const get = (table: TableType, id: string): Promise<any> => {
        return Promise.resolve(data[table].find(record => record.id === id))
    }

    const find = (table: TableType): Promise<any> => {
        return Promise.resolve(data[table])
    }

    const remove = (table: TableType, id: string): Promise<any> => {
        return Promise.resolve(data[table].filter(record => record.id !== id))
    }

    return {
        users: {
            create: (item: any) => create('users', item),
            update: (item: any) => update('users', item),
            get: (id: string) => get('users', id),
            delete: (id: string) => remove('users', id),
            find: () => find('users')
        }
    }
}

export const MemoryDb = MemoryDbFactory()
