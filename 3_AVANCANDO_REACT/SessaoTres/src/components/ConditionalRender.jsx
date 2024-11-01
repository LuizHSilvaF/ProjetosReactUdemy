import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Luiz");

    return (
    <div>
        <h1>Isso será exibido?</h1>    
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>Meu nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clique aqui!</button>
    </div>
  )
};

export default ConditionalRender