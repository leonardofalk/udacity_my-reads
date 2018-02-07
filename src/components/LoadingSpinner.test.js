import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LoadingSpinner from './LoadingSpinner'

const div = document.createElement('div')

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('renders without crashing', () => {
  ReactDOM.render(<LoadingSpinner/>, div)
})
