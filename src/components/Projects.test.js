import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Projects from './Projects'

describe('Projects', () => {
 test('Renders Project component correctly with imported data', () => {
  const data = [
   {
    title: 'Project Title 1',
    tech: 'REACT',
    description: 'Project Description 1',
    demo: '/',
    github: '/',
    image: 'placeholder.jpeg',
   },
  ]
  render(<Projects projectData={data} />)
  expect(screen.getByText('Project Title 1')).toBeInTheDocument()
  expect(screen.getByText('REACT')).toBeInTheDocument()
  expect(screen.getByText('Project Description 1')).toBeInTheDocument()
  expect(screen.getByText('SEE LIVE DEMO')).toBeInTheDocument()
  expect(screen.getByText('SEE GITHUB')).toBeInTheDocument()
  expect(
   screen.getByAltText('Screenshot of Project Title 1')
  ).toBeInTheDocument()
 })
})
