import * as S from './TopNavbarStyled';
import TrackItWoodMark from '../assets/trackit-woodmark.png';

export default function TopNavbar (){
    return (
        <S.TopNavbar>
            <img src={TrackItWoodMark} />
            <img className='profile-picture' src={TrackItWoodMark} />
        </S.TopNavbar> 
    );
}