import React from "react"
import { Typography, CssBaseline } from "@mui/material"
import { AppContextProvider as ContextProvider } from '../src/utils/AppContext'
import SmartCalendar from "./components/SmartCalendar"

const App = () => {

  return (
    <div>
      <ContextProvider>
        <SmartCalendar />
        <CssBaseline />
      </ContextProvider>
    </div>
  )
}

export default App