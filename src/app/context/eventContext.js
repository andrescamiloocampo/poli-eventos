'use client'

import { createContext,useContext,useState } from "react"

const eventContext = createContext({})

export const EventContextProvider = ({children}) =>{
    const [event,setEvent] = useState(null)
    return(
        <eventContext.Provider value={{event,setEvent}}>
            {children}
        </eventContext.Provider>
    )
}

export const useEventContext = () => useContext(eventContext)