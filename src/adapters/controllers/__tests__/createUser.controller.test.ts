import {expect, test} from 'vitest'
import {MemoryDb} from '../../../drivers/db/memoryDb'
import {createUserController} from '../createUser'
import {UserMemoryDbDao} from '../../daos/userMemoryDb.dao'

test('test CreateUserController', async () => {
    const usersDao = UserMemoryDbDao(MemoryDb)

    const result = await createUserController({userRepository: usersDao, userDto: {name: 'Alice'}})

    expect(result.payload.user.name).toEqual('Alice')
})
