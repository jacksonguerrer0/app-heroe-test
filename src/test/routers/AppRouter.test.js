import { mount } from 'enzyme'
import React from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'



describe('Pruebas en <AppRouter />', () => {
    
    test('Mostrar login si no esta autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                            <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
    
})
