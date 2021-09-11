import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import * as S from './BottomNavigationStyled';

export default function BottomNavigation() {
    const pc = 64;
    return (
        <S.BottomNavigation>
            <span>Hábitos</span>
            <span>Histórico</span>
            <S.ProgressBarContainer>
                <CircularProgressbar 
                value={pc} 
                text='Hoje'
                background
                backgroundPadding={6}
                styles={buildStyles({
                    textSize: '18px',
                    textColor: '#fff',
                    pathColor: '#fff',
                    backgroundColor: '#52B6FF',
                    trailColor: '#52B6FF',
                })}/>;
            </S.ProgressBarContainer>
        </S.BottomNavigation>
    );
}