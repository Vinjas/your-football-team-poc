import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App';

test('new team button', () => {
    render(<App />)

    expect(screen.getByText(/Your adidas Team/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText(/Create new Team/i))

    expect(screen.getByText(/All Teams/i)).toBeInTheDocument()
})