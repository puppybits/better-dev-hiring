import {getPeople} from 'data/starwars';
import Person from 'components/Person'
export default React.createClass({
  getInitialState(){
  	return{
  		persons: [],
  		filterText: ''
  	};
  },
  componentWillMount(){

  },
  render(){
  	return (
      <div className='app'>
        <h1>Person Search</h1>
        <input/>
        <div className="personsBox">

        </div>
      </div>
    );
  }
});
