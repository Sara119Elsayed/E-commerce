'use client'
import React from 'react'

export default function Spinner({ size = 16, className = '' }) {
  return <div className={['spinner', className].filter(Boolean).join(' ')} style={{ width: size, height: size }} aria-hidden="true" />
}
