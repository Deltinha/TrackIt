import * as S from './HabitStyled';
import {GoTrashcan} from 'react-icons/go';
import WeekCheckboxes from '../../components/shared/WeekCheckboxes';
import { DayCheckbox } from '../../components/shared/WeekCheckboxesStyled';

export default function Habit() {
    return (
        <S.Habit>
            <span>Ler 1 capítulo de livro</span>

            <GoTrashcan />

            <WeekCheckboxes />
        </S.Habit>
    );
}