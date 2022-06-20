import React, { Component } from 'react';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reaing', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3,name: 'Coding', count: 0 },
        ],
    }
    
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit}/>
                ))}
            </ul>
        );
    }
}

export default Habits;