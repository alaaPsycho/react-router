import React, { Component } from 'react'
import Card from './Card';
import data from './Data';

 


export default class Blog extends Component {
        render() {
        return (
           <section className='py-4 py-lg-5 container'>
               <div className='row justify-content-center'>
                {data.cardData.map((item,index)=>{
                    return(
                        <Card key={index} img={item.img} title={item.title}  link={`/Details/${item.id}`}/>
                    )
                })}
                  
               </div>
           </section>
        )
    }
}
