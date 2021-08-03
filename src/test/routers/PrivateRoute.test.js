import { mount } from "enzyme"
import React from 'react'
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routers/PrivateRoute"

describe('Validar rutas privadas', () => {
  
    const props = {
        location:{
            pathname: '/marvel'
        }
    }
    test('Mostrar el componente si el usuraio esta autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
            <PrivateRoute 
            isAuthenticated={true}
            component= {() => <span>Componente</span>}
            {...props}
            />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true)
    })
    
})
