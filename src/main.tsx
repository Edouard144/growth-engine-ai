import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import './styles.css'

const router = getRouter()

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={router} />)