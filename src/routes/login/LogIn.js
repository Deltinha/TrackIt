import { Link } from 'react-router-dom';
import trackitlogo from '../../assets/trackit-logo.png';
import { BlueButton } from '../../components/shared/BlueButton';
import { LogInForm } from '../../components/shared/Form';
import * as S from './LogInStyled';
import { TextInput } from '../../components/shared/TextInput';

export default function LogIn(){
    return (
        <S.LogIn>
            <img src={trackitlogo}/>

            <LogInForm>
                <TextInput 
                type="text" 
                id="email" 
                name="email"
                placeholder='email'/>

                <TextInput 
                type="text" 
                id="password" 
                name="password"
                placeholder='senha'/>
            </LogInForm>

            <BlueButton size='large'>Entrar</BlueButton>
            <span>Não tem uma conta? Cadastre-se!</span>
        </S.LogIn>
    );
}