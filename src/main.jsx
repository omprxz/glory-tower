import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const hexToRgb = (hex) => {
  const value = hex.replace('#', '')
  return [parseInt(value.slice(0, 2), 16), parseInt(value.slice(2, 4), 16), parseInt(value.slice(4, 6), 16)]
}
window.applyTheme = (hex = '#6e0e34') => {
  const [r, g, b] = hexToRgb(hex)
  const root = document.documentElement
  root.style.setProperty('--primary', hex)
  root.style.setProperty('--primary-rgb', `${r} ${g} ${b}`)
  root.style.setProperty('--primary-dark', `rgb(${Math.round(r * .8)} ${Math.round(g * .8)} ${Math.round(b * .8)})`)
  root.style.setProperty('--primary-light', `rgb(${Math.round(r + (255 - r) * .25)} ${Math.round(g + (255 - g) * .25)} ${Math.round(b + (255 - b) * .25)})`)
  root.style.setProperty('--on-primary', (r * .299 + g * .587 + b * .114) > 160 ? '#151515' : '#fff')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', hex)
}
window.applyTheme(localStorage.getItem('glory-theme') || '#6e0e34')

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
