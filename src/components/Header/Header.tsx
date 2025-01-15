import { MoonIcon, SunIcon } from 'lucide-react';

interface Props {
    toggle?: boolean;
    handleToggleTheme?: () => void;
}

function Header(props: Props) {
    const { toggle, handleToggleTheme } = props;
    return (
        <div className={`flex justify-between p-4 ${toggle ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gray-900 text-white' }`}>
            <h1 className='text-2xl font-extrabold'>Amit Thakur</h1>
            <button onClick={handleToggleTheme}>
                {toggle ? <SunIcon/> : <MoonIcon />}
            </button>
        </div>
    )
}

export default Header;