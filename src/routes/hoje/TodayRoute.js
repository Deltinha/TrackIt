import SectionHeader from '../../components/shared/SectionHeader';
import Habit from './Habit';
import * as S from './TodayRouteStyled';

export default function TodayRoute(){
    const weekday = 'Segunda';
    const date = '17/05';
    return (
        <S.TodayRoute>
            <SectionHeader>
                {`${weekday} - ${date}`}
            </SectionHeader>

            <Habit></Habit>

        </S.TodayRoute>  
    );
}