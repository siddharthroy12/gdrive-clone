import SignUp from './components/authentication/SignUp'
import Login from './components/authentication/Login'
import ForgotPassword from './components/authentication/ForgotPassword'
import Profile from './components/authentication/Profile'
import UpdateProfile from './components/authentication/UpdateProfile'
import Dashboard from './components/gdrive/Dashboard.js'
import PrivateRoute from './routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path='/user' component={Profile}/>
          <PrivateRoute path='/folder/:folderId' component={Dashboard} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
