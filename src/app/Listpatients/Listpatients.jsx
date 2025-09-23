import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import img2 from '../../assets/img1 (13).png'
import Filterpatients from '../../component/Filterpatients'
import { Link } from 'react-router'
import Profile from '../../component/profile'

const Listpatients = () => {
    return (
        <div>

            <div className='flex gap-[10px] font-light items-center px-[20px] py-[7px] text-gray-500 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <p className='text-black'>Главная</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p>Список Пациентов</p>
            </div>

            <div className='flex justify-between items-center mx-[20px]'>
                <p className='font-bold text-[36px]'>Список Пациентов</p>
                <div className='flex font-light gap-[10px]'>
                    <Link to={'/Newentry'}>
                    <button className='bg-[#005456] cursor-pointer text-white p-[5px] px-[10px] rounded'>+ Новая запись</button>
                    </Link>
                    <button className='bg-white text-[#005456] cursor-pointer p-[5px] px-[10px] rounded border border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                  <Profile bgcolor={"white"} color={"#005456"}/>
                </div>
            </div>

            <div className='bg-white m-[20px] rounded-2xl p-[20px]'>

                <div className='flex font-light justify-between items-center py-[20px]'>
                    <div className='flex items-center gap-[10px] px-[10px] border border-gray-400 w-[30%] rounded-[10px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
                    </div>

                    <div className='flex justify-end items-center w-[60%] gap-[10px]'>
                        <div className='flex gap-[10px] cursor-pointer bg-[#F5F7FA] hover:bg-[#dfe0e2] p-[10px]  rounded text-[13px]'>
                            <img src={img2} alt="" />
                            <button>Импорт базы</button>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer bg-[#F5F7FA] hover:bg-[#dfe0e2] p-[10px]  rounded text-[13px]'>
                            <img src={img2} alt="" />
                            <button>Получить шаблон</button>
                        </div>
                        <div className='flex gap-[10px] cursor-pointer bg-[#F5F7FA] hover:bg-[#dfe0e2] p-[10px]  rounded text-[13px]'>
                            <img src={img2} alt="" />
                            <button>Экспорт</button>
                        </div>
                        <Filterpatients/>
                    </div>
                </div>
            
                <table className='w-[100%] text-left text-[13px] my-[20px]'>
                    <thead>
                        <tr  style={{fontFamily:"Gilroy"}} className=' text-gray-600 bg-[#F5F7FA]'>
                            <td className='p-[15px] rounded-l-2xl'>№</td>
                            <td>ФИО</td>
                            <td>Номер телефона</td>
                            <td>Дата рождения</td>
                            <td>Сумма</td>
                            <td>Обращений</td>
                            <td>Баллы</td>
                            <td>Источник</td>
                            <td>Статус</td>
                            <td className='rounded-r-2xl'>Действие</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>
                                <button className='bg-[#FEECDC] p-[10px] rounded'>Назначено</button>
                            </td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] '>
                            <td className='py-[20px] px-[10px] rounded-l-2xl'>131</td>
                            <td>Ислов Муминов</td>
                            <td>+992 901 09 20 35</td>
                            <td>11.08.1994</td>
                            <td>100500 с.</td>
                            <td>82</td>
                            <td>40</td>
                            <td>Инстаграм</td>
                            <td>820 дней</td>
                            <td className='text-green-700 rounded-r-2xl'>
                                <Link to={'/Info'}>
                                <button className='bg-white p-2 rounded-full mr-2 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                </Link>
                            </td>
                        </tr>                      
                    </tbody>
                </table>

                <div className='flex justify-center'>
                    <Stack spacing={2}>
                        <Pagination count={10} color="success" showFirstButton showLastButton />
                    </Stack>
                </div>

            </div>
            
        </div>
    )
}

export default Listpatients