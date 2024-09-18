import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { navItem } from '../data/data'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'


export const Header = () => {

    const [menuState,setMenuState] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleMobileMenu = () => {
        setMenuState( prev => !prev )
    }


    return (
        <main className="bg-black montserrat">
            <section className='container flex justify-between items-center'>
                <img onClick={handleLogoClick} src ={Logo} alt='logo' className='w-40 sm:w-52 hover:cursor-pointer' />
                <nav className='sm:flex gap-3 hidden sm:gap-10 font-bold text-white'>
                    {navItem.map( (el) => (
                        <Link key={el.id} to={el.link} >{el.name}</Link> 
                    ) )}

                </nav>
                <div onClick={handleMobileMenu} className='block sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                {menuState && <MobileModal onClose = {handleMobileMenu} />}

            </section>
        </main>
    )
}

type MobileModalType = {
    onClose : () => void
}


const MobileModal = ({onClose} : MobileModalType) => {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return(
        <main className="fixed inset-0 bg-black backdrop-blur-sm flex flex-col gap-5 items-center justify-start">
            <button onClick = {onClose} className="text-white place-self-end m-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            </button>
            <nav className='flex flex-col gap-5 font-bold text-white text-2xl '>
            <Link to='/' >Home</Link>
            {navItem.map( (el) => (
                <Link key={el.id} to={el.link}>{el.name}</Link> 
            ) )}
            </nav>
        </main>
    )
}