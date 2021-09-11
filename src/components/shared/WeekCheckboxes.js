import * as S from './WeekCheckboxesStyled';

export default function WeekCheckboxes(){
    const habito = false;

    const preSelected = [1,3,4,6];
    const daysInitials = ['D','S','T','Q','Q','S','S'];

    return (
        <S.WeekCheckboxes>
            {daysInitials.map((day, index)=>(
                <S.DayCheckbox>
                    <input 
                    type='checkbox' 
                    defaultChecked={habito && preSelected.includes(index)}
                    disabled={habito}/>
                    <div>
                        <span>{day}</span>
                    </div>
                </S.DayCheckbox>
            ))}

            </S.WeekCheckboxes>
    );
}