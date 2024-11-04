import { useState } from "react";

const ManageData = () => {
    const [someData, setSomeData] = useState(10);

    const [number, setNumber] = useState(15);

    const [usuario, setUsuario] = useState({nome: 'Luiz', idade: 19});

    return (
    <div>
        <div>
        <p>Valor: {someData}</p>
        <button onClick={() => setSomeData(15)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar Valor</button>
        </div>
        <div>
            <p>Nome: {usuario.nome}</p>
            <button onClick={() => {
                setUsuario({...usuario, nome: 'Luiza'})
            }}>Muda Nome</button>
        </div>
    </div>
    )
}

export default ManageData