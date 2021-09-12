import * as S from './TopNavbarStyled';
import TrackItWoodMark from '../assets/trackit-woodmark.png';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

export default function TopNavbar (){
    const {profileImage} = useContext(UserContext);

    return (
        <S.TopNavbar>
            <img src={TrackItWoodMark} />
            <img className='profile-picture' src={profileImage} />
        </S.TopNavbar> 
    );
}