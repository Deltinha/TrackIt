import '../reset.css';
import '../font-import.css';
import LogInRoute from '../routes/login/LogInRoute';
import * as S from './AppStyled';
import SignUpRoute from '../routes/cadastro/SignUpRoute';
import TopNavbar from './TopNavbar';
import BottomNavigation from './shared/BottomNavigation';
import HabitsRoute from '../routes/habitos/HabitsRoute';
import TodayRoute from '../routes/hoje/TodayRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <S.App>
        <BrowserRouter>
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
        </BrowserRouter>
    </S.App>
  );
}
