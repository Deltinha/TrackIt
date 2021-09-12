import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import * as S from './BottomNavigationStyled';

export default function BottomNavigation() {
    const pc = 64;
    
    return (
        <S.BottomNavigation>
            <div>
                <Link to='/habitos'>    
                    <span>Hábitos</span>
                </Link>
                <Link to='/historico'>
                    <span>Histórico</span>
                </Link>
            </div>

            <Link to='/hoje'>
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
                    })}/>
                </S.ProgressBarContainer>
            </Link>
        </S.BottomNavigation>
    );
}