import React, { useState } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";
import "./DatetimePicker-Dropdown.css";

export const Datetimepicker_Dropdown = (props) => {
  const dtString = () => {
    return `${formatDate(props.selectedDate).toString()}`;
  };

  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    console.log(`formate date: ${[year, month, day].join("-")}`);
    return [year, month, day].join("-");
  };

  const [selectedDate, setSelectedDate] = useState(
    formatDate(props.selectedDate).toString()
  );
  console.log("------------date picker-------------");
  console.log(selectedDate);

  const onDateSelection = (date) => {
    console.log("------------ onSelection; -------------");
    console.log(selectedDate);

    setSelectedDate(date);
    props.onChange(date);
  };

  return (
    <div className="datedropdown_input-container">
      <label htmlFor={props.id}> {props.label}</label>
      <DropdownDate
        startDate={
          // optional, if not provided 1900-01-01 is startDate
          "1950-01-01" // 'yyyy-mm-dd' format only
        }
        endDate={
          // optional, if not provided current date is endDate
          new Date() // 'yyyy-mm-dd' format only
        }
        selectedDate={
          // optional
          selectedDate // 'yyyy-mm-dd' format only//'2013-12-31'
        }
        order={[
          // optional
          DropdownComponent.year, // Order of the dropdowns
          DropdownComponent.day,
          DropdownComponent.month,
        ]}
        onMonthChange={(month) => {
          // optional
          //console.log(month);
        }}
        onDayChange={(day) => {
          // optional
          //console.log(day);
        }}
        onYearChange={(year) => {
          // optional
          //console.log(year);
        }}
        onDateChange={(date) => {
          // optional
          ///console.log('onchange:')
          //console.log(date);
          setSelectedDate({ date: date, selectedDate: formatDate(date) });
          onDateSelection(date);

          //this.setState({ date: date, selectedDate: formatDate(date) });
          //setDob(formatDate(date))
        }}
        ids={
          // optional
          {
            year: "select-year",
            month: "select-month",
            day: "select-day",
          }
        }
        names={
          // optional
          {
            year: "year",
            month: "month",
            day: "day",
          }
        }
        classes={
          // optional
          {
            dateContainer: "dropdown-date-container",
            yearContainer: "dropdown-year-container",
            monthContainer: "dropdown-month-container",
            dayContainer: "dropdown-day-container",
            year: "classes classes",
            month: "classes classes",
            day: "classes classes",
            yearOptions: "classes",
            monthOptions: "classes",
            dayOptions: "classes",
          }
        }
        defaultValues={
          // optional
          {
            year: "select year",
            month: "select month",
            day: "select day",
          }
        }
        options={
          // optional
          {
            yearReverse: true, // false by default
            monthShort: true, // false by default
            monthCaps: true, // false by default
          }
        }
      />
    </div>
  );
};
