import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import { useParams } from 'react-router-dom';
import { rooms } from './RoomsFiles/Rooms';

function Room() {
    const [singleRoom, setSingleRoom] = useState(null)
    const {id} = useParams();

    useEffect(()=>{
        let singleRoomArr = rooms.filter(el=>el.id === Number(id));
        setSingleRoom(singleRoomArr[0]);
    }, [])

    let items =[];

    if(singleRoom){
        let i = 1;
        for (let key in singleRoom) {
            if(key === "pic"+i){
                items.push(key);
                i++;
            }
        }
    }
    
    if(singleRoom){
        return(
        <div className="single-room">

                <div className="single-room-img">
                    <Carousel>
                        {items.map((item, i)=> {
                            return <div key={i}> <img src={singleRoom[item]} alt="hotel pic" /> </div>}
                            )}
                    </Carousel>
                </div>

                <div className="single-room-txt">
                    <h1>{singleRoom.name}</h1>
                    <p>{singleRoom.desc}</p>
                    <p>Stars {singleRoom.stars}/5</p>
                    <p>Location: {singleRoom.location}</p>
                    <p>Food: {singleRoom.food?"included":"not included"}</p>
                     
                </div>
                
        </div>     
        );
    }
    else return null;
}

export default Room;