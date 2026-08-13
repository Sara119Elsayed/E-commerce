'use client'
import React, { useEffect } from 'react'
import styles from './ui.module.css'

export default function Toast({ message, type = 'info', visible = true, onClose, autoHide = 3000 }) {
  useEffect(() => {
    if (!visible) return
    if (autoHide && onClose) {
      const id = setTimeout(onClose, autoHide)
      return () => clearTimeout(id)
    }
  }, [visible, autoHide, onClose])

  if (!visible) return null

  const cls = [styles.toast, type === 'success' ? styles.toastSuccess : type === 'error' ? styles.toastError : styles.toastInfo].join(' ')

  return (
    <div className={cls} role="status">
      <div>{message}</div>
      <button className={styles.toastClose} onClick={onClose} aria-label="close">
        ×
      </button>
    </div>
  )
}
