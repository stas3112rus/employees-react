import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            term: ''
        }
    }

    onIn = (e)=>{
      
        const {onUpdateSearch} = this.props;
        
        this.setState({
            term: e.target.value
        });
        
        onUpdateSearch(e.target.value);

    }

  

    render(){
        return (
            <input 
            type="text" 
            className="form-control search-input"
            placeholder="Найти сотрудника"
            onChange={(e)=> this.onIn(e)}
            value={this.state.term}
            />
        );
    }
}



export default SearchPanel;