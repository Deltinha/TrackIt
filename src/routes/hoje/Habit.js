import * as S from './HabitStyled';
import {GoCheck} from 'react-icons/go';

export default function Habit({habitData}){
    return (
        <S.Habit>
            <div className='habit-info'>
                <span className='habit-name'>
                    {habitData.name}
                </span>
                <span className='current-streak'>
                    Sequência atual: {habitData.currentSequence} dias
                </span>
                <span className='record-streak'>
                    Seu recorde: {habitData.highestSequence} dias
                </span>
            </div>
            <S.Checkbox className='checkbox'
            concluded={habitData.done}>
                <GoCheck />
            </S.Checkbox>
            
        </S.Habit>
    );
}