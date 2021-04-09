import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { planetsApi } from '../constant'
import Loading from './Loading'
function Planets() {
  const { isLoading, data } = useFetch(planetsApi)
  return (
    <div className='grid'>
      {isLoading && <Loading />}
      {data.map((planet) => {
        const { name, population, terrain } = planet
        return (
          <div className='card' key={planet.name}>
            <h3>name: {name}</h3>
            <p>population: {population}</p>
            <p>terrain: {terrain}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Planets
