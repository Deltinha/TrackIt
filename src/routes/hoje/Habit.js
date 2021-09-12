import * as S from './HabitStyled';
import {GoCheck} from 'react-icons/go';

export default function Habit(){
    const concluded = true
    return (
        <S.Habit>
            <div className='habit-info'>
                <span className='habit-name'>
                    Ler 1 capítulo de livro
                </span>
                <span className='current-streak'>
                    Sequência atual: 4 dias
                </span>
                <span className='record-streak'>
                    Seu recorde: 5 dias
                </span>
            </div>
            <S.Checkbox className='checkbox'
            concluded={concluded}>
                <GoCheck />
            </S.Checkbox>
            
        </S.Habit>
    );
}