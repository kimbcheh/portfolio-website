import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

describe('Header', () => {
 test('Renders Header component links correctly with imported data', () => {
  const data = [
   {
    title: 'GITHUB',
    url: 'https://github.com/kimbcheh',
   },
  ]
  render(<Header linkData={data} />)
  expect(screen.getByText('GITHUB')).toBeInTheDocument()
  expect(screen.getByRole('link')).toHaveAttribute(
   'href',
   'https://github.com/kimbcheh'
  )
 })
})
