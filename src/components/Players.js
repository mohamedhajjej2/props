import React from 'react'
import Playerlist from './Playerlist'

function Players() {
    const players =[{
        name :"Brandon Ingram",
        team :" team : New Orleans Pelicans",
        nationality :"nationality :  États-Unis",
        jerseyNumber :"jerseyNumber :  14",
        age :"age : 26",
        Image :"https://www.si.com/.image/t_share/MTk2MzU1ODMyMjcwMDM4Njc0/usatsi_20163510_168388561_lowres.jpg"

    },{
        name :"Franz Wagne",
        team :"team : Orlando Magic",
        nationality :"nationality :  Allemagne",
        jerseyNumber :"jerseyNumber 3",
        age :"age : 22",
        Image :"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2023-08-09_Deutschland_gegen_Kanada_%28Basketball-L%C3%A4nderspiel%29_by_Sandro_Halank%E2%80%93138.jpg/800px-2023-08-09_Deutschland_gegen_Kanada_%28Basketball-L%C3%A4nderspiel%29_by_Sandro_Halank%E2%80%93138.jpg"

    },{
        name :"Zachary Thomas LaVine",
        team :"team :  Chicago Bulls",
        nationality :"nationality :  États-Unis",
        jerseyNumber :"jerseyNumber : 8",
        age :"age : 28",
        Image :"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Zach_LaVine_%282022_All-Star_Weekend%29.jpg/800px-Zach_LaVine_%282022_All-Star_Weekend%29.jpg"

    },{
        name :"Mikal Bridges",
        team :"team : Brooklyn Nets",
        nationality :"nationality : États-Unis",
        jerseyNumber :"jerseyNumber : 14",
        age :" age : 27",
        Image :"https://gray-wwsb-prod.cdn.arcpublishing.com/resizer/C8FSfjkLVvsn4rDDHDTJcBQHOt4=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/DBWR4PRKNJMH7AJMNKD55TULYY.jpg"

    }
] 

  return (
    
    <div>
      
<Playerlist players={players}/>
    </div>
  )
}

export default Players