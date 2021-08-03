import { shallow } from 'enzyme'
import React from 'react'
import { HeroCard } from '../../components/heroes/HeroCard'

describe('Pruebas <HeroCard />', () => {

    test('Validar informacion de las tarjetas', () => {
        const id ='dc-batman'
        const superHero ='Batman'
        const alter_ego ='Bruce wayne'
        const first_appearance ='Detective Comics #27'
        const characters = 'Bruce wayne'

        const wrapper = shallow(<HeroCard 
            id={id}
            superHero={superHero}
            alter_ego={alter_ego}
            first_appearance={first_appearance}
            characters={characters}
        />)

        const textParrafo = wrapper.find('h5').text().trim();
        expect(wrapper).toMatchSnapshot();
        expect(textParrafo).toBe('')
    })
    
})
