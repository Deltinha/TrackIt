import { useEffect } from 'react/cjs/react.development';
import SectionHeader from './SectionHeader';
import Habit from './Habit';
import * as S from './TodayRouteStyled';
import { getTodayHabits } from '../../services/trackit-api';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function TodayRoute({setDonePct, donePct}){

    const [habits,setHabits] = useState([]);
    const {token} = useContext(UserContext);
    
    function refreshList(){
        getTodayHabits(token)
        .then((res)=>{
            setHabits(res.data);
            calculateDonePct(res.data);
        });
    }

    function calculateDonePct(habitsData){
        let doneHabitsQty = 0;
    
        habitsData.forEach(habit => {
            if (habit.done) {
                doneHabitsQty++;
            }
        });
        console.log(habitsData)
        console.log(doneHabitsQty);
        if (habitsData.length > 0) {
            setDonePct((doneHabitsQty/habitsData.length)*100);    
        }
        else {
            setDonePct(0);
        }
        
    }

    useEffect(()=>refreshList(),[]);

    return (
        <S.TodayRoute>
            <SectionHeader 
            donePct={donePct}/>

            <>
                {habits.map((habit)=>(
                    <Habit
                    calculateDonePct={calculateDonePct}
                    refreshList={refreshList}
                    key={habit.id}
                    habitData={habit}/>
                ))}
            </>

        </S.TodayRoute>  
    );
}