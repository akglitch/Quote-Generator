import React, { Component } from 'react'
import {data} from './quoteData'

 class Quotegen extends Component {
     constructor() {
         super () 
         this.state={
         }
     }
    render() {
      
  
        return (
            <div>
            {data.map((item,index) => {
             return (
                 <ul>
                 <li key={index} >
                   <h1>{item.quote}</h1> 
                   <h2>{item.author}</h2> 
                 </li>
                 </ul>
             ) ;  
            })}
            </div>
        )
    }
}
export default Quotegen