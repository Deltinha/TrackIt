import '../reset.css';
import '../font-import.css';
import LogInRoute from '../routes/login/LogInRoute';
import * as S from './AppStyled';
import SignUpRoute from '../routes/cadastro/SignUpRoute';
import TopNavbar from './TopNavbar';
import BottomNavigation from './BottomNavigation';
import HabitsRoute from '../routes/habitos/HabitsRoute';
import TodayRoute from '../routes/hoje/TodayRoute';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';


export default function App() {
  const [profileImage, setProfileImage] = useState('');
  const [token, setToken] = useState('');

  return (
    <S.App>
        <BrowserRouter>
        <UserContext.Provider value={{profileImage, setProfileImage, token, setToken}}>
          <Switch>
              <Route path='/' exact>
                <LogInRoute />
              </Route>

              <Route path='/cadastro' exact>
                <SignUpRoute />
              </Route>

              <>
                <TopNavbar />
                <BottomNavigation />
      
                <Route path='/habitos' exact>
                  <HabitsRoute />
                </Route>

                <Route path='/hoje' exact>
                  <TodayRoute />
                </Route>
              </>
            </Switch>
          </UserContext.Provider>
        </BrowserRouter>
    </S.App>
  );
}
