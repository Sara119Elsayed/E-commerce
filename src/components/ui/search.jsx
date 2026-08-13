'use client'
import React from 'react'
import styles from './ui.module.css'
import Button from './Button'

export default function Search({ value, onChange, onSearch, placeholder = 'Search...', className = '' }) {
  const handleKey = (e) => {
    if (e.key === 'Enter' && onSearch) onSearch()
  }

  return (
    <div className={[styles.searchWrapper, className].filter(Boolean).join(' ')}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        onKeyDown={handleKey}
        placeholder={placeholder}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  )
}
