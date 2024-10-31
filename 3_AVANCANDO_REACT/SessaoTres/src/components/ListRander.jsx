import { useState } from "react"

const ListRander = () => {
    const [list] = useState(["Mathues", "Pedro", "Josias", "Maria"]);

    const [users] = useState([
        {id: 1, name: "Luiz", age: 19},
        {id: 2, name: "Joana", age: 17}
    ])
    
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
    </div>
  )
}

export default ListRander