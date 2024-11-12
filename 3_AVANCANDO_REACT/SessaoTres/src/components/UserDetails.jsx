const UserDetails = ({nome, age, profissao}) => {
    
    return (
    <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {profissao}</p>
        {age >= 18 ? (
            <p>Você pode tirar a carta de habilitação</p>
        ):(
            <p>Menor de idade</p>
        )}
        
    </div>
  )
}

export default UserDetails