import * as S from './SignUpStyled';
//import { SignUp } from './SignUpStyled';
import trackitlogo from '../../assets/trackit-logo.png';
import { LogInForm } from '../../components/shared/Form';
import { TextInput } from '../../components/shared/TextInput';
import { BlueButton } from '../../components/shared/BlueButton';

export default function SignUp(){
    return (
        <S.SignUp>
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

                <TextInput 
                type="text" 
                id="username" 
                name="username"
                placeholder='nome'/>

                <TextInput 
                type="text" 
                id="profile-picture" 
                name="profile-picture"
                placeholder='foto'/>
            </LogInForm>

            <BlueButton size='large'>Cadastrar</BlueButton>
            <span>Já tem uma conta? Faça login!</span>
        </S.SignUp>
    );
}