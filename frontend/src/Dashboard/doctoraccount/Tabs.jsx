
import {  useState } from 'react'

import {useContext, useRef} from 'react'

import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Tabs = ({ tab, setTab }) => {
    const { dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const menuRef = useRef(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)


    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen)
    // }

    // const toggleMenu = () => {
    //     if (menuRef.current) {
    //       menuRef.current.classList.toggle('show_menu');
    //     }
    //   };

//   return (
//     <div ref={menuRef} onClick={toggleMenu}>
//       <span className='lg:hidden '>
//         <BiMenu className='w-6 h-6 cursor-pointer'  onClick={toggleMenu}/>
//     </span>
//     <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center
//      h-max rounded-md'>
//         <button 
//         onClick={() => setTab('overview')}
//         className={`${
//             tab === 'overview'
//              ? 'bg-indigo-100 text-white' 
//              : 'bg-transparent text-headingColor'}
//              w-full bg-primaryColor py-[15px] px-[35px] rounded-md  font-[600] mt-0`}>
//             Overview
//         </button>
//         <button 
//         onClick={() => setTab('appointment')}
//         className={`${
//             tab === 'appointment'
//              ? 'bg-indigo-100 text-white' 
//              : 'bg-transparent text-headingColor'}
// w-full bg-primaryColor py-[15px] px-[35px] rounded-md  font-[600] mt-0`}>
//             Appointment
//         </button>
//         <button 
//         onClick={() => setTab('settings')}
//         className={`${
//             tab === 'settings'
//              ? 'bg-indigo-100 text-white' 
//              : 'bg-transparent text-headingColor'}
//              w-full bg-primaryColor py-[15px] px-[35px] rounded-md font-[600] mt-0`}>
//             Profile
//         </button>


    return (
        <div>
            <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer' onClick={toggleSidebar} />
            </span>
            {  (
                <div className='lg:hidden flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
                    <button
                        onClick={() => setTab('overview')}
                        className={`${tab === 'overview'
                            ? 'bg-indigo-100 text-white'
                            : 'bg-transparent text-headingColor'}
                            w-full bg-primaryColor py-[15px] px-[35px] rounded-md font-[600] mt-0`}>
                        Overview
                    </button>
                    <button
                        onClick={() => setTab('appointment')}
                        className={`${tab === 'appointment'
                            ? 'bg-indigo-100 text-white' 
                            : 'bg-transparent text-headingColor'}
                            w-full bg-primaryColor py-[15px] px-[35px] rounded-md font-[600] mt-0`}>
                        Appointment
                    </button>
                    <button
                        onClick={() => setTab('settings')}
                        className={`${tab === 'settings'
                            ? 'bg-indigo-100 text-white'
                            : 'bg-transparent text-headingColor'}
                            w-full bg-primaryColor py-[15px] px-[35px] rounded-md font-[600] mt-0`}>
                        Profile
                    </button>
                    <div className='mt-[100px] w-full'>
                        <button
                            onClick={handleLogout}
                            className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                            Logout
                        </button>
                        <button
                            className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                            Delete account
                        </button>
                    </div>
                </div>
            )}
            <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
                {/* Rest of the code remains unchanged */}
            </div>
        </div>
    )
}

export default Tabs