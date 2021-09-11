
import { BlueButton } from './BlueButton';
import * as S from './SectionHeaderStyled';

export default function SectionHeader(){
    return (
        <S.SectionHeader>
            <S.TextContainer>
                <h1>Meus hábitos</h1>
                <span>Nenhum hábito concluído ainda</span>
            </S.TextContainer>
            <BlueButton size='small'>+</BlueButton>
        </S.SectionHeader>
    );
}