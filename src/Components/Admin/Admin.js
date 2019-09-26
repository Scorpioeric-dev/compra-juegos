import React, { Component } from 'react'
import AddForm from './AddForm'
import List from './List'

export default class Admin extends Component {
    constructor(){
        super()
        this.state ={

        }
    }
    render() {
        return (
            <div>
            <List/>
            <AddForm/>
            <List/>
                <h1>Admin</h1>
            </div>
        )
    }
}