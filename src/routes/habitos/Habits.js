import * as S from './HabitsStyled';
import SectionHeader from "../../components/shared/SectionHeader";
import HabitsList from './HabitsList';
import NewHabit from './NewHabit';

export default function Habits (){
    return (
        <S.Habits>
            <SectionHeader />

            <NewHabit />

            <HabitsList />

            <S.Notice>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</S.Notice>
        </S.Habits>
    );
}