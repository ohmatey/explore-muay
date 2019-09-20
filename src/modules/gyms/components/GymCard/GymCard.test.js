import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import GymCard from './GymCard'

describe('<GymCard />', () => {
  let component

  beforeEach(() => {
    component = shallow(<GymCard />)
  })

  it('should render with no errors', () => {
    const tree = toJson(component)

    expect(tree).toMatchSnapshot()
  })

  it('it should render with header and subheader', () => {
    const props = {
      title: 'Bobs Muay Thai',
      subtitle: 'Bob Brown'
    }

    component.setProps(props)

    expect(component.find('h1').length).toEqual(1)
    expect(component.find('h1').text()).toEqual(props.title)

    expect(component.find('h2').length).toEqual(1)
    expect(component.find('h2').text()).toEqual(props.subtitle)

    expect(component.find('button').length).toEqual(1)
  })

  it('should call function when button is clicked', () => {
    const mockHandleClick = jest.fn()

    component.setProps({
      handleClick: mockHandleClick
    })

    component.find('button').simulate('click')

    expect(mockHandleClick).toHaveBeenCalled()
  })
})
