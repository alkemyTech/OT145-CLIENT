import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'

const ToysCampaign = lazy(() => import('./Campaigns/Toys/ToysCampaign'))
const SchoolCampaign = lazy(() => import('./Campaigns/School/SchoolCampaign'))
const BackOficce = lazy(() => import('../src/backOffice/Backoffice'))
const Routes = lazy(() => import('./Components/Home/Routes'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/backoffice" component={BackOficce} />

            <Route exact path="/school-campaign" component={SchoolCampaign} />
            <Route exact path="/toys-campaign" component={ToysCampaign} />

            <Route path="/" component={Routes} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
