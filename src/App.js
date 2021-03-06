import {useContext} from 'react';
import { Switch, Route ,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AuthContext from './components/store/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/Chat-Page'
function App() {
   const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/chatpage' exact>
        {authCtx.isLoggedIn && <ChatPage />}

        {!authCtx.isLoggedIn &&<Redirect to='/auth' />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
           
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
