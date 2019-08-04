import React ,{Component} from 'react';
import Form from './component/Form';
import Recipes from './component/Recipes';
//import Recipe from './component/Recipe';





import './App.css';

const API_KEY = "255da313fa6510786454f9d97e635bff";

class App extends Component{

  state = {

    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;//confusion
//console.log('recipeName');
//console.log(recipeName);
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}
      `);
    

    const data = await api_call.json();
    this.setState({recipes:data.recipes});
    console.log('this.state.recipes');
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

render(){

  return(

    <div className = "App">
    <header className = "App-header"></header>
    <h1 className = "App-title">Recipe Search</h1>
    <Form getRecipe= {this.getRecipe} />
    <Recipes  recipes = {this.state.recipes}/>
    

    </div>


  );  
}

}



export default App;
