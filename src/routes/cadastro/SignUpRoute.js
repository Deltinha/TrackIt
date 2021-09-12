import * as S from './SignUpRouteStyled';
import trackitlogo from '../../assets/trackit-logo.png';
import { LogInForm } from '../../components/shared/Form';
import { TextInput } from '../../components/shared/TextInput';
import { BlueButton } from '../../components/shared/BlueButton';
import { Link, useHistory } from 'react-router-dom';
import { postSignUp } from '../../services/trackit-api';
import { useEffect, useState } from 'react';

export default function SignUpRoute(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const history = useHistory();

    function registerUser(){

        const body = {
            email,
            name,
            image,
            password
        }

        postSignUp(body)
            .then(()=>history.push('/'))
            .catch(()=>alert('Erro na criação da conta'))
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
                value={email}/>

                <TextInput 
                type="password" 
                id="password" 
                name="password"
                placeholder='senha'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}/>

                <TextInput 
                type="text" 
                id="username" 
                name="username"
                placeholder='nome'
                onChange={(e)=>setName(e.target.value)}
                value={name}/>

                <TextInput 
                type="text" 
                id="profile-picture" 
                name="profile-picture"
                placeholder='foto'
                onChange={(e)=>setImage(e.target.value)}
                value={image}/>
            </LogInForm>

            <BlueButton 
            size='large'
            onClick={registerUser}>
                Cadastrar
            </BlueButton>

            <Link to='/'>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </S.SignUpRoute>
    );
}