### Timezone-converter

In this project we are going to set,choose,revrse and delect the time zone

--> deployed using netlify 
--> deployed link -> https://master--sharontimezone.netlify.app/

--> required Third party package
    ---> query-string
    ---> moment-timezone
    ---> react-beautiful-dnd
    ---> styled-components
    ---> react-icons
    ---> react-datepicker
    
---> added components
    ---> AddTimeZone
    ---> TimeZoneConvertor
    ---> TimeZoneDisplay
    
---> for designing i used styled-components

---> media queries is used with the respective devices

---> list of timezone can be dragged with the help of ###react-beautiful-dnd

---> querystring is used to carry any type of date from the web server's

### TimeZoneConvertor
--> in this component we are going to have navbar,AddTimeZone Component and TimeZoneDisplay Component
--> in the nabar we are having two options share and ham option is used in mobile display (media query)
--> in this component we are having share link options to share the link and schedule meet(google calender) is used to schedule google calender
--> toggle-mode is used in order to toggle light or dark mode
--> we have used react-date-picker in order to check the timeline of the countries

### AddTimeZone
--> addTimeZone component is used to add time,date,reverse timezone and resume or pause option
--> function were send as props from the timezone convertor

### timeZoneDisplay
--> in this component we are using the to display the current time,date and delete button
--> delete button is used to delete the current time with the help of filter function

IN ORDER TO UNDERSTAND MORE FUNCTIONS CHECK THE CODE WHICH I COMMENTED EACH FUNCTION 

                        https://master--sharontimezone.netlify.app/
