import React,{Component} from "react"
import { Button } from "react-bootstrap"




class Todo extends Component{
    state={
        userInput:"",
        list:[]
    }


    handleChange = e=>{
        this.setState({
            userInput : e.target.value
        })
    }

    addTodo = e=>{
        e.preventDefault()
        if(this.state.userInput){
            this.setState({
list : [...this.state.list, {todo:this.state.userInput, isComplete:false}],
userInput:""
            })
        }else{
            return alert ("enter todo ")
        }
        
    }

    handleComplete= (index)=>{
        this.setState({
            list: [...this.state.list.map((el,i)=>(index===i )?{...el, isComplete : !el.isComplete}: el)]
        })
    }

    handleDelete = (index)=>{
        this.setState({
            list: [...this.state.list.filter((el,i)=>index!==i)]
        })
    }




render(){
    return(
        <div className="container">
        <h1 align="center">To Do App</h1>
        <form className="form-row align-items-center" onSubmit={this.addTodo}>
          <input
            className="input"
            value={this.state.userInput}
            onChange={this.handleChange}
            className="form-control nb-2"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
        <ul>
            {this.state.list.map((item,i)=>(
<li key={i}>
<p style={{textDecoration : item.isComplete ? "line-through":""}}>{item.todo}</p>
            <Button variant="success" onClick={()=>this.handleComplete(i)}>{item.isComplete ? "undo": "complete"}</Button>
            
<Button variant="danger" onClick={()=>this.handleDelete(i)}>delete</Button>
</li>

            )
            

            )}
            
        </ul>
        </div>
    )
}
}


export default Todo