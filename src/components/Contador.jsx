import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0) //useState e uma função para atualizar 

    function incrementa() {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>{contador}</h1>
            <button onClick={incrementa}>Conta +1</button>
        </>
    )
}

export default Contador
