import style from 'styled-components'

export const Background = style.div`
    background-color:${props=>props.color?"#000000":"#f5f3ed"};
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin:0px;
    width:100%;
`
export const Heading = style.h1`
@media screen and (min-width:768px){
    font-family:Roboto;
}
@media screen and (max-width:767px){
    font-size:14px;
}
@media screen and (max-width:575px){
    font-size:14px;
}
@media screen and (max-width:375px){
    font-size:12px;
}
`
export const Unlist = style.ul`
    padding:0px;
    overflow-y:scroll;
`
export const NavBar = style.nav`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    min-height:10vh;
    min-width:100%;
    background-color:${props=>props.color?"#474647":"#ffffff"};
    color:${props=>props.color?"#ffffff":"#131414"};
`
export const Rows = style.div`
@media screen and (min-width:1280px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:20px;
}
@media screen and (max-width:1279px){
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
    margin-top:10px;
    padding:12px;  
}
`
export const NavRows = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
export const Mode = style.button`
    border:none;
    background-color:transparent;
    cursor:pointer;
    color:${props=>props.color?"#ffffff":"#131414"};
    margin-left:10px;
    margin-right:10px;
`
export const Ham = style.button`
@media screen and (min-width:768px){
    display:none;
}
@media screen and (max-width:767px){
    border:none;
    background-color:transparent;
    cursor:pointer;
    color:${props=>props.color?"#ffffff":"#131414"};
    margin-left:10px;
    margin-right:20px;
}

`
export const Button = style.button`
@media screen and (min-width:1280px){
    padding:10px;
    border:none;
    cursor:pointer;
    border-radius:12px;
    background-color:${props=>props.color};
    width:180px;
    color:#ffffff;
    font-family:Roboto;
    font-size:15px;
    text-align:center;
    font-weight:bold;
    margin-right:12px;
}
@media screen and (max-width:1279px){
    padding:6px;
    border:none;
    cursor:pointer;
    border-radius:12px;
    background-color:${props=>props.color};
    width:130px;
    color:#ffffff;
    font-family:Roboto;
    font-size:12px;
    font-weight:bold;
    margin-right:8px;
    margin-bottom:10px;
    margin-top:10px;
    align-self:center;
}
`
export const ExtraButtons = style.button`
@media screen and (min-width:768px){
    width:200px;
    background-color:#4085f5;
    border:none;
    padding:10px;
    border-radius:12px;
    margin-right:10px;
    margin-left:20px;
    cursor:pointer;
    color:#ffffff;
    font-weight:bold;
}
@media screen and (max-width:767px){
    display:none;
}
`
export const Image = style.img`
height:50px;
width:50px;
margin-left:10px;
`
export const HamList = style.div`
@media screen and (min-width:768px){
    display:none;
}
@media screen and (max-width:767px){
    background-color:#ffffff;
    height:100px;
    width:200px;
    align-self:flex-end;
    align-content:flex-start;
    border-bottom-left-radius:10px;
}
`
export const SmallButton = style.button`
background-color:transparent;
border:none;
margin-top:20px;
margin-bottom:10px;
`
