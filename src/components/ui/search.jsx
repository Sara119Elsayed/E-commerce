'use client'
import React from 'react'
import Button from './button'

export default function Search({ value, onChange, onSearch, placeholder = 'Search...', className = '' }) {
  const handleKey = (e) => {
    if (e.key === 'Enter' && onSearch) onSearch()
  }

  return (
    <div className={['search-wrapper', className].filter(Boolean).join(' ')}>
      <input className="ui-input" value={value} onChange={onChange} onKeyDown={handleKey} placeholder={placeholder} />
      <Button onClick={onSearch}>Search</Button>
    </div>
  )
}
