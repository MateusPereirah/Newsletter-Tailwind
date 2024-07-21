const Input  = props => {
    return(
        <input className="w-full max-w-lg py-1 pl-5 rounded-full outline-none dark:bg-dark-200 dark:text-gray-200 placeholder:uppercase placeholder:font-bold placeholder:text-gray-400 placeholder:text-xs dark:placeholder:text-gray-600
        focus:border-2 focus:border-alura-100
        dark:focus:border-alura-100
        invalid:focus:border-2 invalid:focus:border-red-400
        invalid:focus:dark:border-2 invalid:focus:dark:border-red-400" {...props}/>
    );
}

export default Input;