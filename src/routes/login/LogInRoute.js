import { Link, useHistory } from 'react-router-dom';
import trackitlogo from '../../assets/trackit-logo.png';
import { BlueButton } from '../../components/shared/BlueButton';
import { LogInForm } from '../../components/shared/Form';
import * as S from './LogInRouteStyled';
import { TextInput } from '../../components/shared/TextInput';
import { useContext, useState } from 'react';
import { postLogIn } from '../../services/trackit-api';
import Loader from 'react-loader-spinner';
import { UserContext } from '../../contexts/UserContext';


export default function LogInRoute(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const [disabledInputs, setDisabledInputs] = useState(false);
    const {setProfileImage} = useContext(UserContext);
    const {setToken} = useContext(UserContext);

    const body = {
        email,
        password
    };

    function logIn(){
        setDisabledInputs(true);

        postLogIn(body)
            .then((res)=>{
                setProfileImage(res.data.image);
                setToken(
                    {
                        headers: {
                            Authorization: `Bearer ${res.data.token}`
                        }
                    }
                );
                history.push('/hoje')
            })
            .catch(()=>{
                setDisabledInputs(false);
                alert('Falha no login');
            })
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