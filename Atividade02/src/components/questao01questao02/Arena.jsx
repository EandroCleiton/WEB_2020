import React from 'react'
import { DM_IMG, DBE_IMG } from '../../Constants'

const Hero = props => 
    <div>
        <h3>{props.name}</h3>
        <img src={props.img} width="480px"/>
        {props.arena}
    </div>



const Enemy = props => 
    <div>
        <h3>{props.name}</h3>
        <img src={props.img} width="480px"/>
        {props.arena}
    </div>


const Arena = props => 
    <div className="card">
        <Hero name = "Mago Negro" img = {DM_IMG}/>
        <Enemy name = "Dragão Branco de Olhos Azuis" img = {DBE_IMG}/>
    </div>


export default Arena;