import React from 'react'

function Loading({ isLoading }) {
  return (
    <div>
      <h1>{isLoading && 'Loading...'}</h1>
    </div>
  )
}

export default Loading
