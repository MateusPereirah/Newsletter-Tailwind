import Input from "../Input/Input"

const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }

    return(
        <form onSubmit={safeSubmit} className="flex flex-col h-full items-center justify-center -mt-20 mx-5 gap-10">
            <Input type="text" required placeholder="Insira Seu nome"/>
            <Input type="email" required placeholder="Insira seu email"/>
            <button type="Submit" className="w-full max-w-sm py-1 px-5 bg-alura-100 rounded-full dark:bg-dark-200 text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">Enviar</button>
        </form>
    );
}

export default Form;