import * as S from './NewHabitStyled';
import { TextInput } from "../../components/shared/TextInput";
import { BlueButton } from '../../components/shared/BlueButton';
import WeekCheckboxes from '../../components/shared/WeekCheckboxes';


export default function NewHabit(){
    return (
        <S.NewHabit>
            <TextInput 
                type="text" 
                id="habit-name" 
                name="habit-name"
                placeholder='nome do hábito'/>

            <WeekCheckboxes />
            
            <S.CancelAndSaveButtons>
                <button className='cancel-button'>Cancelar</button>

                <BlueButton>Salvar</BlueButton>

            </S.CancelAndSaveButtons>
            
        </S.NewHabit>
    );
}