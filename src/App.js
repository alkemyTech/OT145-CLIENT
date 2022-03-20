import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'
import Spinner from './Components/Spinner/Spinner'
import { Box } from '@mui/material';
import PrivateRoutes from './backOffice/PrivateRoutes'
const ToysCampaign = lazy(() => import('../src/Campaigns/Toys/ToysCampaign'))
const SchoolCampaign = lazy(() => import('../src/Campaigns/School/SchoolCampaign'))
const BackOficce = lazy(() => import('../src/backOffice/Backoffice'))
const Routes = lazy(() => import('./Components/Home/Routes'))



function App() {

  localStorage.setItem('token', 123)
  localStorage.setItem('email','intento57@alkemy.com')
  

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
            <PrivateRoutes exact path="/backoffice" component={BackOficce} />
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
