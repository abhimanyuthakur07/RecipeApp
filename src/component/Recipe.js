import React,{Component} from 'react'; 
import {Link} from 'react-router-dom';

const API_KEY = "255da313fa6510786454f9d97e635bff";

class Recipe extends Component{

	state = {

		activeRecipe : []
	}

componentDidMount = async() => {
console.log('this.props.location');
console.log(this.props.location);
	const title = this.props.location.state1.recipe;//confusion

    
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}
      `);
    //const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=
      //`);
    

    const res = await req.json();
    this.setState({activeRecipe:res.recipes[0]});
    console.log(this.state.activeRecipe);
}

render(){

    const recipe = this.state.activeRecipe;

//console.log(this.props);
return (

      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );

}


	



} 

export default Recipe;