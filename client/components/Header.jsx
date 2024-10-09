import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="text-white bg-black">
                <h1 className=" text-center p-9">Info Pod</h1>

        <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/Receipe">Receipe</Link>
         </div>

            </div>
        </header>
    );
};

export default Header;