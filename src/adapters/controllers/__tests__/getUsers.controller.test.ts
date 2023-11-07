import {expect, test} from 'vitest'
import {MemoryDb} from '../../../drivers/db/memoryDb'
import {getUsersController} from '../getUsers'
import {UserMemoryDbDao} from '../../daos/userMemoryDb.dao'

test('test GetUsersController', async () => {
    const usersDao = UserMemoryDbDao(MemoryDb)

    const result = await getUsersController({userRepository: usersDao})
    console.log('result', result)

    expect(result.payload.users).toEqual([
        {
            id: '1',
            name: 'Bob'
        }
    ])
})
