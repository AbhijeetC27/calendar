import React, { createContext, useEffect } from "react"
import { appSettings } from './appSettings'

const AppContext = createContext()

function AppContextProvider(props) {

    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }