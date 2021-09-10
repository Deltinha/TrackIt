import * as S from './NavbarStyled';
import TrackItWoodMark from '../assets/trackit-woodmark.png';

export default function Navbar (){
    return (
        <S.Navbar>
            <img src={TrackItWoodMark} />
            <img className='profile-picture' src={TrackItWoodMark} />
        </S.Navbar> 
    );
}