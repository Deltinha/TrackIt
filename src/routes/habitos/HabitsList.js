import Habit from './Habit';
import * as S from './HabitsListStyled';

export default function HabitsList(){
    return (
        <S.HabitsList>
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
        </S.HabitsList>
    );
}