import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { peopleApi } from '../constant'
import Loading from './Loading'
function People() {
  const { isLoading, data } = useFetch(peopleApi)
  return (
    <div className='grid'>
      {isLoading && <Loading />}
      {data.map((person) => {
        const {
          birth_year: year,
          eye_color: eyeColor,
          name: personName,
        } = person
        return (
          <div className='card' key={person.name}>
            <h3>Name: {personName}</h3>
            <p>Birth Year: {year}</p>
            <p>Eye Color: {eyeColor}</p>
          </div>
        )
      })}
    </div>
  )
}

export default People
