import HabitCard from './HabitCard';
import * as S from './HabitsListStyled';
import NewHabit from './NewHabit';

export default function HabitsList(){
    return (
        <S.HabitsList>
            <HabitCard />
            <HabitCard />
            <HabitCard />
            <HabitCard />
            <HabitCard />
            <HabitCard />
        </S.HabitsList>
    );
}