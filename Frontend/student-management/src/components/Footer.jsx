import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
        <p>
          © {new Date().getFullYear()} Student Management System. All rights reserved.
        </p>
      </footer>
  )
}

export default Footer