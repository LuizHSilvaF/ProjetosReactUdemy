import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    //controlando inputs


    // gerenciamento de dados
    const[name, setName] = useState(user ? user.name : '');
    const[email, setEmail] = useState(user ? user.email : '');
    const[bio, setBio] = useState('');

    const handleName = (e) =>{
        setName(e.target.value);
    }

    //console.log(name);
    //console.log(email);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio);
        
        //limpando formulário
        setName('');
        setEmail('');
        setBio('');
    }

    return (
    <div>
        {/*envio de formulário*/}
        {/*criação de form*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>
            {/*label envolvendo input*/}
            <label>
                <span>E-mail</span>
                {/*simplificação de manipulação de state*/}
                <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/*textarea*/}
            <label>
                <span>Bio:</span>
                <textarea name="" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm