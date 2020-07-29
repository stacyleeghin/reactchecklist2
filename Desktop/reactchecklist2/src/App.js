import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)  

    this.state = {
      tasks:[
        {
          id:1,
          text:'milk'
        }
      ],
      taskInputValue:''
    }
  }

  handleTaskInputChange = (e) => {
    this.setState({taskInputValue: e.target.value})
  }

  handleTaskAdd = (e) => {
    var task = {
      id:Date.now(),
      text:this.state.taskInputValue
    }
    var newTasks = [task, ...this.state.tasks]
    this.setState({
      tasks:newTasks,
      taskInputValue:''
    })
  }

  handleTaskDelete = (e) => {
    var taskIdToDelete = parseInt(e.target.id)
    var tasks = this.state.tasks

    var filterListTask = tasks.filter((item)=>{
      return  item.id != taskIdToDelete
    })
    this.setState({tasks:filterListTask})
     
  }
  

  render(){
    return (
      <div className="wrap">
        <div className="section1">
            <div className="hero">
                <h1>Shopping List</h1>
                <h3>Friday July 27th 2020</h3>
            </div>
        </div>
        <div className="section2">
            <div className="container1">
                <div className="form-group">
                    <input type="text" id="nameInput" name="name" placeholder="1. enter items" value={this.state.taskInputValue} onChange={this.handleTaskInputChange}/>
                    <button className="btn" type="submit"><i className="fas fa-plus" onClick={this.handleTaskAdd}></i></button>
                </div>
              {this.state.tasks.map((task) => {
                return (
                  <div className="tasks">
                      <div className="task" key={task.id}>
                          <div className="input-group">
                              <input type="checkbox" id={task.id}/>
                              <label htmlFor={task.id}>{task.text}</label>
                          </div>
                          <button className="btn" id={task.id} onClick={this.handleTaskDelete}>delete</button>
                      </div>
                  </div>
                  )
                })  
              }
            
            </div>
        </div>
      </div>
    )
  } 
}

export default App;
