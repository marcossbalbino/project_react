import{ useState } from "react"
function Form(){
    
    function cadastrar(e){
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrar um Usuario')
        console.log(`Usuário: ${nome} , cadastrado com a senha: ${senha}`)
    }

        const[nome, setNome] = useState('')
        const[senha, setSenha] = useState('')

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                         type="text"
                         id= "nome"
                         name="nome"
                         placeholder="Digite seu nome"
                         value={nome}
                         onChange={(e)=> setNome(e.target.value)}
                          />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha" 
                        onChange={(e)=> setSenha(e.target.value)}
                        />  
                </div>

                <div>
                 <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form