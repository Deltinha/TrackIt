import '../reset.css';
import '../font-import.css';
import LogIn from '../routes/login/LogIn';
import * as S from './AppStyled';
import SignUp from '../routes/cadastro/SignUp';
import Habits from '../routes/habitos/Habits';
import TopNavbar from './TopNavbar';
import BottomNavigation from './shared/BottomNavigation';


export default function App() {
  return (
    <S.App>
        {/* <LogIn /> */}

        {/* <SignUp /> */}

        <TopNavbar />
        
        <Habits />

        <BottomNavigation />
    </S.App>
  );
}
