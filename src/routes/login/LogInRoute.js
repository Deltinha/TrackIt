import { Link, useHistory } from 'react-router-dom';
import trackitlogo from '../../assets/trackit-logo.png';
import { BlueButton } from '../../components/shared/BlueButton';
import { LogInForm } from '../../components/shared/Form';
import * as S from './LogInRouteStyled';
import { TextInput } from '../../components/shared/TextInput';
import { useState } from 'react';
import { postLogIn } from '../../services/trackit-api';
import Loader from 'react-loader-spinner';


export default function LogInRoute(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const [disabledInputs, setDisabledInputs] = useState(false);

    const body = {
        email,
        password
    };

    function logIn(){
        setDisabledInputs(true);

        postLogIn(body)
            .then((res)=>{
                console.log(res.data)
                history.push('/hoje')
            })
            .catch(()=>alert('Falha no login'))
    }

    return (
        <S.LogInRoute>
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
            </LogInForm>

            <BlueButton
            disabled={disabledInputs}
            size='large'
            onClick={disabledInputs ? undefined : logIn}>
                {disabledInputs ? 
                    <Loader
                    type="ThreeDots"
                    color="#fff"
                    height={13}/>
                    :
                    'Entrar'
                }
            </BlueButton>

            <Link to='/cadastro'>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </S.LogInRoute>
    );
}