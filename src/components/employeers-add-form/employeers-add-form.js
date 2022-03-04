
import {Component} from 'react';

// import './employeers-add-form.css';
import './employeers-add-form.scss'; // instal npm sass


class EmployeersAddForm extends Component {

    constructor(props){
        super (props);

        this.state = {
            name: '',
            salary: ''
        }

    }

    onValueChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render(){
        const {addItem} = this.props;
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}
                        />
                    <input type="number"
                        name="salary"
                        value={salary} // управляемый элемент, связь с state
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e)=>{
                                const {name, salary} = this.state;
                                
                                e.preventDefault();

                                if (name.length > 3  && salary > 0){
                                    addItem(name, salary);
                                    this.setState(
                                    {
                                        name: '',
                                        salary:''
                                    }
                                );
                                }                                
                            }}
                            >
                                Добавить
                    </button>
                </form>
            </div>
        )
    }
}



export default EmployeersAddForm;