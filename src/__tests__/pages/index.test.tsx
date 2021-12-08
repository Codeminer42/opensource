import React from 'react'
import { render, screen } from '@test/components'
import Home from '../../pages/index'

describe('Home', () => {
  const renderComponent = (props = { projects: [], otherProjects: [] }) =>
    render(<Home {...props} />)

  it('renders a heading', () => {
    renderComponent()

    const heading = screen.getByRole('heading', {
      name: 'Open Source',
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a quote', () => {
    renderComponent()

    const quote = screen.getByText(
      'In real open source, you have the right to control your own destiny'
    )

    expect(quote).toBeInTheDocument()
  })
})
