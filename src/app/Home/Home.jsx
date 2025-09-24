import React, { useState } from 'react'
import Card from '../../components/card'
import img2 from '../../assets/img1 (13).png'
import img3 from '../../assets/img1 (14).png'
import img4 from '../../assets/img1 (15).png'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Profile from '../../components/profile'

const Home = () => {
    return (
        <div>

            <div className='flex justify-between items-center font-light text-gray-500 pt-[2px] px-[20px]'>
                <div className='flex gap-[10px] items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <p className='text-black'>Главная</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>Бронирование</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>Все брони</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <button className='bg-[#005456] text-white p-[5px] px-[10px] rounded cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    <Profile bgcolor={"#005456"} color={"white"} />
                </div>
            </div>

            <Card color={"#E1EFFE"} col={"#FCD9BD"} />

            <div className='bg-white m-[20px] p-[20px] rounded-2xl'>

                <div className='flex justify-between items-center py-[10px]'>
                    <div className='flex gap-[10px] items-center w-[40%]'>
                        <div className='flex items-center gap-[10px] px-[10px] border border-gray-400 w-[80%] rounded-[10px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder='Поиск' className='border-none outline-none p-[10px] rounded-lg w-full' />
                        </div>
                        <img src={img4} alt="" draggable={false} />
                    </div>
                    <div className='flex gap-[20px] items-center px-[20px] py-[10px]'>
                        <div >
                            <TextField
                                select
                                label="Период"
                                defaultValue="standard"
                                size="small"
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <MenuItem value="standard">Выбрать</MenuItem>
                            </TextField>

                        </div>
                        <div className='flex items-center gap-[10px] bg-[#F5F7FA] p-[10px] px-[15px] rounded-[10px] text-[13px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>

                            <button>Фильтр</button>
                            <div className='w-[10px] h-[10px] rounded-full bg-black'></div>
                        </div>
                        <div className='flex gap-[10px] bg-[#F5F7FA] p-[10px] px-[15px] rounded-[10px] text-[13px]'>
                            <img src={img2} alt="" draggable={false} />
                            <button>Экспорт</button>
                        </div>
                        <div>
                            <img src={img3} alt="" draggable={false} />
                        </div>
                    </div>
                </div>

                <div className='p-[10px] text-[20px] font-extrabold bg-[#005456] rounded-[10px] text-white'>
                    <p>Все: <span className=' ml-[10px]'>125 032,06 с.</span> </p>
                </div>

                <table className='w-[100%] my-[20px] rounded'>
                    <thead style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}} className='bg-[#F5F7FA]  text-gray-500  text-[13px]  rounded-2xl'>
                        <tr className='text-left'>
                            <th className='py-[13px] px-[10px] rounded-l-2xl'>Клиент</th>
                            <th className=''>Взрс/дети</th>
                            <th className='px-[10px]'>Ночей</th>
                            <th className='px-[10px]'>Номер</th>
                            <th className='px-[15px]'>Тариф</th>
                            <th className='px-[10px]'>Дата заезда</th>
                            <th className='px-[10px]'>Дата выезда</th>
                            <th className='px-[10px]'>Сумма</th>
                            <th className='px-[10px]'>Баланс</th>
                            <th className='px-[10px]'>К оплате</th>
                            <th className='w-[12%] px-[10px]'>Статус</th>
                            <th className='rounded-r-2xl text-center pr-[10px]'>Действия</th>
                        </tr>
                    </thead>
                    <tbody className='text-[13px] font-medium'>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA]  rounded-2xl my-[30px]'>
                            <td className='p-[10px] py-[20px] rounded-l-2xl'>Шабнам Ш...</td>
                            <td className='px-[10px]'>1/0</td>
                            <td className='px-[10px]'>25</td>
                            <td className='px-[10px]'>25</td>
                            <td>Стандарт</td>
                            <td style={{fontFamily:"Gilroy"}}>28.04.2025 <br /> 19:12</td>
                            <td style={{fontFamily:"Gilroy"}}>02.05.2025 <br /> 19:12</td>
                            <td className='text-green-600'>25 000 c.</td>
                            <td className='text-green-600'>2000 c.</td>
                            <td className='text-red-600'>23 000 c.</td>
                            <td className='p-[10px]'>
                                <button className='bg-[#FEECDC] w-full  rounded p-2'>Не оплачено</button>
                            </td>
                            <td className='text-green-600 text-center rounded-r-2xl'>
                                <button className='bg-white p-2 rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='bg-white p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl my-[30px]'>
                            <td className='p-[10px] py-[20px] rounded-l-2xl'>Шабнам Ш...</td>
                            <td className='px-[10px]'>1/0</td>
                            <td className='px-[10px]'>25</td>
                            <td className='px-[10px]'>25</td>
                            <td>Стандарт</td>
                            <td style={{fontFamily:"Gilroy"}}>28.04.2025 <br /> 19:12</td>
                            <td style={{fontFamily:"Gilroy"}}>02.05.2025 <br /> 19:12</td>
                            <td className='text-green-600'>25 000 c.</td>
                            <td className='text-green-600'>2000 c.</td>
                            <td className='text-green-600'>23 000 c.</td>
                            <td className='p-[10px]'>
                                <button className='bg-[#FDE8E8] w-full rounded p-2'>Выехали</button>
                            </td>
                            <td className='text-green-600 text-center rounded-r-2xl'>
                                <button className='bg-white p-2 rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='bg-white p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl my-[30px]'>
                            <td className='p-[10px] py-[20px] rounded-l-2xl'>Шабнам Ш...</td>
                            <td className='px-[10px]'>1/0</td>
                            <td className='px-[10px]'>25</td>
                            <td className='px-[10px]'>25</td>
                            <td>Стандарт</td>
                            <td style={{fontFamily:"Gilroy"}}>28.04.2025 <br /> 19:12</td>
                            <td style={{fontFamily:"Gilroy"}}>02.05.2025 <br /> 19:12</td>
                            <td className='text-green-600'>25 000 c.</td>
                            <td className='text-green-600'>2000 c.</td>
                            <td className='text-red-600'>23 000 c.</td>
                            <td className='p-[10px]'>
                                <button className='bg-[#DEF7EC] w-full rounded p-2'>Не оплачено</button>
                            </td>
                            <td className='text-green-600 text-center rounded-r-2xl'>
                                <button className='bg-white p-2 rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='bg-white p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl my-[30px]'>
                            <td className='p-[10px] py-[20px] rounded-l-2xl'>Шабнам Ш...</td>
                            <td className='px-[10px]'>1/0</td>
                            <td className='px-[10px]'>25</td>
                            <td className='px-[10px]'>25</td>
                            <td>Стандарт</td>
                            <td style={{fontFamily:"Gilroy"}}>28.04.2025 <br /> 19:12</td>
                            <td style={{fontFamily:"Gilroy"}}>02.05.2025 <br /> 19:12</td>
                            <td className='text-green-600'>25 000 c.</td>
                            <td className='text-green-600'>2000 c.</td>
                            <td className='text-red-600'>23 000 c.</td>
                            <td className='p-[10px]'>
                                <button className='bg-[#FEECDC] w-full rounded p-2'>Не оплачено</button>
                            </td>
                            <td className='text-green-600 text-center rounded-r-2xl'>
                                <button className='bg-white p-2 rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                    </svg>
                                </button>
                                <button className='bg-white p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
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

            <p className='text-center text-gray-500 pb-[50px]'>© Air 2025</p>
        </div>
    )
}

export default Home