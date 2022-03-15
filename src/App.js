import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'
import Spinner from './Components/Spinner/Spinner'
import { Box } from '@mui/material';
import Error404 from './Components/Error404/Error404'


const ToysCampaign = lazy(() => import('./Campaigns/Toys/ToysCampaign'))
const SchoolCampaign = lazy(() => import('./Campaigns/School/SchoolCampaign'))
const BackOficce = lazy(() => import('../src/backOffice/Backoffice'))
const Routes = lazy(() => import('./Components/Home/Routes'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense
          fallback={
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Spinner
                color="#000"
                height={80}
                width={800}
              />
            </Box>
          }
        >
          <Switch>
            <Route path="/" component={Routes} />
            <Route path="/backoffice" component={BackOficce} />
            <Route exact path="/school-campaign" component={SchoolCampaign} />
            <Route exact path="/toys-campaign" component={ToysCampaign} />
          </Switch>
        </Suspense>

      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
