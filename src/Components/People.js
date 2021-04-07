import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { peopleApi } from '../constant'
import Loading from './Loading'
function People() {
  const { isLoading, data } = useFetch(peopleApi)
  return (
    <div>
      <Loading isLoading={isLoading} />
      {data.map((person) => {
        const { birth_year: year, eye_color: eyeColor, name } = person
        return (
          <div className='' key={person.name}>
            <h3>name: {name}</h3>
            <p>birth year: {year}</p>
            <p>eye Color: {eyeColor}</p>
          </div>
        )
      })}
    </div>
  )
}

export default People
