import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from 'history.js'
import routes from './RootRoutes'
import { Store } from './redux/Store'
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from 'app/components'
import sessionRoutes from './views/sessions/SessionRoutes'
import landingRoutes from './views/landing/LandingRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from 'app/contexts/FirebaseAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'


const App = () => {
    
    return (
        <AppContext.Provider value={{ routes }}>
            <Provider store={Store}>
                <SettingsProvider>
                    <MatxTheme>
                        <GlobalCss />
                        <Router history={history}>
                            <AuthProvider>
                                <MatxSuspense>
                                    <Switch>
                                        <Route path="/" exact={true} component={() => <Redirect to="/home" />}></Route>  
                                        <Route path="/home" exact={true} component={landingRoutes[0].component} />
                                        <Route path="/blogs" exact={true} component={landingRoutes[1].component} />
                                        <Route path="/psychologists" exact={true} component={landingRoutes[2].component} />
                                        
                                        {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                                exact={true}
                                            />
                                        ))}
                                        
                                        {/* AUTH PROTECTED DASHBOARD PAGES */}
                                        <AuthGuard>
                                            <Route path="/"><MatxLayout />{' '}</Route>                                
                                            {/* RETURNS <Layout1/> component */}
                                        </AuthGuard>
                                    </Switch>
                                </MatxSuspense>
                            </AuthProvider>
                        </Router>
                    </MatxTheme>
                </SettingsProvider>
            </Provider>
        </AppContext.Provider>
    )
}

export default App
