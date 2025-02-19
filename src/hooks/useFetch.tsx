import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        setData(response.data)
      } catch (e: any) {
        console.log(e)
      }
    }
    fetchData()
  }, [url])
  return { data }
}
export default useFetch
