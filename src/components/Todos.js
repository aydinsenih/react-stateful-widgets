// import React, {useState} from 'react';

// export default function Todos(){

//     const [todoList,setTodoList] = useState([]);
//     const [todo, settodo] = useState("");

//     const addTodo = () => {
//         setTodoList([...todoList,todo])
//         settodo("");
//     }

//     const changeInput = evt => {
//         const { value } = evt.target;
//         settodo(value);
//     };
    
//     const add = () => {
//         return (
//             {
//                 todoList.map(id =>
//                   <div
//                     id={id}
//                     key={id}
//                     className={`square${getClassName(id)}`}
//                     onClick={() => markActive(id)}
//                   >
//                   </div>
//                 )
//               }
//         )
//     }

//     return (
//         <div className='todo container'>
//             <ul id='output' >
//                 {add}
//             </ul>
//             <input id='todoInput' type='text' onChange={changeInput} value={todo}/>
//             <button id='todoInput' onClick={addTodo}>Add Todo</button>
//         </div>
//     )
// }