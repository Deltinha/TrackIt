import * as S from './HabitsRouteStyled';
import SectionHeader from "../../components/shared/SectionHeader";
import HabitsList from './HabitsList';
import NewHabit from './NewHabit';
import Habit from './Habit';

export default function HabitsRoute (){
    const sectionTitle = 'Meus hábitos';
    let concludedPct = undefined;
    concludedPct = 2
    return (
        <S.HabitsRoute>
            <SectionHeader
            concludedPct={concludedPct}>
                Meus hábitos
            </SectionHeader>

            <NewHabit />

            <HabitsList />

            <Habit />

            <S.Notice>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</S.Notice>
        </S.HabitsRoute>
    );
}