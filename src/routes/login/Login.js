import { Link } from 'react-router-dom';
import trackitlogo from '../../assets/trackit-logo.png';
import { BlueButton } from '../../components/shared/BlueButton';
import LogInForm from './LogInForm';
import * as S from './LogInStyled';

export default function LogIn(){
    return (
        <S.LogIn>
            <img src={trackitlogo}/>
            <LogInForm />
            <BlueButton size='large'>Entrar</BlueButton>

            <span>Não tem uma conta? Cadastre-se!</span>
        </S.LogIn>
    );
}