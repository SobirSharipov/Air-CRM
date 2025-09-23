import React, { useState } from 'react'
import { Link } from 'react-router'
import imguser from '../../assets/img1 (18).png'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Profile from '../../component/profile'

const Newentry = () => {
    return (
        <div>

            <div className='flex justify-between items-center px-[20px]'>
                <div className='flex gap-[10px] font-light text-gray-500 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <p className='text-black'>Главная</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>Сделки</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>Все сделки</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <Link to={'/Listpatients'}>
                        <button className='bg-[#E6EAED] text-[#005456] font-semibold cursor-pointer p-[5px] px-[10px] rounded'>Список пациентов</button>
                    </Link>
                    <button className='bg-[#005456] cursor-pointer text-white p-[5px] px-[10px] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    <Profile bgcolor={"#005456"} color={"white"} />
                </div>
            </div>

            <div className='flex items-start gap-[20px] m-[20px]'>

                <div className='w-[40%]'>

                    <div className='bg-white p-[20px] rounded-2xl'>
                        <p className='font-semibold text-2xl mb-[20px]'>Пациент</p>
                        <div className='flex gap-5'>
                            <img src={imguser} alt="" />
                            <div>
                                <p className='font-semibold'>Мухамад Джаборов</p>
                                <p>+992 902 99 99 99</p>
                            </div>
                        </div>
                        <button className='w-full bg-[#1D272F1A] text-[#005456] font-bold p-[10px] rounded-[10px] mt-[20px]'>Информация</button>
                    </div>

                    <div className='bg-white p-[20px] rounded-2xl mt-[20px]'>
                        <p className='font-semibold text-center text-2xl'>История обращений</p>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 my-[20px] '>
                            <div className='w-[80%]'>
                                <TextField
                                    label="МКБ"
                                    variant="outlined"
                                    defaultValue="003.02  Легочная недостаточ..."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[20%]'>
                                <TextField
                                    label="Дата"
                                    variant="outlined"
                                    defaultValue="17.09.25"
                                    type="text"
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <button className='w-full cursor-pointer text-[#005456] font-bold bg-[#1D272F1A] p-[10px] rounded-[10px] mt-[10px] '>Вся история</button>
                    </div>

                </div>

                <div className='bg-white w-[60%] rounded-2xl p-[20px]'>
                    <div className='font-semibold text-2xl  flex justify-between'>
                        <p>Жалобы</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className=' my-[20px]'>
                        <div className='w-[100%]'>
                            <TextField
                                label="Время заезда"
                                type="time"
                                defaultValue="08:00"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl my-[20px]'>Анамнез</p>
                        <div className='w-[100%]'>
                            <TextField
                                label="Стоимость для граждан Таджикистана"
                                type="text"
                                defaultValue="250"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl my-[20px]'>Терапевтический статус</p>
                        <div className='w-[100%]'>
                            <TextField
                                label="Периодичность уборки"
                                type="text"
                                defaultValue="Ежедневно"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl my-[20px]'>Диагноз </p>
                        <div className=''>
                            <TextField
                                select
                                label="Периодичность уборки"
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Ежедневно</MenuItem>
                                <MenuItem value="premium">Премиум</MenuItem>
                                <MenuItem value="vip">VIP</MenuItem>
                            </TextField>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl my-[20px]'>Рекомендации</p>
                        <div className='w-[100%]'>
                            <TextField
                                label="Периодичность уборки"
                                type="text"
                                defaultValue="Ежедневно"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl my-[20px]'>Назначение</p>
                        <div className='w-[100%]'>
                            <TextField
                                label="Периодичность уборки"
                                type="text"
                                defaultValue="Ежедневно"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "17px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex font-semibold gap-2 mt-[55px]'>
                        <Link to={'/patients'} className='w-[100%]'>
                            <button className='bg-[#1D272F1A] cursor-pointer text-[#005456] w-full p-[10px] rounded-[10px]'>Отмена</button>
                        </Link>
                        <button className='bg-[#005456] cursor-pointer text-white w-full p-[10px] rounded-[10px]'>Сохранить</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Newentry