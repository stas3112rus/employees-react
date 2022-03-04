import './app-info.css';


const AppInfo = (props) =>{
    
    const {count, countRise} = props;
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в Компании N</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {countRise}</h2>
        </div>
    );
}

export default AppInfo;