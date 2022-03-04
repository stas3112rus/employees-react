import './app-filter.css';
import { Component } from 'react';

const filterDefault = ()=> {
    return({
        all: true,
        increase: false,
        salaryMore1000: false  
    })

}

class AppFilter extends Component {

    constructor(props){
        super(props);

        this.state = filterDefault();

    }



    onFilter = (e)=>{ 

        e.preventDefault(); 
        
        const value = e.target.dataset.position;
        
        this.setState(filterDefault());
        
        if (value !== 'all'){
            this.setState({
                all: false,          
                [value]: true
            }); 
        }
        
        this.props.onUpdateFilter(value);
    }



    render(){

        const {all, increase, salaryMore1000} = this.state;

        const madeActiveBtn = (state)=>{
            if (state){
                return "btn btn-light";
            }

            return "btn btn-outline-light";
        }

        return(
        <div className="btn-group">
            <button data-position="all" className={madeActiveBtn(all)}
            type="button"
            onClick={this.onFilter}
            >
               Все сотрудники 
            </button>
            <button data-position="increase" className={madeActiveBtn(increase)}
            type="button"
                onClick ={this.onFilter}
            >
               На повышение 
            </button>
            <button 
                data-position="salaryMore1000" 
                className={madeActiveBtn(salaryMore1000)}
                onClick ={this.onFilter}
            type="button"
            >
               З/П болше $1000
            </button>
        </div>
        )
    }
}

export default AppFilter;