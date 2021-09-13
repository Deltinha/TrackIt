import * as S from './HabitStyled';
import {GoCheck} from 'react-icons/go';
import { postCheckHabit, postUnCheckHabit } from '../../services/trackit-api';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Habit({habitData, refreshList, calculateDonePct}){
    const {token} = useContext(UserContext);    
    
    function checkHabit(){
        postCheckHabit(habitData.id, token);
        refreshList();
    }

    function unCheckHabit(){
        postUnCheckHabit(habitData.id, token);
        refreshList();
    }


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
                    defaultChecked={habitData.done}
                    onChange={(e)=>e.target.checked ? 
                        checkHabit()
                        : 
                        unCheckHabit()}/>
                    <div>
                        <GoCheck />
                    </div>
            </S.Checkbox>
            
        </S.Habit>
    );
}