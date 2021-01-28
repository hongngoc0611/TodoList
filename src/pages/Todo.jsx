import React, { Component } from 'react';
class Todo extends Component {
  
    
    constructor(props) {
            super(props);
            this.state = {  
                
            }    
        }
     renderItem = () => {
        return Object.keys(items).map((obj, i) => {
            return (
               <li>
                <div className="row">
                    <div className="col-md-10">
                    <input type="checkbox"/>
                    <label htmlFor="">{items[obj].name}</label>
                    </div>
                    <div className="col-md-2">
                        <span className="delete">×</span>
                    </div>
                </div>
               </li>
            )
        })
        
    }
   
    render() { 
     return ( 
       <div className="main">
                <h1>TodoList</h1>
                <form action="">
                    <input type="text" placeholder="new task" name="task"/>
                    <button type="submit">ADD</button>
                </form>
                <div className ="task">
                    <ul>
                        <li>
                            <button className="chooseAll">
                            <i className="fa fa-caret-down"></i>
                            </button>
                        </li>
                      {this.renderItem()}
                     </ul>

                    <div className="complete">
                    <button>Complete</button>
                    <button>Not Complete</button>
                    <button>Clear Complete</button>

                    </div>
                </div>
      </div>
      );
    }
}
 
const   items = {
    item1 : {
        id : 1,
        name: "hồng ngọc"
    }, 
    item2: {
        id : 2,
        name: "Thảo vân"
    },
    item3: {
        id : 3,
        name : "Minh anh "
    },
    item4: {
        id : 4,
        name : "Hồng ngọc"
    }

}


export default Todo;
