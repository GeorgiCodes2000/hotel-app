import React, { Component } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { rooms } from './RoomsFiles/Rooms';

function Rooms() {

    const [hotelType, setHotelType] = useState(null);
    const [stars, setStars] = useState(null);
    const [pets, setPets] = useState(null);
   
    const roomOptions = [
        { value: 'sea', label: 'Sea' },
        { value: 'winter', label: 'Winter' },
        { value: 'mountain', label: 'Mountain' }
      ]

    const roomStarsOptions = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
    ]

    const petsOptions = [
        {value: true, label: 'yes'},
        {value: false, label: 'no'}
    ]

      function roomsShow() {
          
          if(hotelType && !stars && !pets){
            return(
            <div className="rooms-cards">
            {rooms.map(room=>{
                    if(room.type=== hotelType){
                            console.log(stars);
                        return(
                            <div className="room-card" key={room.id}>
                        <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                        <div className="room-card-text">
                            <h3>{room.name}</h3>
                            <h4>Location: {room.location}</h4>
                            <h4>Price: ${room.price}</h4>
                        </div>
                    </div>
                        );     
                    }
                            
                    })}
                </div>
                    )
            }

        if(hotelType && stars && !pets){
            return(
                <div className="rooms-cards">
                {rooms.map(room=>{
                        console.log(room);
                        if(room.type === hotelType && room.stars === stars){
                                console.log(stars);
                            return(
                                <div className="room-card" key={room.id}>
                                <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                            <div className="room-card-text">
                                <h3>{room.name}</h3>
                                <h4>Location: {room.location}</h4>
                                <h4>Price: ${room.price}</h4>
                            </div>
                        </div>
                            );     
                        }
                                
                        })}
                    </div>
                        )
        }

        if(stars && !hotelType && !pets){
            return(
                <div className="rooms-cards">
                {rooms.map(room=>{
                        if(room.stars === stars){
                                console.log(stars);
                            return(
                                <div className="room-card" key={room.id}>
                                <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                            <div className="room-card-text">
                                <h3>{room.name}</h3>
                                <h4>Location: {room.location}</h4>
                                <h4>Price: ${room.price}</h4>
                            </div>
                        </div>
                            );     
                        }
                                
                        })}
                    </div>
                        )
        }

        if(pets && !hotelType){
            return(
                <div className="rooms-cards">
                {rooms.map(room=>{
                        if(room.pets === pets){
                            return(
                                <div className="room-card" key={room.id}>
                                <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                            <div className="room-card-text">
                                <h3>{room.name}</h3>
                                <h4>Location: {room.location}</h4>
                                <h4>Price: ${room.price}</h4>
                            </div>
                        </div>
                            );     
                        }
                                
                        })}
                    </div>
                        )
        }

        if(hotelType && !stars && pets){
            return(
                <div className="rooms-cards">
                {rooms.map(room=>{
                        if(room.type === hotelType && room.pets === pets){
                            return(
                                <div className="room-card" key={room.id}>
                                <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                            <div className="room-card-text">
                                <h3>{room.name}</h3>
                                <h4>Location: {room.location}</h4>
                                <h4>Price: ${room.price}</h4>
                            </div>
                        </div>
                            );     
                        }
                                
                        })}
                    </div>
                        )
        }

        if(hotelType && stars && pets){
            return(
                <div className="rooms-cards">
                {rooms.map(room=>{
                        if(room.type === hotelType && room.pets === pets && room.stars === stars){
                            return(
                                <div className="room-card" key={room.id}>
                                <Link to={"room/" + room.id}><img src={room.pic1} alt={room.name}/></Link>
                            <div className="room-card-text">
                                <h3>{room.name}</h3>
                                <h4>Location: {room.location}</h4>
                                <h4>Price: ${room.price}</h4>
                            </div>
                        </div>
                            );     
                        }
                                
                        })}
                    </div>
                        )
        }

      }

    
        return(
            <div className="room-container">
    
                <div className="room-header">
                    <h1>Search Hotels</h1>
                    <div className="line"></div>
                </div>
    
                <div className="hotel-filters">
                    <div className="hotel-filter">
                        <div className="hotel-type">
                            <h3>Hotel Type</h3>
                            <Select options={roomOptions} onChange={(e)=>setHotelType(e.value)}/>
                        </div>
                    </div>
    
                    <div className="hotel-filter">
                        <div className="hotel-type">
                            <h3>Number of stars</h3>
                            <Select options={roomStarsOptions} onChange={(e)=>setStars(e.value)}/>
                        </div>
                    </div>
    
                    <div className="hotel-filter">
                        <div className="hotel-type">
                            <h3>Pets allowed</h3>
                            <Select options={petsOptions} onChange={(e)=>setPets(e.value)}/>
                        </div>
                    </div>
    
                    
                </div>
        
                {roomsShow()};
    
            </div>
        );
    
    
}

export default Rooms;