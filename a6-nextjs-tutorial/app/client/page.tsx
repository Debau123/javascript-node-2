'use client'//el codigo lo ejecuta el cliente
import { useState, useEffect } from "react"


export default  function Page() {

    const [users, setUsers] = useState([])

    useEffect( () => {

        async function fetchUsers(){

        const data= await fetch('http://localhost:3001/api')
        const userdata =await data.json();
        setUsers(userdata);
        }
        fetchUsers()

    } , []);


     return (<>
    {
        users.map((user)=>{
            return <p key={user.name}>{user.name}</p>
        })
    }
  </>)}
