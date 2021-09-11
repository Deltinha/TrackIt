import Habit from './Habit';
import * as S from './HabitsListStyled';
import NewHabit from './NewHabit';

export default function HabitsList(){
    return (
        <S.HabitsList>
            <Habit />
        </S.HabitsList>
    );
}