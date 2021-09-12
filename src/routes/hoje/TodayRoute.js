import { useEffect } from 'react/cjs/react.development';
import SectionHeader from '../../components/shared/SectionHeader';
import Habit from './Habit';
import * as S from './TodayRouteStyled';
import { getTodayHabits } from '../../services/trackit-api';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function TodayRoute(){
    const weekday = 'Segunda';
    const date = '17/05';

    const [habits,setHabits] = useState([]);
    const {token} = useContext(UserContext);
    
    function refreshList(){
        getTodayHabits(token)
        .then((res)=>{
            setHabits(res.data);
            console.log(res.data);
        });
    }

    useEffect(()=>refreshList(),[]);

    return (
        <S.TodayRoute>
            <SectionHeader>
                {`${weekday} - ${date}`}
            </SectionHeader>

            <>
                {habits.map((habit)=>(
                    <Habit
                    key={habit.id}
                    habitData={habit}/>
                ))}
            </>

        </S.TodayRoute>  
    );
}