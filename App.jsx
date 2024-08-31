// import './App.css'
// import react from 'react';
// import React ,{useState} from 'react';
// // export default function App() {
// //   return (
// //     <div className="App">
// //       <h1>hello </h1>
// //       <h2> start</h2>
// //     </div>
// //   );
// // }

// const App=()=>{
//   const [users,setUsers]=useState([]);
//   const loadUsers=async()=>{
//     // console.log('before');
//     const response=await fetch('https://reqres.in/api/users?page=1');
//     const jsonResponse=await response.json();
//     setUsers(jsonResponse.data)
//   };
//   return(
//     <div className="App">
//       <h1>hello world</h1>
//       <button onClick={loadUsers}> Get Users</button>
//       <h2> Users:</h2>
//       {/* <ul>
//         {Array.isArray(users) && users.map(({id,first_name,last_name,email,avatar})=> (<li key={id}>Name: {first_name}{last_name}   Email: {email}    Avatar: {avatar}</li> */}
//           <ul>
//             {Array.isArray(users) && users.map(({ id, first_name, last_name, email, avatar }) => (
//               <li key={id}>
//                 <span>Name: {first_name} {last_name}</span> <br /> 
//                 <span>Email: {email}</span> <br /> 
//                 <span>Avatar: <img src={avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} /></span> 
//               </li>
//             ))}
//           </ul>
//                                                                          {/* ))}
        
//       </ul> */}
//     </div>
//   );
// };
// export default App;




// import './App.css'
// import react from 'react';
// import React ,{useState} from 'react';
// // export default function App() {
// //   return (
// //     <div className="App">
// //       <h1>hello </h1>
// //       <h2> start</h2>
// //     </div>
// //   );
// // }

// const App=()=>{
//   const [users,setUsers]=useState([]);
//   const loadUsers=async()=>{
//     // console.log('before');
//     const response=await fetch('https://reqres.in/api/users?page=1');
//     const jsonResponse=await response.json();
//     // console.log("jsonResponse:", jsonResponse);
//     setUsers(jsonResponse.data); 
//   }
//   return(
//     <div className="App">
//       <h1>hello world</h1>
//       <button onClick={loadUsers}> Get Users</button>
//       <h2> Users:</h2>
//       <ul>
        
//         {Array.isArray(users) && users.map(({id,login})=> (<li key={id}>Name: {login} </li>))}
//       </ul>
//     </div>
//   )
// }
// export default App;




// import './App.css';
// import React, { useState } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]);

//   const loadUsers = async () => {
//     const response = await fetch('https://reqres.in/api/users?page=1');
//     const jsonResponse = await response.json();
//     setUsers(jsonResponse.data);
//   };

//   return (
//     <div className="App">
//       {/* <h1>lets grow more</h1>
//       <button onClick={loadUsers}> Get Users</button>
//       <h2> Users:</h2> */}
//       <nav className="navbar">
//         <h1>lets grow more</h1>
//         <button onClick={loadUsers}> Get Users</button>
//       </nav>
//       <div className="user-cards">
//         {Array.isArray(users) &&
//           users.map(({ id, first_name, last_name, email, avatar }) => (
//             <div key={id} className="user-card">
//               <img src={avatar} alt="Avatar" className="user-avatar" />
//               <div className="user-info">
//                 <h3>{first_name} {last_name}</h3>
//                 <p>Email: {email}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default App;



import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>lets grow more</h1>
        <button onClick={loadUsers} className="load-button"> Get Users</button>
      </nav>
      <div className="content"> {   }
        {/* <h2> Users:</h2> */}
        <div className="user-cards">
          {Array.isArray(users) &&
            users.map(({ id, first_name, last_name, email, avatar }) => (
              <div key={id} className="user-card">
                <img src={avatar} alt="Avatar" className="user-avatar" />
                <div className="user-info">
                  <h3>{first_name} {last_name}</h3>
                  <p>Email: {email}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;