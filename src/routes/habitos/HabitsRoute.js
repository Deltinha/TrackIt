import * as S from './HabitsRouteStyled';
import SectionHeader from "../../components/shared/SectionHeader";
import NewHabit from './NewHabit';
import Habit from './Habit';
import { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getAllHabits } from '../../services/trackit-api';
import { UserContext } from '../../contexts/UserContext';

export default function HabitsRoute (){
    let concludedPct = undefined;
    
    const [creatingHabit, setCreatingHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const {token} = useContext(UserContext);

    function refreshList(){
      getAllHabits(token)
      .then((res)=>{
          setHabits(res.data);
      });
  }

    useEffect(()=>refreshList(),[]);

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

        <S.HabitsList>
            {habits.map((habit)=>(
                <Habit
                refreshList={refreshList}
                key={habit.id}
                name={habit.name}
                habitDays={habit.days}
                habitID={habit.id}/>
            ))}
        </S.HabitsList>

            <S.Notice>
                {
                    (habits.length > 0) ? '' : 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'
                }
            </S.Notice>
        </S.HabitsRoute>
    );
}