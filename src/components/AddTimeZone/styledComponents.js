import style from 'styled-components'

export const Select = style.select`
@media screen and (min-width:1024px){
    padding:10px;
    border-radius:12px;
    width:300px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;  
}
@media screen and (max-width:1023px){
    padding:8px;
    border-radius:8px;
    width:150px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;
}
@media screen and (max-width:767px){
    padding:5px;
    border-radius:8px;
    width:150px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;
}
@media screen and (max-width:575px){
    padding:3px;
    border-radius:8px;
    width:150px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;
}
@media screen and (max-width:375px){
    padding:2px;
    border-radius:8px;
    width:150px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;
}
@media screen and (max-width:320px){
    padding:2px;
    border-radius:8px;
    width:100px;
    margin-right:10px;
    cursor:pointer;
    margin-left:20px;
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
    text-align:center;
    font-weight:bold;
    margin-right:8px;
    margin-bottom:10px;
    margin-top:10px;
    align-self:center;
}
`
export const Option = style.option`
`
export const AddTime = style.div`
`