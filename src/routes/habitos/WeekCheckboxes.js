import * as S from './WeekCheckboxesStyled';

export default function WeekCheckboxes({habitDays, setHabitDays, disabled}){

    console.log(habitDays)
    let checkedDays = [...habitDays];
    const daysInitials = ['D','S','T','Q','Q','S','S'];

    function sortDays(){
        checkedDays.sort((a,b)=>a>b);
    }

    function pushDays(day, state){
        if (state) {
            checkedDays.push(day);
        }
        else {
            checkedDays = checkedDays.filter((d)=>d!==day)
        }
        sortDays();
        setHabitDays([...checkedDays]);     
    }

    return (
        <S.WeekCheckboxes>
            {daysInitials.map((day, index)=>(
                <S.DayCheckbox>
                    <input
                    onChange={(e)=>pushDays(index, e.target.checked)}
                    type='checkbox' 
                    defaultChecked={habitDays.includes(index)}
                    disabled={disabled}/>
                    <div>
                        <span>{day}</span>
                    </div>
                </S.DayCheckbox>
            ))}

            </S.WeekCheckboxes>
    );
}