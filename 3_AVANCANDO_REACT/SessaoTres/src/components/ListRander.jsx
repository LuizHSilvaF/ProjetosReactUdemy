import { useState } from "react"

const ListRander = () => {
    const [list] = useState(["Mathues", "Pedro", "Josias", "Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Luiz", age: 19},
        {id: 2, name: "Joana", age: 17},
        {id: 3, name: "Mario", age: 11}
    ])
    
    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random()  * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRander