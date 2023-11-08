import {expect, test} from 'vitest'
import {UserFactory} from '../user.factory'

test('test user factory create with success', async () => {
    const user = UserFactory.create({name: 'Alice'})

    expect(user.name).toEqual('Alice')
})

test('test UseEntity create with error on validation', async () => {
    expect(() => UserFactory.create({name: 'A'})).toThrowError()
})

test('test UseEntity immutability', async () => {
    const user = UserFactory.create({name: 'Bob'})
    expect(() => {
        user.name = 'Alice'
    }).toThrow("Cannot assign to read only property 'name' of object '#<Object>'")
})

test('test UseEntity update with error', async () => {
    const user = UserFactory.create({name: 'Alice'})

    expect(UserFactory.update(user, {name: 'Bob'}).name).toEqual('Bob')
})
