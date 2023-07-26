import { useEffect } from "react"

export const useTitle = ({title}) => {

    useEffect(()=>{
        document.title = `${title} | shoppingapp`
    },[title])

  return null
}
