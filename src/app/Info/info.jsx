import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import img from '../../assets/img1 (19).png'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import Profile from '../../components/profile'

const Info = () => {
    let [information, setinformation] = useState(true)
    let [information2, setinformation2] = useState(true)
    return (
        <div>

            <div className='flex gap-[10px] items-center font-light px-[20px] pt-[5px] pb-[20px] text-[#9A9DA3]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <p className='text-black'>Главная</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p className='text-black'>Список Пациентов</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <p>Карточка пациента</p>
            </div>

            <div className='flex justify-between mx-[20px]'>
                <p className='font-extrabold text-[30px]'>Карточка пациента    №13 Фирдавс Намозов</p>

                <div className='flex items-center gap-[10px]'>

                    <button className='bg-white cursor-pointer p-[5px] px-[10px] rounded border border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button className='bg-white cursor-pointer p-[5px] px-[10px] rounded border border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>

                    <Profile bgcolor={"white"} color={"#FF8736"} />

                </div>
            </div>

            <div className='p-[20px] mx-[10px] my-[30px] bg-white rounded-2xl'>
                <div className='flex justify-between '>
                    <p className='font-semibold text-2xl'>Общие сведения</p>
                    {information ? <button onClick={() => setinformation(!information)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button> : <button onClick={() => setinformation(!information)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>}


                </div>
                {information && (
                    <div >
                        <div className='flex w-[100%] gap-[30px] my-[20px] items-center'>
                            <div className='text-center border p-[20px] w-[12%] rounded-2xl border-gray-600 bg-[#F5F7FA]'>
                                <p>Загрузить фото 1:1</p>
                                <label className="cursor-pointer flex justify-center">
                                    <input type="file" className="hidden" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                    </svg>
                                </label>
                            </div>
                            <div className='flex flex-wrap w-[88%] gap-[20px]'>
                                <div className='w-[8%]' >
                                    <TextField
                                        label="ID пациента"
                                        variant="outlined"
                                        defaultValue="13"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[27%]'>
                                    <TextField
                                        label="ФИО клиента"
                                        variant="outlined"
                                        defaultValue="Намозов Фирдавс Нормуродович"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[11%]'>
                                    <TextField
                                        label="Дата рождения"
                                        variant="outlined"
                                        defaultValue="12.04.1994"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[17%]'>
                                    <TextField
                                        label="Номер телефона клиента"
                                        variant="outlined"
                                        defaultValue="+992 988 40 52 48"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='min-w-[27%]  flex-1'>
                                    <TextField
                                        label="Место работы"
                                        variant="outlined"
                                        defaultValue="ООО “Елки палки”, Директор воздуха"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[25%]'>
                                    <TextField
                                        select
                                        label="Документ"
                                        defaultValue="standard"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    >
                                        <MenuItem value="standard">Заграничный паспорт</MenuItem>
                                        <MenuItem value="premium">Премиум</MenuItem>
                                        <MenuItem value="vip">VIP</MenuItem>
                                    </TextField>
                                </div>
                                <div className='w-[7%]' >
                                    <TextField
                                        label="Серия"
                                        variant="outlined"
                                        defaultValue="P"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[12%]'>
                                    <TextField
                                        label="Номер"
                                        variant="outlined"
                                        defaultValue="400123652"
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
                                        label="Адрес по регистрации"
                                        variant="outlined"
                                        defaultValue="Фирдавси 24"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[10%]'>
                                    <TextField
                                        select
                                        label="Пол"
                                        defaultValue="standard"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    >
                                        <MenuItem value="standard">M</MenuItem>
                                        <MenuItem value="premium">Ж</MenuItem>
                                    </TextField>
                                </div>
                                <div className='min-w-[19%]  flex-1'>
                                    <TextField
                                        select
                                        label="Семейное положение"
                                        defaultValue="standard"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    >
                                        <MenuItem value="standard">M</MenuItem>
                                        <MenuItem value="premium">Ж</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Начисление"
                                    variant="outlined"
                                    defaultValue="2%"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Кол-во обращ..."
                                    variant="outlined"
                                    defaultValue="2"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Сумма покупок"
                                    variant="outlined"
                                    defaultValue="100500 с."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Дни отсутствия"
                                    variant="outlined"
                                    defaultValue="820 дней"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Источник"
                                    variant="outlined"
                                    defaultValue="Нельзяграм"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Долг"
                                    variant="outlined"
                                    defaultValue="0 с."
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='w-[14%]'>
                                <TextField
                                    label="Баллы"
                                    variant="outlined"
                                    defaultValue="40"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "13px", padding: "8px" },
                                    }}
                                />
                            </div>
                        </div>
                        <div className=' mt-[30px]'>
                            <TextField
                                label="Заметки"
                                variant="outlined"
                                defaultValue="Впишите свои заметки о данном пациенте..."
                                type="text"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px"},
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
                        <div className='flex font-semibold justify-end gap-3 mt-[30px]'>
                            <button className='bg-[#F5F7FA] w-[20%] p-[10px] rounded-[10px] text-[#005456]'>Редактировать</button>
                            <button className='bg-[#005456] w-[20%] p-[10px] rounded-[10px] text-white'>Сохранить</button>
                        </div>
                    </div>
                )}
            </div>

            <div className='p-[20px] mx-[10px] my-[30px] bg-white rounded-2xl'>
                <div className='flex justify-between '>
                    <p className='font-semibold text-2xl'>Медицинские сведения</p>
                    {information2 ? <button onClick={() => setinformation2(!information2)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button> : <button onClick={() => setinformation2(!information2)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>}
                </div>
                {information2 && (
                    <div >
                        <div className='flex gap-[30px] my-[20px] items-center'>
                            <div className='flex flex-wrap gap-3'>
                                <div className='w-[20%]'>
                                    <TextField
                                        label="Группа крови"
                                        variant="outlined"
                                        defaultValue="1"
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
                                        label="Резус фактор"
                                        variant="outlined"
                                        defaultValue="+"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                                <div className='w-[30%]'>
                                    <TextField
                                        label="Контактное лицо"
                                        variant="outlined"
                                        defaultValue="Ехалов Остановись Кудаевич"
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
                                        label="Номер телефона кл"
                                        variant="outlined"
                                        defaultValue="+992 988 40 52 48"
                                        type="text"
                                        fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                            "& .MuiInputLabel-root": { fontSize: "15px" },
                                            "& input": { fontSize: "13px", padding: "8px" },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='my-[30px]'>
                                <TextField
                                    label="Аллергии"
                                    variant="outlined"
                                    defaultValue="Деньги, работа, сон%"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='my-[30px]'>
                                <TextField
                                    label="Хронические заболевания"
                                    variant="outlined"
                                    defaultValue="Аденьгоз, перераб, недосон"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                />
                            </div>
                            <div className='my-[30px]'>
                                <TextField
                                    label="Перенесенные операции"
                                    variant="outlined"
                                    defaultValue="Аденьгоз, перераб, недосон"
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
                        <div className='flex font-semibold justify-end gap-3 mt-[30px]'>
                            <button className='bg-[#F5F7FA] w-[20%] p-[10px] rounded text-[#005456]'>Редактировать</button>
                            <button className='bg-[#005456] w-[20%] p-[10px] rounded text-white'>Сохранить</button>
                        </div>
                    </div>
                )}
            </div>

            <div className='p-[20px] mx-[10px] my-[30px] bg-white rounded-2xl'>

                <div className=' items-center pt-[20px]'>
                    <div className='flex items-center gap-[10px] px-[10px] border border-gray-400 w-[40%] rounded-[10px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder='Поиск' className='border-none outline-none p-[10px] rounded-lg w-full' />
                    </div>
                    <div className='flex justify-center mt-[20px] font-semibold text-[18px] gap-3 '>
                        <button className='bg-[#005456]  p-[10px] rounded-[10px] text-white'>История обращений</button>
                        <button className='bg-[#E6EAED]  p-[10px] rounded-[10px] text-[#005456]'>История баллов</button>
                        <button className='bg-[#E6EAED]  p-[10px] rounded-[10px] text-[#005456]'>История проживания</button>
                    </div>
                </div>

                <table className='w-[100%] my-[20px]'>
                    <thead>
                        <tr className=' text-[14px] text-center text-gray-600 bg-[#F5F7FA]'>
                            <td className='p-[10px] rounded-l-2xl'>№</td>
                            <td>Дата обращения</td>
                            <td>Сумма</td>
                            <td>Врач</td>
                            <td>Специальность</td>
                            <td>Скидка</td>
                            <td>Начислено баллов</td>
                            <td className='rounded-r-2xl'>Действие</td>
                        </tr>
                    </thead>
                    <tbody className='text-center font-extrabold text-[13px]'>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl'>
                            <td className='py-[20px] px-[10px]  rounded-l-2xl'>131</td>
                            <td>11.08.2025</td>
                            <td>500 с.</td>
                            <td>Духтуров Созкн</td>
                            <td>Спинолом</td>
                            <td>300 с.</td>
                            <td>10 с.</td>
                            <td className="py-[20px] px-[10px] bg-[#F5F7FA] rounded-r-2xl overflow-hidden">
                                <div className="flex justify-center">
                                    <img src={img} alt="" draggable={false} className="object-contain block max-h-[40px]" />
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl'>
                            <td className='py-[20px] px-[10px]  rounded-l-2xl'>131</td>
                            <td>11.08.2025</td>
                            <td>500 с.</td>
                            <td>Духтуров Созкн</td>
                            <td>Спинолом</td>
                            <td>300 с.</td>
                            <td>10 с.</td>
                            <td className="py-[20px] px-[10px] bg-[#F5F7FA] rounded-r-2xl overflow-hidden">
                                <div className="flex justify-center">
                                    <img src={img} alt="" draggable={false} className="object-contain block max-h-[40px]" />
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl'>
                            <td className='py-[20px] px-[10px]  rounded-l-2xl'>131</td>
                            <td>11.08.2025</td>
                            <td>500 с.</td>
                            <td>Духтуров Созкн</td>
                            <td>Спинолом</td>
                            <td>300 с.</td>
                            <td>10 с.</td>
                            <td className="py-[20px] px-[10px] bg-[#F5F7FA] rounded-r-2xl overflow-hidden">
                                <div className="flex justify-center">
                                    <img src={img} alt="" draggable={false} className="object-contain block max-h-[40px]" />
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl'>
                            <td className='py-[20px] px-[10px]  rounded-l-2xl'>131</td>
                            <td>11.08.2025</td>
                            <td>500 с.</td>
                            <td>Духтуров Созкн</td>
                            <td>Спинолом</td>
                            <td>300 с.</td>
                            <td>10 с.</td>
                            <td className="py-[20px] px-[10px] bg-[#F5F7FA] rounded-r-2xl overflow-hidden">
                                <div className="flex justify-center">
                                    <img src={img} alt="" draggable={false} className="object-contain block max-h-[40px]" />
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
                        <tr className='bg-[#F5F7FA] rounded-2xl'>
                            <td className='py-[20px] px-[10px]  rounded-l-2xl'>131</td>
                            <td>11.08.2025</td>
                            <td>500 с.</td>
                            <td>Духтуров Созкн</td>
                            <td>Спинолом</td>
                            <td>300 с.</td>
                            <td>10 с.</td>
                            <td className="py-[20px] px-[10px] bg-[#F5F7FA] rounded-r-2xl overflow-hidden">
                                <div className="flex justify-center">
                                    <img src={img} alt="" draggable={false} className="object-contain block max-h-[40px]" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='flex justify-center mt-[40px]'>
                    <Stack spacing={2}>
                        <Pagination count={10} color="success" showFirstButton showLastButton />
                    </Stack>
                </div>

            </div>

        </div>
    )
}

export default Info