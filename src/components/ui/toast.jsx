'use client'
import React, { useEffect } from 'react'

export default function Toast({ message, type = 'info', visible = true, onClose, autoHide = 3000 }) {
  useEffect(() => {
    if (!visible) return
    if (autoHide && onClose) {
      const id = setTimeout(onClose, autoHide)
      return () => clearTimeout(id)
    }
  }, [visible, autoHide, onClose])

  if (!visible) return null

  const cls = ['toast', type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'toast-info'].join(' ')

  return (
    <div className={cls} role="status">
      <div>{message}</div>
      <button className="toast-close" onClick={onClose} aria-label="close">
        ×
      </button>
    </div>
  )
}
