import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
//import getMonth from "date-fns/getYear";
import range from "lodash/range";
import classes from "../../UI/datetimepicker/MyDateTimePicker.module.css";
//import classes from "./DropDown.module.css";
//import classes from "./Input.module.css";
///*
    const getMonth1 = (date) => {
      return date.getMonth();
    }    

//*/

export const MyDatePicker = (props) => {
    
///*
  const onDatePickerChange = (e) =>{
    //console.log(e);
    setStartDate(e);
    props.onChange(e);
    //return e;
  }
  //*/

    const [startDate, setStartDate] = useState(props.currentDate);
    const years = range(1940, getYear(props.currentDate) + 1, 1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <div className={classes["react-datepicker__input-container"]} >
        <DatePicker
      
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>  
          <select
            value={months[getMonth1(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={onDatePickerChange}
    />
      </div>
      
    );
  };
