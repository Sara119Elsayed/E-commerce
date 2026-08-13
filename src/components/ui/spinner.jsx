'use client'
import React from 'react'
import styles from './ui.module.css'

export default function Spinner({ size = 16, className = '' }) {
  return <div className={styles.spinner} style={{ width: size, height: size }} aria-hidden="true" />
}
