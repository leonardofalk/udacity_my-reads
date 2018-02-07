import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BookCard from './BookCard'

const bookCardProps = {
  description: 'desc',
  title: 'title',
  actions: () => <div></div>
}

const div = document.createElement('div')

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

beforeEach(() => {
  console.error = jest.genMockFunction()
})

it('without props renders with error', () => {
  expect(() => {
    ReactDOM.render(<BookCard />, div)
  }).toThrow()

  expect(console.error).toHaveBeenCalled()
})

it('renders without crashing', () => {
  ReactDOM.render(<BookCard {...bookCardProps} />, div)
})

it('changes when the props change', () => {
  const component = shallow(<BookCard {...bookCardProps}/>)

  component.setProps({
    title: 'newTitle',
    description: 'newDesc'
  })

  expect(component.state('title')).toBe('newTitle')
  expect(component.state('description')).toBe('newDesc')
})
