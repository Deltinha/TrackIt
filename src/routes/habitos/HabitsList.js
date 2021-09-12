import {useEffect} from 'react';
import Habit from './Habit';
import * as S from './HabitsListStyled';

export default function HabitsList({habits, refreshList}){
    
    
    useEffect(refreshList,[]);


    return (
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
    );
}