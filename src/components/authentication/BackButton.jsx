import React from 'react'
import { ArrowLeftCircle } from 'react-feather'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link to='/'>
      <span className='back-btn'>
      <ArrowLeftCircle />
    </span>
    </Link>
  )
}

export default BackButton
