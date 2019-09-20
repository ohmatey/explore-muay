import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import GymList from './GymList'
import GymCard from '../GymCard'

describe('<GymList />', () => {
  let component

  beforeEach(() => {
    component = shallow(<GymList />)
  })

  it('should render with no errors', () => {
    const tree = toJson(component)

    expect(tree).toMatchSnapshot()
  })

  it('should render a list of GymCards', () => {
    const gyms = [{
      title: 'Bobs Muay Thai',
      subtitle: 'Bob'
    },
    {
      title: 'Sitmonchai',
      subtitle: 'Pee A'
    }]

    component.setProps({
      gyms
    })

    expect(component.find(GymCard).length).toEqual(2)
    expect(component.find(GymCard).at(0).props()).toEqual(gyms[0])
  })
})
