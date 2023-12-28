import { useEffect, useState } from "react"

export default function useFetch(url,options ={}){
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [isError ,setIsError] = useState(false)

  useEffect(() => {
    setData(undefined)
    setIsLoading(true)
    setIsError(false)

    const controller = new AbortController()

    fetch(url,{signal: controller.signal, ...options})
    .then(res => {
      if(res.status === 200){
      return res.json()  
        }
      return Promise.reject(res)
  } )
    .then(setData)
    .catch((err) => {
      if(err.name === 'AbortError') return
      setIsError(true)
    })
    .finally(() => {
      if(controller.signal.aborted) return
    setIsLoading(false)
    })
    
    return () => {
     controller.abort()
    } 
  },[url])


return {
    data, isLoading, isError  
}
}