import React from "react";
import {useSelector} from "react-redux";
import {getCalendarSelectedDay} from "../../../app/store/selectors";
const SelectedDayInfo = () => {
  const selectedDay = useSelector(getCalendarSelectedDay);
  const a = "aaaaaaaa";
  //console.log("########", selectedDay)
  return (
    <div>
      <div>SelectedDayInfo</div>
      <div>{selectedDay}</div>
    </div>
  );
};

export default SelectedDayInfo;
