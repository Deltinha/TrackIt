import * as S from './LogInFormStyled';

export default function LogInForm(){
    return (
        <S.LogInForm>
            <input 
            type="text" 
            id="email" 
            name="email"
            placeholder='email'></input>
            
            <input 
            type="text" 
            id="password" 
            name="password"
            placeholder='senha'></input>
        </S.LogInForm>
    );
}