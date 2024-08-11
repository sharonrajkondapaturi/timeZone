import React from 'react';
import { MdDelete } from "react-icons/md";
import {List,DeleteButton,Time} from './styledComponents'

//onDelete is used to delete the perspective timezone
const TimeZoneDisplay = ({ timeZone, currentTime, onDelete }) => {
  const timeInZone = currentTime.tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  return (
    <List>
      <Time>{timeZone} </Time>
      <Time>{timeInZone}</Time>
      <DeleteButton type="button" onClick={onDelete}>
        <MdDelete fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Delete
      </DeleteButton>
    </List>
  );
};

export default TimeZoneDisplay;
