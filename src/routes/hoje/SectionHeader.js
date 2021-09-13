
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import * as S from './SectionHeaderStyled';

export default function SectionHeader({donePct}){
    dayjs.locale('pt-br');

    function concludedText(){
        if (donePct > 0) {
            return `${donePct}% dos hábitos concluídos`;
        }
        if (donePct === 0) {
            return 'Nenhum hábito concluído ainda';
        }
        return '';
    }

    return (
        <S.SectionHeader>
            <S.TextContainer>
                <S.SectionTitle>{dayjs().format('dddd, DD/MM')}</S.SectionTitle>
                <S.HabitsConcludedText donePct={donePct}>
                    {concludedText()}
                </S.HabitsConcludedText>
            </S.TextContainer>
        </S.SectionHeader>
    );
}