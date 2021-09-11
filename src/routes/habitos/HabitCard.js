import * as S from './HabitCardStyled';
import {GoTrashcan} from 'react-icons/go';
import WeekCheckboxes from '../../components/shared/WeekCheckboxes';

export default function HabitCard() {
    return (
        <S.HabitCard>
            <span>Ler 1 capítulo de livro</span>

            <GoTrashcan />

            <WeekCheckboxes />
        </S.HabitCard>
    );
}