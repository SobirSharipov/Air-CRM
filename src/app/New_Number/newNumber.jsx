import React from 'react'
import { Link } from 'react-router'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Cog from '../../components/cog';
import Profile from '../../components/profile';

const NewNumber = () => {
    return (
        <div>
            <div className='flex font-light gap-[10px] text-gray-600 items-center py-[8px] px-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <p className='text-black'>Главная</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p>Номера</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p>Новый номер</p>
            </div>

            <div className='flex justify-between items-center px-[30px] pt-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "36px" }}>Добавление номера </p>

                <div className='flex items-center gap-2'>
                    <Cog />
                    <button className='text-[#005456] cursor-pointer bg-white border border-gray-300 p-[5px] px-[10px] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                    <Profile bgcolor={"white"} color={"#005456"} />
                </div>

            </div>

            <div className='bg-white p-[20px] m-[20px] rounded-2xl'>

                <div className='flex justify-between'>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }}>Детали номера </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>

                <div className='flex gap-[25px] my-[20px] items-center'>
                    <div className='text-center border p-[20px] w-[25%] rounded-2xl border-gray-600 bg-[#F5F7FA]'>
                        <p className='font-light'>Обложка:
                            Загрузить фото
                            (Не обязательно)</p>
                        <label className="cursor-pointer flex justify-center">
                            <input type="file" className="hidden" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                        </label>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        <div className='w-[15%]'>
                            <TextField
                                label="№ номера"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[15%]'>
                            <TextField
                                label="Корпус"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[15%]'>
                            <TextField
                                label="Этаж"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[20%]'>
                            <TextField
                                select
                                label="Тариф"
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Стандарт</MenuItem>
                                <MenuItem value="premium">Премиум</MenuItem>
                                <MenuItem value="vip">VIP</MenuItem>
                            </TextField>
                        </div>
                        <div className='min-w-[20%] flex-1'>
                            <TextField
                                select
                                label="Тип"
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Совмещенный</MenuItem>
                                <MenuItem value="premium">Премиум</MenuItem>
                                <MenuItem value="vip">VIP</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[24%]'>
                            <TextField
                                label="Кол-во мест"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[24%]'>
                            <TextField
                                select
                                label="Тип кровати"
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Одноместный</MenuItem>
                                <MenuItem value="premium">Премиум</MenuItem>
                                <MenuItem value="vip">VIP</MenuItem>
                            </TextField>
                        </div>
                        <div className='w-[20%]'>
                            <TextField
                                label="Время заезда"
                                type="time"
                                defaultValue="08:00"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </div>
                        <div className='min-w-[20%] flex-1'>
                            <TextField
                                label="Время заезда"
                                type="time"
                                defaultValue="08:00"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "13px", padding: "8px" },
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className=' my-[20px]'>Стоимость</p>
                    <div className='flex gap-5'>
                        <div className='w-[50%]'>
                            <TextField
                                label="Стоимость для граждан Таджикистана"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                        <div className='w-[50%]'>
                            <TextField
                                label="Стоимость для инстранных граждан"
                                variant="outlined"
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />

                        </div>
                    </div>
                    <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className='my-[20px]'>Хаускипинг (уборка) </p>
                    <div className='w-[30%]'>
                        <TextField
                            select
                            label="Периодичность уборки"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "13px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Ежедневно</MenuItem>
                            <MenuItem value="premium">Премиум</MenuItem>
                            <MenuItem value="vip">VIP</MenuItem>
                        </TextField>
                    </div>
                    <div className=' mt-[30px]'>
                        <p  style={{fontFamily:"Montserrat-SemiBold",fontSize:"20px"}} className='my-[20px]'>Что в комнате?</p>
                        <TextField
                            label="Перечислите то, что есть в комнате через запятую и с большой буквы"
                            variant="outlined"
                            defaultValue="Просторная кровать, Набор полотенец, Фен, WI-FI"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                            InputProps={{
                                sx: {
                                    height: 50,
                                    paddingBottom: 10,
                                    paddingTop: 3
                                },
                            }}
                        />
                    </div>
                </div>

                <div  style={{fontFamily:"Montserrat-SemiBold",fontSize:"13px"}} className='flex gap-4 mt-[30px]'>
                    <Link to={'/Numbers'} className='w-[100%]'>
                        <button className='bg-[#1D272F1A] p-[10px] rounded-[10px] w-full'>Отмена</button>
                    </Link>
                    <button className='bg-[#005456] text-white p-[10px] rounded-[10px] w-full'>Добавить</button>
                </div>

            </div>
        </div>
    )
}

export default NewNumber