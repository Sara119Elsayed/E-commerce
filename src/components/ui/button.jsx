'use client'
import React from 'react'
import styles from './ui.module.css'

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const cls = [styles.btn, variant === 'primary' ? styles.btnPrimary : '', className].filter(Boolean).join(' ')
  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
