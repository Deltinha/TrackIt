import * as S from './SignUpRouteStyled';
import trackitlogo from '../../assets/trackit-logo.png';
import { LogInForm } from '../../components/shared/Form';
import { TextInput } from '../../components/shared/TextInput';
import { BlueButton } from '../../components/shared/BlueButton';
import { Link, useHistory } from 'react-router-dom';
import { postSignUp } from '../../services/trackit-api';
import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

export default function SignUpRoute(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const history = useHistory();
    const [disabledInputs, setDisabledInputs] = useState(false);

    function registerUser(){
        setDisabledInputs(true);

        const body = {
            email,
            name,
            image,
            password
        }

        postSignUp(body)
            .then(()=>history.push('/'))
            .catch(()=>{
                setDisabledInputs(false);
                alert('Erro na criação da conta');
            })
    }

    return (
        <S.SignUpRoute>
            <img src={trackitlogo}/>

            <LogInForm>
                <TextInput 
                type="email" 
                id="email" 
                name="email"
                placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                disabled={disabledInputs}/>

                <TextInput 
                type="password" 
                id="password" 
                name="password"
                placeholder='senha'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                disabled={disabledInputs}/>

                <TextInput 
                type="text" 
                id="username" 
                name="username"
                placeholder='nome'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                disabled={disabledInputs}/>

                <TextInput 
                type="text" 
                id="profile-picture" 
                name="profile-picture"
                placeholder='foto'
                onChange={(e)=>setImage(e.target.value)}
                value={image}
                disabled={disabledInputs}/>
            </LogInForm>
            
            <BlueButton
            disabled={disabledInputs}
            size='large'
            onClick={disabledInputs ? undefined : registerUser}>
                {disabledInputs ? 
                    <Loader
                    type="ThreeDots"
                    color="#fff"
                    height={13}/>
                    :
                    'Cadastrar'
                }
            </BlueButton>

            <Link to='/'>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </S.SignUpRoute>
    );
}