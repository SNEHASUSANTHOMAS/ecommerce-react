import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
function Error() {
  const error = useRouteError()
  return (
    <div className='error-page'>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default Error
