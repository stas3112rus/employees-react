import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-fiter';
import EmployeersList from '../emploeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "John C", salary: 800, increase: true, rise: true, id:1},
                {name: "Alex M.", salary: 3000, increase: false, rise: false, id:2 },
                {name: "Carl W", salary: 15000, increase: false, rise: false, id:3},
                
             ],
             maxId: 3,
             term: "",
             filter: "all"
        }
    }

    deleteItem = (id) =>{
        this.setState(({data})=>{
           // const index = data.findIndex(elem=>elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];


            const newArr = data.filter(elem => elem.id !== id);
        

            return {
                data: newArr
            }

        })
    }

    addItem = (name, salary) =>{
       

        let newMaxId = this.state.maxId + 1;

        const newItem = {name: name, salary: salary, increase: false, rise: false, id: newMaxId};

        const newData = [...this.state.data, newItem];
        this.setState({
            data: newData,
            maxId: newMaxId
        })
    }

    countEmployees(){
        return this.state.data.length;
    }

    countRiseEmployees(){
        return this.state.data.filter(item=>item.increase).length; 
    }

    onToggleProp = (id, prop) =>{

        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    onToggleRise = (id) =>{
        console.log(`rise this ${id}`)
    }

    searchEmp = (items, term)=>{
        if(term.length === 0){
            return items;
        }

        return items.filter(item=> {
            return item.name.indexOf(term) > -1
        });
    }

    onUpdateSearch = (term) =>{
        
        this.setState({term})    
       
    }

    filterEmp = (items)=>{
        const {filter} = this.state
        if (filter === 'increase'){
            return items.filter(item =>{
                return item.increase
            })
        }

        if (filter === 'salaryMore1000'){
            return items.filter(item =>{
                return item.salary >= 1000;
            })
        }

        return items;
    }

    onUpdateFilter = (filterName) =>{
        this.setState({
            filter: filterName 
        })
    }

  
    render(){

        const {term, data} = this.state;
        let visibleData = this.searchEmp(data, term);
        visibleData = this.filterEmp(visibleData);    

        return(
            <div className="app">
                <AppInfo
                    count={this.countEmployees()}
                    countRise = {this.countRiseEmployees()} 
                />
            
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    
                    <AppFilter
                    onUpdateFilter ={this.onUpdateFilter}
                    />
                </div>
                <EmployeersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
               
                />
                <EmployeersAddForm 
                addItem={this.addItem}
                />
            </div>       
        );

       
    }

}



export default App;

