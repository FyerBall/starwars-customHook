import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { starshipsApi } from '../constant'
import Loading from './Loading'
function StarShips() {
  const { isLoading, data } = useFetch(starshipsApi)
  return (
    <div className='grid'>
      {isLoading && <Loading />}
      {data.map((ship) => {
        const { name, crew, passengers } = ship
        return (
          <div className='card' key={name}>
            <h3>Name: {name}</h3>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StarShips
