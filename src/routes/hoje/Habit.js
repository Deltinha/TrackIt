import * as S from './HabitStyled';
import {GoCheck} from 'react-icons/go';

export default function Habit({habitData}){

    return (
        <S.Habit>
            <div className='habit-info'>
                <span className='habit-info_name'>
                    {habitData.name}
                </span>
                <span className='habit-info__current-sequence'>
                    Sequência atual:&nbsp;
                    <span className='habit-info__current-sequence__color'>
                        {habitData.currentSequence} dias
                    </span>
                </span>
                <span className='habit-info__highest-sequence'>
                    Seu recorde:&nbsp;
                    <span className='habit-info__highest-sequence__color'>
                        {habitData.highestSequence} dias
                    </span>
                </span>
            </div>

            <S.Checkbox>
                    <input
                    type='checkbox' 
                    defaultChecked={habitData.done}/>
                    <div>
                        <GoCheck />
                    </div>
            </S.Checkbox>
            
        </S.Habit>
    );
}