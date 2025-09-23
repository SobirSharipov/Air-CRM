import React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router'
import Profile from '../../component/profile'

const Patients = () => {
  return (
    <div>

      <div className='flex justify-between items-center text-gray-500 px-[20px]'>
        <div className='flex gap-[10px] items-center font-light pt-[5px] mb-[40px] '>
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
        <div style={{fontFamily:"Montserrat-Light"}} className='flex items-center gap-[10px]'>
          <Link to={'/Newentry'}>
            <button className='bg-[#005456] cursor-pointer text-white  p-[5px] px-[10px] rounded'>+ Новая запись</button>
          </Link>
          <Link to={'/Listpatients'}>
            <button className='bg-[#E6EAED] hover:bg-[#dadde0] p-[5px] px-[10px] cursor-pointer  text-[#005456] rounded-[8px]'>Список пациентов</button>
          </Link>
          <button className='bg-[#005456] cursor-pointer text-white p-[5px] px-[10px] rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
          </button>
          <Profile bgcolor={"#005456"} color={"white"} />
        </div>
      </div>

      <div className='grid grid-cols-4 mx-[20px] gap-5'>
        <div className='bg-white cursor-pointer flex justify-between gap-5 p-[20px] rounded-2xl'>
          <div>
            <button className='bg-[#005456] text-white p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <p className='mt-[10px]'>Сегодня</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>Записи</p>
            <p className='mt-[22px] text-end'>3 пациента</p>
          </div>
        </div>
        <div className='bg-white cursor-pointer flex justify-between gap-5 p-[20px] rounded-2xl'>
          <div>
            <button className='bg-[#F05252] text-white p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <p className='mt-[10px]'>Сегодня</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>Отсутствие</p>
            <p className='mt-[22px] text-end'>3 пациента</p>
          </div>
        </div>
        <div className='bg-white cursor-pointer flex justify-between gap-5 p-[20px] rounded-2xl'>
          <div>
            <button className='bg-[#0E9F6E] text-white p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <p className='mt-[10px]'>Сегодня</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>Новые</p>
            <p className='text-end mt-[22px]'>3 пациента</p>
          </div>
        </div>
        <div className='bg-white cursor-pointer flex justify-between  gap-2 p-[20px] rounded-2xl'>
          <div>
            <button className='bg-[#3F83F8] text-white p-[10px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </button>
            <p className='mt-[10px]'>Сегодня</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>Повторные</p>
            <p className='text-end mt-[22px]'>3 пациента</p>
          </div>
        </div>
      </div>

      <div style={{fontFamily:"Inter-SemiBold",size:"13px"}} className='flex  gap-2 bg-white py-[20px] px-[10px] mx-[20px] my-[20px] rounded-2xl'>
        <button className='flex items-center gap-[10px] bg-[#005456] text-white p-[5px] px-[15px] rounded'>В очереди <span className='bg-white text-black px-[10px] rounded'>12</span></button>
        <button className='flex items-center gap-[10px] bg-[#C3DDFD] text-white p-[5px] px-[15px] rounded'>Принятые <span className='bg-white text-black px-[10px] rounded'>12</span></button>
        <button className='flex items-center gap-[10px] bg-[#FDE8E8] text-black p-[5px] px-[15px] rounded'>Не явились <span className='bg-white text-black px-[10px] rounded'>12</span></button>
        <button className='flex items-center gap-[10px] bg-[#005456] text-white p-[5px] px-[15px] rounded'>Все <span className='bg-white text-black px-[10px] rounded'>12</span></button>
      </div>

      <div className='bg-white m-[20px] rounded-2xl p-[20px]'>

        <div className='flex justify-between items-center my-[20px]'>
          <div className='flex items-center px-[10px] gap-[10px] border border-gray-400 w-[30%] rounded-[10px] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder='Поиск' className='border-none outline-none p-[10px] rounded-lg w-full' />
          </div>
          <div className='w-[15%]'>
            <TextField
              select
              label="Период"
              defaultValue="standard"
              size="small"
               fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "45px" },
                "& .MuiInputLabel-root": { fontSize: "13px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            >
              <MenuItem value="standard">Выбрать</MenuItem>
            </TextField>
          </div>
        </div>

        <table className='w-[100%] my-[20px] text-[13px]'>
          <thead >
            <tr  style={{fontFamily:"Gilroy",size:"13px"}}  className='text-left  text-gray-600 bg-[#F5F7FA]'>
              <td className='p-[15px] rounded-l-2xl'>№</td>
              <td>Дата записи</td>
              <td>ФИО пациента</td>
              <td>Номер телефона</td>
              <td>Статус оплаты</td>
              <td>Статус</td>
              <td>Действия</td>
              <td className='rounded-r-2xl'>Прием</td>
            </tr>
          </thead>
          <tbody className='font-semibold'>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className='bg-[#F5F7FA] '>
              <td className='p-[20px] rounded-l-2xl'>1</td>
              <td className='text-[13px] font-light'>28.04.2025 <br />19:00</td>
              <td>Шабнам Шарипова</td>
              <td>+992 901 09 20 35</td>
              <td className='text-[#0E9F6E]'>25000 c.</td>
              <td>
                <select  style={{fontFamily:"Montserrat-SemiBold",size:"11px"}}  className='bg-[#3F83F8] text-white p-[5px] rounded'>
                  <option value="В ожидании">В ожидании</option>
                </select>
              </td>
              <td className='text-green-700'>
                <button className='bg-white p-2 rounded-full mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                </button>
              </td>
              <td className='text-green-700 rounded-r-2xl'>
                <button className='bg-white p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className='bg-[#F5F7FA] '>
              <td className='p-[20px] rounded-l-2xl'>3</td>
              <td className='text-[13px] font-light'>28.04.2025 <br />19:00</td>
              <td>Шабнам Шарипова</td>
              <td>+992 901 09 20 35</td>
              <td className='text-[#F05252]'>25000 c.</td>
              <td>
                <select style={{fontFamily:"Montserrat-SemiBold",size:"11px"}} className='bg-[#F05252] text-white p-[5px] rounded'>
                  <option className='bg-[#F05252]' value="В ожидании">В ожидании</option>
                </select>
              </td>
              <td className='text-green-700'>
                <button className='bg-white p-2 rounded-full mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                </button>
              </td>
              <td className='text-green-700 rounded-r-2xl'>
                <button className='bg-white p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className='bg-[#F5F7FA] '>
              <td className='p-[20px] rounded-l-2xl'>5</td>
              <td className='text-[13px] font-light'>28.04.2025 <br />19:00</td>
              <td>Шабнам Шарипова</td>
              <td>+992 901 09 20 35</td>
              <td className='text-[#0E9F6E]'>25000 c.</td>
              <td>
                <select  style={{fontFamily:"Montserrat-SemiBold",size:"11px"}}  className='bg-[#0E9F6E] text-white p-[5px] rounded'>
                  <option value="В ожидании">В ожидании</option>
                </select>
              </td>
              <td className='text-green-700'>
                <button className='bg-white p-2 rounded-full mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                </button>
              </td>
              <td className='text-green-700 rounded-r-2xl'>
                <button className='bg-white p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
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

    </div>
  )
}

export default Patients