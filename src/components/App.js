import '../reset.css';
import '../font-import.css';
import LogIn from '../routes/login/LogIn';
import * as S from './AppStyled';
import SignUp from '../routes/cadastro/SignUp';
import Habits from '../routes/habitos/Habits';
import Navbar from './Navbar';


export default function App() {
  return (
    <S.App>
        {/* <LogIn /> */}

        {/* <SignUp /> */}

        <Navbar />
        <Habits />
    </S.App>
  );
}
