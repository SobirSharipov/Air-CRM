import React from 'react'
import Card from '../../components/card'
import img2 from '../../assets/img1 (13).png'
import img4 from '../../assets/img1 (15).png'
import img5 from '../../assets/img1 (17).png'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Profile from '../../components/profile'

const Residents = () => {
    return (
        <div className='bg-[#F5F7FA] w-full'>

            <div className='flex justify-between items-center font-light px-[20px]  text-gray-500'>
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
                    <button className='bg-[#005456] text-white p-[5px] px-[10px] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    <Profile bgcolor={"#005456"} color={"white"} />
                </div>
            </div>

            <Card color={"#3F83F8"} text={"white"} col={"#FF8736"} />

            <div className='bg-white m-[20px] p-[20px] rounded-2xl'>

                <div className='flex justify-between items-center py-[10px]'>
                    <div className='flex gap-[10px] items-center w-[40%]'>
                        <div className='flex items-center px-[10px] gap-[10px] border border-gray-400 w-[80%] rounded-[10px] '>
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
                        <div className='flex items-center gap-[10px] bg-[#005456] text-white p-[8px] px-[15px] rounded-[10px] text-[13px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>

                            <button>Фильтр</button>
                            <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
                        </div>
                        <div className='flex gap-[10px] bg-[#F5F7FA] p-[10px] px-[15px] rounded-[10px] text-[13px]'>
                            <img src={img2} alt="" />
                            <button>Экспорт</button>
                        </div>
                        <div>
                            <img src={img5} alt="" draggable={false} />
                        </div>
                    </div>

                </div>

                <div className='p-[10px] text-[20px] font-extrabold bg-[#005456] rounded-[10px] text-white'>
                    <p>Все: <span className=' ml-[10px]'>125 032,06 с.</span> </p>
                </div>
            </div>

            <div className='bg-white m-[20px] grid grid-cols-4 gap-[20px] text-[13px] p-[20px] rounded-2xl'>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between gap-3 items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FFF8F1]  p-2 rounded'>Не оплачено</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F5F7FA] rounded-[10px] pb-[20px] p-[10px]'>
                    <div className='flex justify-between items-center  py-[10px] border-b'>
                        <button style={{ fontFamily: "Montserrat-SemiBold" }} className='bg-[#FDE8E8] px-[30px] p-2 rounded'>Выехали</button>
                        <div className='text-green-600 flex gap-1'>
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
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <p className='flex justify-between font-bold text-[12px] pb-[10px] whitespace-nowrap'>Шабнамова Шахло <span className='font-normal'>+992 988 40 52 48</span></p>
                        <hr className='my-[5px]' />
                        <p className='flex justify-between text-[12px] font-medium'>Дата заезда <span className='font-light'>02.03.2025     12:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Дата выезда <span className='font-light'>02.09.2025     08:00</span></p>
                        <p className='flex justify-between text-[12px] font-medium'>Ночей <span className='font-light'>6</span></p>
                        <hr />
                        <p className='flex justify-between text-[12px] py-[10px]'>Номер 25 <span className='font-medium'>Тариф</span> <span>Стандарт</span></p>
                        <hr />
                        <div className='grid grid-cols-3 gap-2 text-center mt-[10px]'>
                            <p>Сумма</p>
                            <p>Баланс</p>
                            <p>К оплате</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                            <p className='font-bold text-[12px] text-green-600'>25 000 c.</p>
                        </div>
                    </div>
                </div>

            </div>

            <p className='text-center text-gray-500 pb-[50px]'>© Air 2025</p>
        </div>
    )
}

export default Residents