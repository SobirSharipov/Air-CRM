import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router' 
import logo from '../../../public/logo.svg'
import logo1 from '../../../public/logo1.svg'
import img2 from '../../assets/img2 (1).svg'
import img3 from '../../assets/img2 (2).svg'
import img4 from '../../assets/img2 (3).svg'
import img5 from '../../assets/img2 (4).svg'
import img6 from '../../assets/img2 (5).svg'
import img7 from '../../assets/img2 (6).svg'
import img9 from '../../assets/img2 (7).svg'

const Layout = () => {
    let [open, setOpen] = useState(true);
    const location = useLocation();  

    const getLinkClass = (path) =>
        `flex items-center px-[20px] mx-[10px] rounded-[8px] gap-[8px] 
          ${location.pathname === path ? 'bg-[#F5F7FA]' : ''} ${open?"py-[10px]":"py-[8.5px]"}`;

    return (
        <div className='flex '>
            <header className={`${open ? 'w-[18%] py-[20px]' : 'w-[80px] gap-[15px]'} h-screen transition-all duration-500 ease-in-out font-light flex flex-col gap-[10px]  bg-white`}>
                <div className='flex  pt-[10px]'>
                    {open ? <img draggable={false} src={logo} className="w-[150px]  px-[20px]" alt="React logo" /> : <img draggable={false} src={logo1} className="w-[25px] mx-[27px]" alt="React logo" />}
                </div>

                <Link to="/" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}} className={getLinkClass("/")}>
                    <img draggable={false} src={img6} alt="Image 1" />
                    {open && <p>Бронирование</p>}
                </Link>

                <Link to="/Calendar" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/Calendar")}>
                    <img draggable={false} src={img4} alt="Image 2" />
                    {open && <p>Календарь</p>}
                </Link>

                <Link to="/patients" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/patients")}>
                    <img draggable={false} src={img3} alt="Image 3" />
                    {open && <p>Пациенты</p>}
                </Link>

                <Link to="/numbers" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/numbers")}>
                    <img draggable={false} src={img7} alt="Image 4" />
                    {open && <p>Номера</p>}
                </Link>

                <Link to="/store" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/store")}>
                    <img draggable={false} src={img7} alt="Image 4" />
                    {open && <p>Склад</p>}
                </Link>

                <Link to="/services" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/services")}>
                    <img draggable={false} src={img9} alt="Image 5" />
                    {open && <p>Услуги</p>}
                </Link>

                <Link to="/finance" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/finance")}>
                    <img draggable={false} src={img9} alt="Image 5" />
                    {open && <p>Финансы</p>}
                </Link>

                <Link to="/companies" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/companies")}>
                    <img draggable={false} src={img5} alt="Image 5" />
                    {open && <p>Компании</p>}
                </Link>

                <Link to="/staff" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/staff")}>
                    <img draggable={false} src={img2} alt="Image 5" />
                    {open && <p>Сотрудники</p>}
                </Link>

                <Link to="/settings" style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className={getLinkClass("/settings")}>
                    <img draggable={false} src={img2} alt="Image 5" />
                    {open && <p>Настройки</p>}
                </Link>

                <button onClick={() => setOpen(!open)} className='flex items-center text-gray-700 p-[10px] px-[30px] rounded-[10px] gap-[20px] hover:bg-[#F5F7FA]'>
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    }
                    {open && <p>Свернуть</p>}
                </button>
            </header>

            <main className={`${open ? 'w-[82%]' : 'w-full'} bg-[#F5F7FA] pt-[30px] min-h-screen overflow-y-auto h-screen`}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
