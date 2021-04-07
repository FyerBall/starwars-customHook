import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  // Error

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url)
      const data = result.data.results
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { isLoading, data }
}
