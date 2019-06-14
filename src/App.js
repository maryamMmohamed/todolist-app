import React , {Component} from 'react';
import TodoItems from './components/TodoItems/todoItems';
import AddItem from './components/AddItem/addItem';
// import logo from './logo.svg';
// import './App.css';
// import Items from './components/items';
// import Nav from './components/Nav';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Blog from './components/blog';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Nav />
//         <Route exact path='/' component= {Home}/>
//         <Route path='/about' component= {About}/>
//         <Route path='/blog' component= {Blog}/>
//         <Items />
//       </div>
//     </BrowserRouter>

//   );
// }

class App extends Component {

  state= {
    items: [
      {id:1,name:'hamza',age:22},
      {id:2,name:'hamza2',age:23},
      {id:3,name:'hamza3',age:24}
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items: items})
  }

  addItem = (item) => {
    item.id = Math.random(); // 3shan a7l moshkla error key
    let items = this.state.items;
    items.push(item);
    this.setState({items: items}); // this.setState({items}); aw btktb keda tlama key = value
  }

  render(){
    return(
      <div className="App">
        todo list App
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }

}

export default App;
