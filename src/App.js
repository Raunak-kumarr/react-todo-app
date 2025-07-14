import './App.css';
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/about";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);



    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

//   return (
//     <>
//       <Router>
//         <Header title="My Todos List" searchbar={true} /> {/*here i have pass the value from parent component to child component*/}

//       <Switch>

//           <Route exact path="/" render={() => {
//             return (
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <ToDos todos={todos} onDelete={onDelete} />  {/*here i have pass the value from parent component to child component parent component is this app.js and child component is the ToDos.js*/}
//               </>
//               )
//           }}>
//           </Route>

//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Switch>


//         <Footer />
//       </Router>
//     </>
//   );
// }

return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <ToDos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
