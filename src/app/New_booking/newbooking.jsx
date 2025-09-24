import React from 'react'
import img4 from '../../assets/img1 (15).png'
import img5 from '../../assets/img1 (16).png'
import { Link } from 'react-router'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Profile from '../../components/profile'

const Newbooking = () => {
    const today = new Date().toISOString().split('T')[0];
    return (
        <div className='bg-[#F5F7FA]  w-full'>
            <div className='flex justify-between font-light items-center pt-[2px]  px-[20px]'>
                <div className='flex gap-[10px] items-center   text-gray-500'>
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
                        <Link to="/" className='flex gap-[10px] bg-[#005456] text-white p-[5px] px-[20px] rounded items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                            Назад
                        </Link>
                    <button className='bg-[#005456] text-white p-[5px] px-[10px] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    <Profile bgcolor={"#005456"} color={"white"} />
                </div>
            </div>

            <div>
                <h1 className='text-[30px] font-semibold m-[20px] mt-[30px]'>Бронирование</h1>
                <div className='bg-white m-[20px] rounded-2xl'>
                    <div className='flex justify-between items-center  p-[20px] '>
                        <p className='font-bold text-[20px]'>Новое бронирование</p>
                        <button className='bg-[#F5F7FA] text-black p-[5px] px-[10px] rounded'>Очистить</button>
                    </div>
                    <div className="flex items-center gap-[10px] p-[15px] bg-white rounded-lg">
                        <div className='w-[12%]'>
                            <TextField
                                select
                                label="Категория"
                                defaultValue="standard"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                        height: "40px",
                                    },
                                    "& .MuiInputLabel-root": {
                                        fontSize: "13px",
                                    },
                                    "& .MuiSelect-select": {
                                        fontSize: "13px",
                                        padding: "8px",
                                    },
                                }}
                            >
                                <MenuItem value="standard">Все</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[12%]'>
                            <TextField
                                select
                                label="Тип гостя"
                                defaultValue="standard"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Семейный</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[12%]'>
                            <TextField
                                select
                                label="Гражданство"
                                defaultValue="standard"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Албания</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[12%]'>
                            <TextField
                                label="Заезд"
                                type="date"
                                size="small"
                                defaultValue={today}
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[12%]'>
                            <TextField
                                label="Выезд"
                                type="date"
                                size="small"
                                defaultValue={today}
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>

                        <div className='w-[12%]'>
                            <TextField
                                label="Кол-во"
                                defaultValue="5"
                                size="small"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>

                        <div className='flex gap-[10px] w-[25%] items-center'>
                            <div className="flex items-center gap-1 px-[8px] border border-gray-300 rounded-[10px] h-[40px] w-[250px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input type="text" placeholder='Фамилия, номер бронировани, телеф...' className='border-none outline-none p-[15px] rounded-lg w-full' />
                            </div>
                            <img src={img4} alt="" draggable={false} />
                        </div>
                    </div>

                </div>

                <div className='flex items-start gap-3 m-[20px] '>
                    <div className='bg-white w-[64%] rounded-2xl p-[20px]'>
                        <p className='font-semibold text-2xl'>Выберите номер</p>
                        <div className='grid grid-cols-4 gap-[16px] mt-[20px] text-[13px]'>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                            <div className='bg-[#F5F7FA] p-[10px] rounded-[10px]'>
                                <img src={img5} alt="" className='w-full h-[90px]' draggable={false} />
                                <div className='py-[10px]'>
                                    <p className='flex justify-between'>Номер <span className='font-bold'>Люкс 145</span></p>
                                    <p className='text-gray-600 text-[11px] flex gap-[10px] my-[5px]'>02.09.2025 <span>-</span> <span>05.09.2025</span> </p>
                                    <p className='flex justify-between font-bold text-gray-600'>Цена: <span>2045с</span></p>
                                    <button className='bg-[#005456] w-full mt-[10px] text-white rounded p-[10px]'>Забронировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl w-[36%]'>
                        <div className='flex justify-between items-center p-[20px]'>
                            <p className='font-bold text-2xl'>Детали</p>
                            <p className='bg-[#F5F7FA] p-2 rounded cursor-pointer'>Очистить</p>
                        </div>
                        <div className='flex gap-2 border-y font-light border-gray-300 m-[10px] py-[10px]'>
                            <div className='w-[30%]'>
                                <img src={img5} alt="" className='w-[100px] h-[100px] rounded object-cover' draggable={false} />
                            </div>
                            <div className='w-[66%] text-[#5E5F62] '>
                                <p className='flex justify-between items-center font-semibold text-black'>Люкс 145 <span className='font-bold text-[20px]'>x</span></p>
                                <p className='flex gap-7 items-center'>Цена <span className='font-bold  text-black'>2045 </span> <span>сомони</span></p>
                                <p className='flex gap-3 items-center'>Скидка <span className='font-bold px-[15px]  text-black border border-gray-300 rounded-[7px]'>45 </span> <span className='font-bold text-[#005456]'>сомони | %</span></p>
                                <div className='flex justify-between items-center w-[100%] mt-[10px]'>
                                    <p className='flex gap-5'>Ночей <span className='font-bold text-black'>5</span></p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>5</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 items-center w-[100%] mt-[10px]'>
                                    <p className=' flex gap-[10px] text-[13px] '>Взрослые <span className='font-bold text-black'>3</span> <span>Персон</span></p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>5</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 items-center w-[100%] mt-[10px]'>
                                    <p className=' flex gap-10 text-[13px]'>Дети <span className='font-bold text-black flex gap-[9px]'>0 <span className='font-light text-[#5E5F62]'>Персон</span></span> </p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>0</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 border-y font-light border-gray-300 m-[10px] my-[20px] py-[10px]'>
                            <div className='w-[30%]'>
                                <img src={img5} alt="" className='w-[100px] h-[100px] rounded object-cover' draggable={false} />
                            </div>
                            <div className='w-[66%] text-[#5E5F62] '>
                                <p className='flex justify-between items-center font-semibold text-black'>Люкс 145 <span className='font-bold text-[20px]'>x</span></p>
                                <p className='flex gap-7 items-center'>Цена <span className='font-bold  text-black'>2045 </span> <span>сомони</span></p>
                                <p className='flex gap-3 items-center'>Скидка <span className='font-bold px-[15px]  text-black border border-gray-300 rounded-[7px]'>45 </span> <span className='font-bold text-[#005456]'>сомони | %</span></p>
                                <div className='flex justify-between items-center w-[100%] mt-[10px]'>
                                    <p className='flex gap-5'>Ночей <span className='font-bold text-black'>5</span></p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>5</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 items-center w-[100%] mt-[10px]'>
                                    <p className=' flex gap-[10px] text-[13px] '>Взрослые <span className='font-bold text-black'>3</span> <span>Персон</span></p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>5</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 items-center w-[100%] mt-[10px]'>
                                    <p className=' flex gap-10 text-[13px]'>Дети <span className='font-bold text-black flex gap-[9px]'>0 <span className='font-light text-[#5E5F62]'>Персон</span></span> </p>
                                    <div className='flex gap-2 items-center border border-[#005456]   rounded-[5px] '>
                                        <button className='bg-gray-200 w-full rounded-l-[5px] border-r px-2'>-</button>
                                        <p>0</p>
                                        <button className='bg-gray-200 w-full rounded-r-[5px] border-l px-2'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between text-[13px] p-[10px] '>
                            <div className='w-[30%]'>
                                <TextField
                                    label="Заезд"
                                    type="date"
                                    size="small"
                                    defaultValue={today}
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[30%]'>
                                <TextField
                                    label="Выезд"
                                    type="date"
                                    size="small"
                                    defaultValue={today}
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[36%]'>
                                <TextField
                                    label="Кол-во людей"
                                    defaultValue="5"
                                    size="small"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between text-[13px] items-center py-[20px] px-[10px]'>
                            <p className='font-semibold text-[20px]'>Информация о клиенте</p>
                            <button className='bg-[#F5F7FA] font-light p-[10px] text-[11px] rounded-[10px]'>Добавить клиента</button>
                        </div>
                        <div className='m-[10px] my-[20px]'>
                            <TextField
                                select
                                label="Клиент "
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "13px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Найти клиента</MenuItem>
                            </TextField>
                        </div>
                        <div className='flex gap-2 text-[13px] p-[10px] my-[20px] '>
                            <div className='w-[50%]'>
                                <TextField
                                    label="Адрес доставки"
                                    type='text'
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                >
                                </TextField>
                            </div>
                            <div className='w-[50%]'>
                                <TextField
                                    label="Стоимость доставки"
                                    defaultValue="20"
                                    type='text'
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                >
                                </TextField>
                            </div>
                        </div>
                        <div className='p-[10px]'>
                            <p className='font-semibold text-[20px] mb-[15px]'>Комментарий к бронированию</p>
                            <textarea placeholder='Оставьте свой комментарий к заказу здесь...' className='border border-gray-300 rounded-[10px] w-full p-[10px] h-[140px]'></textarea>
                        </div>
                        <div className='flex gap-2 text-[13px] py-[20px] border-t border-gray-300 mx-[10px] my-[20px] '>
                            <div className='w-[50%]'>
                                <TextField
                                    label="Списать баллы"
                                    type='text'
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                >
                                </TextField>
                            </div>
                            <div className='w-[50%]'>
                                <TextField
                                    label="Доступно"
                                    defaultValue="20"
                                    type='text'
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                >
                                </TextField>
                            </div>
                        </div>
                        <div className='px-[20px] py-[20px]'>
                            <p className='flex justify-between'>Итого <span className='font-semibold'>51 125 сомони</span></p>
                            <p className='flex justify-between'>Скидка <span className='font-semibold text-red-600'>0 сомони</span></p>
                            <p className='flex justify-between'>Списанные баллы <span className='font-semibold text-red-600'>0 сомони</span></p>
                            <p className='flex justify-between'>К оплате <span className='font-semibold'>51 125 сомони</span></p>
                            <p className='flex justify-between'>К начислению баллов <span className='font-semibold'>0 баллов</span></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Newbooking