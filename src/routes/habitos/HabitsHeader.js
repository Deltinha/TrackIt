import { BlueButton } from '../../components/shared/BlueButton';
import * as S from './HabitsHeaderStyled';

export default function HabitsHeader({setCreatingHabit}){
    


    return (
        <S.HabitsHeader>
            <h1>Meus hábitos</h1>

            <BlueButton 
            size='small'
            onClick={()=>setCreatingHabit(true)}>+</BlueButton>
        </S.HabitsHeader>
    );
}