import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import WantReadBookCard from './WantReadBookCard'

const bookCardProps = {
  description: 'desc',
  title: 'title'
}

const div = document.createElement('div')

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

beforeEach(() => {
  console.error = jest.genMockFunction()
})

it('without props renders with error', () => {
  ReactDOM.render(<WantReadBookCard />, div)

  expect(console.error).toHaveBeenCalled()
})

it('renders without crashing', () => {
  ReactDOM.render(<WantReadBookCard {...bookCardProps} />, div)
})

it('changes when the props change', () => {
  const component = shallow(<WantReadBookCard {...bookCardProps}/>)

  component.setProps({
    title: 'newTitle',
    description: 'newDesc'
  })

  expect(component.state('title')).toBe('newTitle')
  expect(component.state('description')).toBe('newDesc')
})
