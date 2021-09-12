import * as S from './HabitStyled';
import {GoTrashcan} from 'react-icons/go';
import WeekCheckboxes from '../../components/shared/WeekCheckboxes';
import { deleteHabit } from '../../services/trackit-api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Habit({name, habitDays, habitID, refreshList}) {
    const {token} = useContext(UserContext)

    function confirmDeletion(){
        const confirmation = window.confirm(`Deseja realmente remover o hábito "${name}"?`);
            if (confirmation) {
                deleteHabit(habitID, token)
                    .then(refreshList)
                    .catch(()=>alert('Erro'));    
            }
    }

    return (
        <S.Habit>
            <span>{name}</span>

            <GoTrashcan onClick={()=>confirmDeletion()}/>

            <WeekCheckboxes 
            disabled={true}
            habitDays={habitDays}/>
        </S.Habit>
    );
}