import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { starshipsApi } from '../constant'
import Loading from './Loading'
function StarShips() {
  const { isLoading, data } = useFetch(starshipsApi)
  return (
    <div>
      <Loading isLoading={isLoading} />
      {data.map((ship) => {
        const { name, crew, passengers } = ship
        return (
          <div className='' key={name}>
            <h1>name: {name}</h1>
            <p>crew: {crew}</p>
            <p>passengers: {passengers}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StarShips
