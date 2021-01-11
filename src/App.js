
import './App.css';
import { Component } from 'react';
import { CardList} from "./components/card-list/card-list.component";
import { SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      search:""
    }
    //Tenemos que usar esto si lo hacemos de la manera viejita  manera viejita en la linea 25
    //this.handleChange=this.handleChange.bind(this);
  } 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
      console.log(users)
      this.setState({monsters:users})
    })
  }
  /*
  handleChange(e){
    this.setState({search:e.target.value})
  }*/
  //Manera nueva con arrow function 
  handleChange=(e)=>{
    this.setState({search:e.target.value})
  }

  render() {
    const { search ,monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' 
        handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
