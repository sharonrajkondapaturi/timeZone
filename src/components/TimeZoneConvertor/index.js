import React, { Component } from 'react';
import queryString from 'query-string';
import moment from 'moment-timezone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TimeZoneDisplay from '../TimeZoneDisplay';
import AddTimeZone from '../AddTimeZone';
import { CiLight,CiDark,CiLink,CiPause1} from "react-icons/ci";
import { GrSchedule,GrResume} from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import {Background,Heading,Unlist,NavBar,Mode,ExtraButtons,Rows,Button,HamList,SmallButton,Image,Ham,NavRows} from './styledComponents'


class TimeZoneConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZones: ['UTC', 'Asia/Kolkata'], // Default time zones
      currentTime: moment(),
      isDark:false,
      isRunning:true,
      isHam:false
    };
  }

  //using lifecycle component 
  componentDidMount(){
   this.onTimer() 
  }

  //set Timer for every second
  onTimer = ()=>{
    this.timerId = setInterval(()=>{
      this.setState({currentTime:moment(),isRunning:true})
    },1000)
  }
 
  //component will unMount
  componentWillUnmount(){
    this.onPause()
  }
 
  //pause the time
  onPause = ()=>{
    this.setState({isRunning:false})
    clearTimeout(this.timerId)
  }

 //select the zone and add it to the list with the help of the setState
  handleTimeZoneAddition = (timeZone) => {
    const {timeZones} = this.state 
    const isDuplicate = timeZones.includes(timeZone)
    if(isDuplicate === false){
        this.setState(prevState => ({
            timeZones: [...prevState.timeZones, timeZone]
          }));
    }
  };
 
  //delete the zone using filter method
  handleTimeZoneDeletion = (index) => {
    this.setState(prevState => ({
      timeZones: prevState.timeZones.filter((_, i) => i !== index)
    }));
  };
 
  //select the time and date 
  handleTimeChange = (date) => {
    this.setState({ currentTime: moment(date) });
  };
  
  //drag function from the package dnd
  onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({ timeZones: items });
  };
  
  //Reverse the timezone list
  onReverse = () => {
    const {timeZones} = this.state 
    const reverse = timeZones.sort().reverse()
    this.setState({timeZones:reverse})
  }
  
  //toggle dark or light Mode
  onMode = () => {
    this.setState(prevState=>({isDark:!prevState.isDark}))
  }
  
  //schedule the Meet with google calender
  scheduleMeet = () => {
    const { currentTime } = this.state;
    const startTime = currentTime.toISOString();
    const endTime = currentTime.add(1, 'hour').toISOString();
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&text=Meeting&location=Online&sf=true&output=xml`;
    window.open(url, '_blank');
  };

  //use to generate a link 
  generateShareableLink = () => {
    const { timeZones, currentTime } = this.state;
    const params = {
      timeZones: timeZones.join(','),
      time: currentTime.toISOString(),
    };
    const query = queryString.stringify(params);
    const link = `${window.location.origin}?${query}`;
    return link;
  };

  //show Ham or Hide Ham 
  onHam = ()=>{
    this.setState(prevState=>({isHam:!prevState.isHam}))
  }


  render() {
    const { timeZones, currentTime,isDark,isRunning,isHam} = this.state;
    return (
      <Background color={isDark}>
        <NavBar color={isDark}>
          <Image src="https://t3.ftcdn.net/jpg/04/94/71/16/360_F_494711647_vHdR3zkIgXyHkxotMA6rpnxSktGEfOFP.jpg"
          alt="image"/>
          <Heading>Time Zone</Heading>
          <NavRows>
          <ExtraButtons onClick={() => navigator.clipboard.writeText(this.generateShareableLink())}>
        <CiLink fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Copy Shareable Link
        </ExtraButtons>
        <ExtraButtons onClick={this.scheduleMeet}>
        <GrSchedule fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Schedule Meet
        </ExtraButtons>
        <Mode type="button" onClick={this.onMode} color={isDark}>
        {isDark?
        <CiLight size={30}/>:<CiDark size={30}/>}
        </Mode>
        <Ham color={isDark}onClick={this.onHam}>
           <GiHamburgerMenu />
        </Ham>
        </NavRows>
        </NavBar>
        {isHam?<HamList>
        <SmallButton style={{backgroundColor:"transparent",display:'block'}} onClick={() => navigator.clipboard.writeText(this.generateShareableLink())}>
        <CiLink  style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Copy Shareable Link
        </SmallButton>
        <hr style={{margin:0}}/>
        <SmallButton style={{backgroundColor:"transparent",display:'block'}} onClick={this.scheduleMeet}>
        <GrSchedule style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Schedule Meet
        </SmallButton>
      </HamList>:null}
        <Rows>
        <AddTimeZone onAdd={this.handleTimeZoneAddition} 
        onReverse={this.onReverse} 
        currentTime={currentTime} 
        onTime={this.handleTimeChange}/>
        {isRunning?<Button type="button" color="#eb7434" onClick={this.onPause}>
        <CiPause1 size={15} fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
          Pause
        </Button>:
        <Button type="button" color="#3edea3" onClick={this.onTimer}>
        <GrResume size={15} fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
          Resume
        </Button>
        }
        </Rows>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {timeZones.map((zone, index) => (
                  <Draggable key={zone} draggableId={zone} index={index}>
                    {(provided, snapshot) => (
                      <Unlist
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TimeZoneDisplay
                          timeZone={zone}
                          currentTime={currentTime}
                          onDelete={() => this.handleTimeZoneDeletion(index)}
                        />
                      </Unlist>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Background>
    );
  }
}

export default TimeZoneConverter;
