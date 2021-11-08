import React, { Component } from 'react';
import data from './Data'
export default class Details extends Component {

    
render(){
      let Id = this.props.match.params.id;
      console.log(this.props)
      let getData = data.cardData[Id -1]

      const { history } = this.props;
 
        return (
            <section className='py-4 py-lg-5 container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <img src={getData.img} style={{width:'800PX'}} className='text-center'/>
                    <h1>{getData.title}</h1>
                    <p>
                        {getData.desc}
                    </p>

                    <button onClick={()=>history.push('/')} className="btn btn-primary">Go home</button>

                </div>
            </div>
            </section>
        )
        }
}
