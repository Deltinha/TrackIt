
import { BlueButton } from './BlueButton';
import * as S from './SectionHeaderStyled';

export default function SectionHeader({children:sectionTitle, concludedPct}){
    
    function concludedText(){
        if (concludedPct > 0) {
            return `${concludedPct}% dos hábitos concluídos`;
        }
        if (concludedPct === 0) {
            return 'Nenhum hábito concluído ainda';
        }
        return '';
    }

    //usar useparams para renderizar o botão dinamicamente


    return (
        <S.SectionHeader>
            <S.TextContainer>
                <S.SectionTitle>{sectionTitle}</S.SectionTitle>
                <S.HabitsConcludedText concludedPct={concludedPct}>
                    {concludedText()}
                </S.HabitsConcludedText>
            </S.TextContainer>
            <BlueButton size='small'>+</BlueButton>
        </S.SectionHeader>
    );
}