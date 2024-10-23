import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, it, describe } from 'vitest'
import Health, { HealthCard } from '@/components/health'

describe('Health', () => {
  it('Renders health heading correctly', () => {
    render(
      <Health />,
    )
    const heading = screen.getAllByRole('heading')[0]
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Health/i)
    expect(heading).toHaveClass('text-black dark:text-white')
  })

  it('Renders health data', () => {
    const data = {
      version: '0.1.0',
      status: 'Healthy',
      databaseConnectivity: 'Connected',
    }
    render(<HealthCard {...data} />)
    expect(screen.getByText('Backend API Version')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(data.version))).toBeInTheDocument()
    expect(screen.getByText('Backend Status')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(data.status))).toBeInTheDocument()
    expect(screen.getByText('Database Connectivity')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(data.databaseConnectivity))).toBeInTheDocument()
  })
})
