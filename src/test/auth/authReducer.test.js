import '@testing-library/jest-dom'
import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Pruebas authReducer', () => {
    test('Retornar el estado inicial del reducer', () => {
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
    })
    test('Autenticar y mostrar el nombre del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jackson'
            }
        }
        const state = authReducer({logged: false}, action)
        expect(state).toEqual({
            name: 'Jackson',
            logged: true
        })
    })
    test('Borrar el nombre del usuario al cerrar sesión', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({logged: true, name: ''}, action)
        expect(state).toEqual({
            logged: false
        })
    })
})
