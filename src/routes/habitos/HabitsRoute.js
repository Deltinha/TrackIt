import * as S from './HabitsRouteStyled';
import NewHabit from './NewHabit';
import Habit from './Habit';
import { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getAllHabits } from '../../services/trackit-api';
import { UserContext } from '../../contexts/UserContext';
import HabitsHeader from './HabitsHeader';

export default function HabitsRoute (){
    const [creatingHabit, setCreatingHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const {token} = useContext(UserContext);
    const [habitName, setHabitName] = useState('');
    const [habitDays, setHabitDays] = useState([]);

    function refreshList(){
      getAllHabits(token)
      .then((res)=>{
          setHabits(res.data);
      });
  }

    useEffect(()=>refreshList(),[]);

    return (
        <S.HabitsRoute>
            <HabitsHeader 
            setCreatingHabit={setCreatingHabit}/>

            {
                creatingHabit ?
                <NewHabit 
                habitName={habitName}
                setHabitName={setHabitName}
                habitDays={habitDays}
                setHabitDays={setHabitDays}
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