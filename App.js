import React, { useState,useEffect } from "react"; 
import './App.css';
import Form from "./components/Form"; 
import TodoList from "./components/TodoList";
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]); 

//Run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  //functions
  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } 
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  return (
    <Router>
      <div className="App">
        <header>
          <h1>Technologies</h1>
        </header>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>   
        <Form
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          setTodos={setTodos}   
          todos={todos}
          filteredTodos={filteredTodos} 
        />   
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);


export default App;
