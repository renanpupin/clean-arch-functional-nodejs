import {expect, test} from 'vitest'
import {UserFactory} from '../user.factory'

test('test user factory with success', async () => {
    const user = UserFactory.create({name: 'Alice'})

    expect(user).toEqual({
        name: 'Alice'
    })
})

test('test UseEntity with error', async () => {
    expect(() => UserFactory.create({name: 'A'})).toThrowError()
})
