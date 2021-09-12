
import { BlueButton } from './BlueButton';
import * as S from './SectionHeaderStyled';

export default function SectionHeader({children:sectionTitle, concludedPct, setCreatingHabit}){
    
    function concludedText(){
        if (concludedPct > 0) {
            return `${concludedPct}% dos hábitos concluídos`;
        }
        if (concludedPct === 0) {
            return 'Nenhum hábito concluído ainda';
        }
        return '';
    }

    return (
        <S.SectionHeader>
            <S.TextContainer>
                <S.SectionTitle>{sectionTitle}</S.SectionTitle>
                <S.HabitsConcludedText concludedPct={concludedPct}>
                    {concludedText()}
                </S.HabitsConcludedText>
            </S.TextContainer>
            <BlueButton 
            size='small'
            onClick={()=>setCreatingHabit(true)}>+</BlueButton>
        </S.SectionHeader>
    );
}