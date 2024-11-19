import { useState } from 'react';


const Receipes = () => {
    const [ inputValue, setInputValue ] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <section id="receipes"
               >
        <div>
            <p>Receipes</p>
            <form className="grid grid-cols-2 gap-4">
             <h1>Name of receipe:
                <input  type="text" 
                        value={inputValue}
                        onChange={handleChange} />
            </h1> 
        <br></br>
            <h1>
                Ingredients:
                <input type="text" />
                </h1> 

            
            </form>
        <br></br>
        <button type="submit" className="rounded text-white bg-transparent hover:bg-black border p-2 ml-10">Submit</button>
        <br></br>
        <div>
            Receipe: {inputValue}
        </div>

        </div>
        </section>
    );
}

export default Receipes;