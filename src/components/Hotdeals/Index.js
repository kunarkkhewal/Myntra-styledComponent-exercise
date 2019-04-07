import React,{Component} from 'react';
import images from '../../images.json';
import {Deal, Deals} from "./Hotdeals.SC";

class Hotdeals extends Component{

    render(){
        const dealImages = images["deals-card-images"]
        return (
            <Deals>
                {dealImages.map((deal,index)=>{
                    return <Deal key={index} image={deal.image}><span>{deal.message}</span></Deal>
                })}
            </Deals>
        )
    }
}

export default Hotdeals;