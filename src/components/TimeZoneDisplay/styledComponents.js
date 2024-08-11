import style from 'styled-components'

export const List = style.li`
@media screen and (min-width:1024px){
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    background-color:#ffffff;
    border-radius:12px;
    width:900px;
    height:100px;
}
@media screen and (max-width:1023px){
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#ffffff;
    border-radius:12px;
    width:600px;
    height:200px;
    overflow-y:scroll;
}
@media screen and (max-width:767px){
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#ffffff;
    border-radius:12px;
    width:575px;
    height:200px;
    overflow-y:scroll;
}
@media screen and (max-width:575px){
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#ffffff;
    border-radius:12px;
    width:360px;
    height:180px;
    overflow-y:scroll;
}
@media screen and (max-width:375px){
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#ffffff;
    border-radius:12px;
    width:300px;
    height:150px;
    overflow-y:scroll;
}
`
export const DeleteButton = style.button`
@media screen and (min-width:1024px){
    background-color:#e31239;
    border:none;
    width:150px;
    font-family:Roboto;
    color:#ffffff;
    padding:10px;
    border-radius:12px;
    font-size:14px;
    cursor:pointer;
    margin-left:10px;
}
@media screen and (max-width:1023px){
    background-color:#e31239;
    border:none;
    width:120px;
    font-family:Roboto;
    color:#ffffff;
    padding:6px;
    border-radius:12px;
    font-size:15px;
    cursor:pointer;
    margin-left:10px;
}
@media screen and (max-width:375px){
    background-color:#e31239;
    border:none;
    width:100px;
    font-family:Roboto;
    color:#ffffff;
    padding:5px;
    border-radius:12px;
    font-size:14px;
    cursor:pointer;
    margin-left:10px;
}

`
export const Time = style.p`
@media screen and (min-width:1024px){
    font-family:Roboto;
    font-size:18px;
    font-weight:bold;
    text-align:center;
}
@media screen and (max-width:1023px){
    font-family:Roboto;
    font-size:16px;
    font-weight:bold;
    text-align:center;
}
@media screen and (max-width:575px){
    font-family:Roboto;
    font-size:14px;
    font-weight:bold;
    text-align:center;
}
@media screen and (max-width:375px){
    font-family:Roboto;
    font-size:12px;
    font-weight:bold;
    text-align:center;
}
`