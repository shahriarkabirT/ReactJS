import styles from './List.module.css'
function List(props){
    //                     //array of objects
    // const fruits = [{id:1 , name:"apple", calories: 95},
    //                 {id:2 , name:"orange", calories: 45},
    //                 {id:3 , name:"banana", calories: 105},
    //                 {id:4 , name:"coconut", calories: 159},
    //                 {id:5 , name:"pineapple", calories: 37}];

                        //sorting

    // fruits.sort();
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabatical Order 
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical Order
    // fruits.sort((a,b) => a.calories - b.calories); //Numaric 
    // fruits.sort((a,b) => b.calories - a.calories); //Reverse Numaric

                       //filtering

    // const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalfruits = fruits.filter(fruit => fruit.calories >= 100);

    const itemList = props.items;
    const categories = props.categories;
    const listItems = itemList.map(itemList => <li key={itemList.id}> {itemList.name} : {itemList.calories}</li>);
    
    
   
    return (<>
        <p className={styles.titles}>{categories}:</p>
        <ol className="listName">{listItems}</ol>
    </>);
}


export default List;
