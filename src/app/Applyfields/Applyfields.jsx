import React, { useState } from 'react'
import Cog from '../../components/cog'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Profile from '../../components/profile'

const Applyfields = () => {
    let [rate, setRate] = useState(false)
    let [room, setRoom] = useState(false)
    let [bed, setBed] = useState(false)
    let [cleaning, setCleaning] = useState(false)
    let [data, setData] = useState(false)

    return (
        <div>

            <div className='flex gap-[5px] font-light text-gray-600 items-center pt-[8px] px-[20px]'>
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

                <p>Список номеров</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p>Настройка полей номеров</p>
            </div>

            <div className='flex justify-between items-center px-[30px] pt-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "36px" }}>Применение полей номеров</p>
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

            {rate && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm" ></div>
                    <div className="relative bg-white w-[40%] p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                        <h2 style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className="text-xl font-bold text-gray-800 mb-4">Новый тариф</h2>
                        <TextField
                            label="Тариф"
                            variant="outlined"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setRate(false)} className="px-4 py-2 w-full rounded-[10px] border border-gray-300 text-gray-700 hover:bg-gray-100 transition" >
                                Отмена
                            </button>
                            <button onClick={() => setRate(false)} className="px-4 py-2 w-full rounded-[10px] bg-[#005456] text-white font-medium hover:bg-[#004045] transition" >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className='bg-white p-[20px] rounded-2xl m-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className='mb-[20px]'>Редактировать тариф проживания</p>
                <div className='flex gap-4'>
                    <div className='w-[15%]'>
                        <TextField
                            select
                            label="Тариф"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Стандарт</MenuItem>
                            <MenuItem value="premium">Аппартаменты</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[15%]'>
                        <TextField
                            label="Редактировать название тарифа"
                            variant="outlined"
                            defaultValue="Стандарт"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[35%]'>
                        <TextField
                            label="Стоимость для граждан Таджикистана"
                            variant="outlined"
                            defaultValue="250"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[35%]'>
                        <TextField
                            label="Стоимость для инстранных граждан"
                            variant="outlined"
                            defaultValue="350"
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
                <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className='flex gap-4 my-[20px]'>
                    <button onClick={() => setRate(true)} className='p-[10px] bg-[#1D272F1A] text-[#005456] rounded-[10px] w-full'>Создать новый тариф</button>
                    <button className='p-[10px] bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
                </div>
            </div>

            {room && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm"></div>
                    <div className="relative bg-white w-[40%] p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                        <h2 style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className="text-xl  text-gray-800 mb-4">Новый тип</h2>
                        <TextField
                            label="Тип номера"
                            variant="outlined"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                        <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className="flex gap-4 mt-6">
                            <button onClick={() => setRoom(false)} className="px-4 py-2 w-full rounded-[10px] border border-gray-300 text-gray-700 hover:bg-gray-100 transition" >
                                Отмена
                            </button>
                            <button onClick={() => setRoom(false)} className="px-4 py-2 w-full rounded-[10px] bg-[#005456] text-white font-medium hover:bg-[#004045] transition" >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className='bg-white p-[20px] rounded-2xl m-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className='my-[20px]'>Редактировать тип проживания</p>
                <div className='flex gap-4'>
                    <div className='w-[40%]'>
                        <TextField
                            select
                            label="Тип номера"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Совмещенный</MenuItem>
                            <MenuItem value="premium">Семейный</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[60%]'>
                        <TextField
                            label="Редактировать название типа номера"
                            variant="outlined"
                            defaultValue="Совмещенный"
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
                <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className='flex gap-4 my-[20px]'>
                    <button onClick={() => setRoom(true)} className='p-[10px] bg-[#1D272F1A] text-[#005456] rounded-[10px] w-full'>Создать новый тип</button>
                    <button className='p-[10px] bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
                </div>
            </div>

            {bed && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm" ></div>
                    <div className="relative bg-white w-[40%] p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                        <h2 style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className="text-xl  text-gray-800 mb-4">Новый тип кровати</h2>
                        <TextField
                            label="Тип кровати"
                            variant="outlined"
                            type="text"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                        <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className="flex gap-3 mt-6">
                            <button onClick={() => setBed(false)} className="px-4 py-2 w-full rounded-[10px] border border-gray-300 text-gray-700 hover:bg-gray-100 transition" >
                                Отмена
                            </button>
                            <button onClick={() => setBed(false)} className="px-4 py-2 w-full rounded-[10px] bg-[#005456] text-white font-medium hover:bg-[#004045] transition" >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className='bg-white p-[20px] rounded-2xl m-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className='my-[20px]'>Редактировать тип кровати</p>
                <div className='flex gap-4'>
                    <div className='w-[40%]'>
                        <TextField
                            select
                            label="Тип кровати"
                            defaultValue="standard"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Односпальные</MenuItem>
                            <MenuItem value="premium">Двуспальные</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[60%]'>
                        <TextField
                            label="Редактировать название типа кровати"
                            variant="outlined"
                            defaultValue="Односпальные"
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
                <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className='flex gap-4  my-[20px]'>
                    <button onClick={() => setBed(true)} className='p-[10px] bg-[#1D272F1A] text-[#005456] rounded-[10px] w-full'>Создать новый тип кровати </button>
                    <button className='p-[10px] bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
                </div>
            </div>

            {cleaning && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-sm" ></div>
                    <div className="relative bg-white w-[40%] p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                        <h2 style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className=" text-gray-800 mb-4">Новый тип времени</h2>
                        <div className='mt-[20px]'>
                            <TextField
                                label="Впишите название типа времени"
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
                        <div className='my-[20px]'>
                            <TextField
                                select
                                label="Выбрать формат назначения "
                                defaultValue="standard"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            >
                                <MenuItem value="standard">Свободное назначение</MenuItem>
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                label="Впишите интервал в минутах"
                                variant="outlined"
                                type="number"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                    "& .MuiInputLabel-root": { fontSize: "15px" },
                                    "& input": { fontSize: "15px", padding: "8px" },
                                }}
                            />
                        </div>
                        {data && (
                            <div className='flex gap-3 mt-[20px]'>
                                <div className='w-[50%]'>
                                    <TextField
                                        label="от"
                                        type="time"
                                        defaultValue="08:00"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "15px", padding: "8px" },
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300,
                                        }}
                                    />
                                </div>
                                <div className='w-[50%]'>
                                    <TextField
                                        label="до"
                                        type="time"
                                        defaultValue="08:00"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "15px", padding: "8px" },
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
                        )}

                        <button className='mt-[10px]' onClick={() => setData(!data)}>Указанное время будет ставиться для уборки</button>
                        <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className="flex gap-3 mt-6">
                            <button onClick={() => setCleaning(false)} className="px-4 py-2 w-full rounded-[10px] border border-gray-300 text-gray-700 hover:bg-gray-100 transition" >
                                Отмена
                            </button>
                            <button onClick={() => setCleaning(false)} className="px-4 py-2 w-full rounded-[10px] bg-[#005456] text-white font-medium hover:bg-[#004045] transition" >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className='bg-white p-[20px] rounded-2xl m-[20px]'>
                <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "20px" }} className=' my-[20px]'>Редактировать тип хаускипинга (уборки) </p>
                <div className='flex gap-4'>
                    <div className='w-[30%]'>
                        <TextField
                            select
                            label="Тип уборки "
                            defaultValue="standard"
                            fullWidth
                              sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        >
                            <MenuItem value="standard">Экспресс уборка</MenuItem>
                        </TextField>
                    </div>
                    <div className='w-[50%]'>
                        <TextField
                            label="Редактировать название автоназначения"
                            variant="outlined"
                            defaultValue="Экспресс уборка"
                            type="text"
                            fullWidth
                              sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                "& .MuiInputLabel-root": { fontSize: "15px" },
                                "& input": { fontSize: "15px", padding: "8px" },
                            }}
                        />
                    </div>
                    <div className='w-[20%]'>
                        <TextField
                            label="Впишите интервал в минутах"
                            variant="outlined"
                            defaultValue="30"
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
                <div style={{ fontFamily: "Montserrat-SemiBold", fontSize: "13px" }} className='flex gap-4  my-[20px]'>
                    <button onClick={() => setCleaning(true)} className='p-[10px] bg-[#1D272F1A] text-[#005456] rounded-[10px] w-full'>Создать тип уборки </button>
                    <button className='p-[10px] bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Applyfields