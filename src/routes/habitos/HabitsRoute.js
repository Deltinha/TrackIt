import * as S from './HabitsRouteStyled';
import SectionHeader from "../../components/shared/SectionHeader";
import HabitsList from './HabitsList';
import NewHabit from './NewHabit';
import Habit from './Habit';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getHabits } from '../../services/trackit-api';

export default function HabitsRoute (){
    let concludedPct = undefined;
    const [habits, setHabits] = useState([]);
    const {token} = useContext(UserContext);
    const [creatingHabit, setCreatingHabit] = useState(false);

    function refreshList(){
            getHabits(token)
            .then((res)=>{
                setHabits(res.data);
            })
            .catch(()=>console.log('erro'));
    }

    concludedPct = 22
    return (
        <S.HabitsRoute>
            <SectionHeader
            concludedPct={concludedPct}
            setCreatingHabit={setCreatingHabit}>
                Meus hábitos
            </SectionHeader>

            {
                creatingHabit ?
                <NewHabit 
                setCreatingHabit={setCreatingHabit}
                refreshList={refreshList}/>
                :
                <></>
            }

            <HabitsList
            habits={habits}
            refreshList={refreshList} />

            <S.Notice>
                {
                    (habits.length > 0) ? '' : 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'
                }
            </S.Notice>
        </S.HabitsRoute>
    );
}