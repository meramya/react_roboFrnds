import React, { Component } from 'react';
import Card from './Card';

const AllCards = ({ robotsw }) => {

    
        
        const robotsList = robotsw.map(e=>{ 
            return <Card uname={e['username']} name={e['name']}></Card>
         });
        return (
            <div>
                {robotsList}
            </div>
        );
    
}

export default AllCards;