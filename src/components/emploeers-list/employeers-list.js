import EmployerslistItem from "../employers-list-item/employers-list-item";

import './emploeers-list.css';

const EmployeersList = ({data, onDelete, onToggleProp})=>{
    
    const elements = data.map(item=>{
        
        const {id, ...itemProps} = item;
        return (
            <EmployerslistItem 
            key={id} 
            {...itemProps}
            onDelete = {()=>  onDelete(id)}
            onToggleIncrease={()=>onToggleProp(id, 'increase')}
            onToggleRise={()=>onToggleProp(id, 'rise')}
            />
        )
    });


    
    return (
        <ul className="app-list list-group">
            {elements}          
        </ul>
    );
};

export default EmployeersList;