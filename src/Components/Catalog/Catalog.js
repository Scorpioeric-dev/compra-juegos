import React, { Component } from 'react'
import Hero from './Hero'
import Game from './Game'

export default class Catalog extends Component {
    constructor(){
        super()
        this.state ={

        }
    }
    render() {
        return (
            <div>
            <Hero/>
            <Game/>
                <h1>Catalog</h1>
            </div>
        )
    }
}