'use client'
import React from 'react'

export default function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#142B7B] focus:outline-none transition text-gray-700"
      />
    </div>
  );
}
