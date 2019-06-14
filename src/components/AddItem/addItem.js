import React , {Component} from 'react';
import './addItem.css';

class AddItem extends Component{

    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value  // [e.target.id] k2enha name: e.target.value w age: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(e.target.name.value === '' && e.target.age.value === ''){
            return false; // lw input fadya w ados 3la button mt3mlsh 7aga
        } else {
            this.props.addItem(this.state);
            this.setState({ // 3shan afdy inputs b3d ma ados enter
                name: '',
                age: ''
            })
        }

    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type='text' placeholder='enter name' id='name' onChange={this.handleChange} value={this.state.name}/>
                   <input type='number' placeholder='enter age' id='age' onChange={this.handleChange} value={this.state.age}/>
                   <input type='submit' value='Add'/>
               </form>
            </div>
        )
    }
}

export default AddItem;