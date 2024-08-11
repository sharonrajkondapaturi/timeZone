import React, { useState } from 'react';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { AddTime,Select,Button,Option} from './styledComponents';
import 'react-datepicker/dist/react-datepicker.css';

const AddTimeZone = ({ onAdd,onReverse,currentTime,onTime}) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');

  //Add time 
  const handleAddClick = () => {
    onAdd(selectedTimeZone);
  };
  //Reverse the timezone List 
  const onRev = () => {
    onReverse()
  }
  //use to set time and date
  const onHandleTime = () => {
    onTime()
  }

  return (
    <AddTime>
        <DatePicker
          selected={currentTime.toDate()}
          onChange={onHandleTime}
          showTimeSelect
          dateFormat="Pp"
        />
      <Select value={selectedTimeZone} onChange={(e) => setSelectedTimeZone(e.target.value)}>
        {moment.tz.names().map((zone) => (
          <Option key={zone} value={zone}>{zone}</Option>
        ))}
      </Select>
      <Button color="#e31239" type="button" onClick={handleAddClick}>
        <IoMdAdd size={15} fill="#ffffff"style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Add Time Zone
       </Button>
       <Button color="#0c9c43" type="button" onClick={onRev}>
        <IoCameraReverse size={15} fill="#ffffff"style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Reverse
        </Button>
    </AddTime>
  );
};

export default AddTimeZone;
