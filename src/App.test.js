import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
 test('Renders without crashing', () => {
  render(<App />)
 })
})
