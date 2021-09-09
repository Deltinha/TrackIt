import '../reset.css';
import '../font-import.css';
import LogIn from "../routes/login/Login";
import * as S from './AppStyled';


export default function App() {
  return (
    <S.App>
        <LogIn />
    </S.App>
  );
}
