import { useEffect, useState } from "react"

export default function useFetch(url){
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [isError ,setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
   fetch(url).then(res => res.json()).then(data => setData(data)).catch((err) => {
    console.log(err)
    setIsError(true)} ).finally(() => {
    setIsLoading(false)
    })
  
  },[url])


return {
    data, isLoading, isError  
}
}