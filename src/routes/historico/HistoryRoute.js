import HistoryHeader from './HistoryHeader';
import * as S from './HistoryRouteStyled';

export default function HistoryRoute(){
    return (
        <S.HistoryRoute>
            <HistoryHeader></HistoryHeader>
            <S.Notice>Em breve você poderá ver o histórico dos seus hábitos aqui!</S.Notice>
        </S.HistoryRoute>
    );
}