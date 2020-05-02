import React, {Component} from 'react';

export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    
    onChangeUserName(event){
        this.setState({
            username: event.target.value
        });
    }

    onChangeDescription(event){
        this.setState({
            description: event.target.value
        });
    }

    onChangeDuration(event){
        this.setState({
            duration: event.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
        window.location = '/';
    }

    render(){
        return(
            <div>
                <p>Create Exercises Component</p>
            </div>
        )
    }
}