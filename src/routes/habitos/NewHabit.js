import * as S from './NewHabitStyled';
import { TextInput } from "../../components/shared/TextInput";
import { BlueButton } from '../../components/shared/BlueButton';
import WeekCheckboxes from './WeekCheckboxes';
import { useState } from 'react/cjs/react.development';
import { postHabit } from '../../services/trackit-api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Loader from 'react-loader-spinner';


export default function NewHabit({refreshList, setCreatingHabit, habitName, setHabitName, habitDays, setHabitDays}){
    
    
    
    const [disabledInputs, setDisabledInputs] = useState(false);
    const {token} = useContext(UserContext);

    const body = {
        name: habitName,
        days: habitDays
    };

    function sendNewHabit(){
        if (habitDays.length > 0) {
            setDisabledInputs(true);
            postHabit(body, token)
                .then(()=>{
                    setHabitName('');
                    setHabitDays([]);
                    setDisabledInputs(false);
                    setCreatingHabit(false);
                    refreshList();
                })
                .catch(()=>{
                    setDisabledInputs(false);
                    alert('Erro na criação');
                });
        }
        else{
            alert('Selecione ao menos um dia da semana');
        }
    }

    return (
        <S.NewHabit>
            <TextInput 
                type="text" 
                id="habit-name" 
                name="habit-name"
                placeholder='nome do hábito'
                value={habitName}
                onChange={(e)=>setHabitName(e.target.value)}
                disabled={disabledInputs}/>

            <WeekCheckboxes 
            habitDays={habitDays}
            setHabitDays={setHabitDays}
            disabled={disabledInputs}/>
            
            <S.CancelAndSaveButtons>
                <button 
                className='cancel-button'
                onClick={()=>setCreatingHabit(false)}>
                    Cancelar
                </button>

                <BlueButton
                disabled={disabledInputs}
                onClick={disabledInputs ? undefined : sendNewHabit}>
                {disabledInputs ? 
                    <Loader
                    type="ThreeDots"
                    color="#fff"
                    height={13}/>
                    :
                    'Salvar'
                }
            </BlueButton>

            </S.CancelAndSaveButtons>
            
        </S.NewHabit>
    );
}