import React, { Component } from 'react';

class Iterative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                firstname: 'Juan',
                lastname: 'De la Cruz',
                age: 21
            },
            {
                firstname: 'Mark',
                lastname: 'Paul',
                age: 22
            },
            {
                firstname: 'Paul',
                lastname: 'Mark',
                age: 23
            }]

        }
    }
    render() {
        const { list, firstname } = this.state;
        return (
            <center>
                <div class="jumbotron">
                <h1>Iterative List</h1>
                <hr/>
                    {list.map(item => (
                        <h3 key={firstname}>FIRSTNAME : {item.firstname},&nbsp; LASTNAME : {item.lastname},&nbsp; AGE : {item.age}</h3>
                    ))}<br/><br/>
                </div>
            </center>
        )
    }
}
export default Iterative;