'use client'
import React from 'react'

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const cls = ['ui-button', variant === 'primary' ? 'primary' : 'secondary', className].filter(Boolean).join(' ')
  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
