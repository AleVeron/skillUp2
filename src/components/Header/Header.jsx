import { useNavigate } from 'react-router-dom'
import './header.css'

export default function Header (){

    const navigate = useNavigate()

    const handleLogOut = () =>{
        localStorage.removeItem("logged")
        navigate("/login")
    }

    return(
        <header className='d-flex justify-content-between'>
            <img src='https://www.alkemy.org/logo512.png'/>
            <div onClick={handleLogOut}>X</div>
        </header>
    )
}