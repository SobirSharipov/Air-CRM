import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import img1 from '../../assets/Frame.svg'
import img2 from '../../assets/img1 (13).png'
import img from '../../assets/img1.png'
import { Link } from 'react-router';
import Profile from '../../components/profile';
import Cog from "../../components/cog"

const Numbers = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>

      <div className='flex gap-[5px] font-light text-gray-500 items-center pt-[8px]  pb-[20px] ml-[20px]'>
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
      </div>

      <div className='flex justify-between items-center px-[20px] py-[10px] '>
        <p style={{fontFamily:"Montserrat-SemiBold",fontSize:"36px"}}>Список номеров</p>

        <div className='flex items-center gap-2'>
          <Link to="/newNumber">
            <button className='bg-[#005456] cursor-pointer text-white p-[5px] px-[10px] rounded'>+ Новый номер</button>
          </Link>
          <Cog />
          <button className='text-[#005456] cursor-pointer bg-white border border-gray-300 p-[5px] px-[10px] rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </button>
          <Profile bgcolor={"white"} color={"#005456"} />
        </div>

      </div>

      <div className='grid grid-cols-4 gap-[20px] px-[20px] text-[13px] my-[20px] '>
        <div className='bg-white rounded-2xl cursor-pointer'>
          <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
            <img src={img} alt="" />
            <div>
              <p style={{ fontFamily: "Inter-Bold" }} className=' text-[13px]'>Номера стандарт</p>
              <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
            </div>
          </div>
          <div className='grid grid-cols-2 p-[20px]'>
            <p>Операций</p>
            <p>К освобождению</p>
            <div className='flex itcems-center gap-[10px]'>
              <img src={img1} alt="" />
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>40%</p>
            </div>
            <p className='font-normal text-[14px]'> <span style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>12</span> мест </p>
          </div>
        </div>

        <div className='bg-white rounded-2xl cursor-pointer'>
          <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
            <img src={img} alt="" />
            <div>
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[13px]'>Номера Люкс</p>
              <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
            </div>
          </div>
          <div className='grid grid-cols-2 p-[20px]'>
            <p>Операций</p>
            <p>К освобождению</p>
            <div className='flex itcems-center gap-[10px]'>
              <img src={img1} alt="" />
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>40%</p>
            </div>
            <p className='font-normal text-[14px]'> <span style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>12</span> мест </p>
          </div>
        </div>

        <div className='bg-white rounded-2xl cursor-pointer'>
          <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
            <img src={img} alt="" />
            <div>
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[13px]'>Номера Вып</p>
              <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
            </div>
          </div>
          <div className='grid grid-cols-2 p-[20px]'>
            <p>Операций</p>
            <p>К освобождению</p>
            <div className='flex itcems-center gap-[10px]'>
              <img src={img1} alt="" />
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>40%</p>
            </div>
            <p className='font-normal text-[14px]'> <span style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>12</span> мест </p>
          </div>
        </div>

        <div className='bg-white rounded-2xl cursor-pointer'>
          <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
            <img src={img} alt="" />
            <div>
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[13px]'>Номера Аппарты</p>
              <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
            </div>
          </div>
          <div className='grid grid-cols-2 p-[20px]'>
            <p>Операций</p>
            <p>К освобождению</p>
            <div className='flex itcems-center gap-[10px]'>
              <img src={img1} alt="" />
              <p style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>40%</p>
            </div>
            <p className='font-normal text-[14px]'> <span style={{ fontFamily: "Inter-Bold" }} className='text-[14px]'>12</span> мест </p>
          </div>
        </div>
       

      </div>

      <div className='bg-white rounded-2xl p-[20px] m-[20px]'>

        <div className='flex justify-between items-center mt-[20px] '>

          <div className='flex items-center px-[10px] gap-[10px] border border-gray-400 w-[30%] rounded-[10px] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder='Поиск' className='border-none outline-none p-[8px] rounded-lg w-full' />
          </div>

          <div className='flex gap-[10px]'>

            <div className='flex gap-[10px] cursor-pointer bg-[#F5F7FA] p-[10px] px-[20px] rounded-[10px] text-[13px]'>
              <img src={img2} alt="" />
              <button>Импорт</button>
            </div>
    
            <div className='flex gap-[10px] cursor-pointer bg-[#F5F7FA] p-[10px] px-[20px] rounded-[10px] text-[13px]'>
              <img src={img2} alt="" />
              <button>Экспорт</button>
            </div>

          </div>

        </div>

        <table className="w-[100%] mt-[40px] text-[13px] text-left border-collapse">
          <thead style={{fontFamily:"Gilroy-Ligght"}}>
            <tr className="bg-gray-50  text-gray-500 ">
              <th className="px-3 py-[15px] font-medium rounded-l-2xl">№</th>
              <th className="">Тариф</th>
              <th className="w-[13%]">Кол-во заселений</th>
              <th className="w-[8%]">Цена</th>
              <th className="">Корпус</th>
              <th className="">Этаж</th>
              <th className="w-[10%] px-[10px]">Тип</th>
              <th className="">Мест</th>
              <th className="">Баланс</th>
              <th className="">К оплате</th>
              <th className="">Статус</th>
              <th className=" rounded-r-2xl">Действия</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className="bg-gray-50">
              <td className="font-bold px-3 py-5 rounded-l-2xl">1</td>
              <td style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}} className="">Стандарт</td>
              <td className="font-bold px-[10px]">200</td>
              <td className="font-bold">200 с</td>
              <td className="font-bold">25</td>
              <td className="font-bold">25</td>
              <td className="font-bold">Стандарт</td>
              <td className="font-bold">5</td>
              <td className="font-bold text-green-600">2</td>
              <td className="font-bold text-red-500">3</td>
              <td className="">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="success"
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              </td>
              <td className='text-[#0E9F6E] rounded-r-2xl'>
                <Link to={'/Editnumber'}>
                  <button className='bg-white cursor-pointer p-2 rounded-full mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                </Link>
                <button className='bg-white text-[#005456] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className="bg-gray-50">
              <td className="font-bold px-3 py-5 rounded-l-2xl">1</td>
              <td style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className="">Стандарт</td>
              <td className="font-bold px-[10px]">200</td>
              <td className="font-bold">200 с</td>
              <td className="font-bold">25</td>
              <td className="font-bold">25</td>
              <td className="font-bold">Стандарт</td>
              <td className="font-bold">5</td>
              <td className="font-bold text-green-600">2</td>
              <td className="font-bold text-red-500">3</td>
              <td className="">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="success"
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              </td>
              <td className='text-[#0E9F6E] rounded-r-2xl'>
                <Link to={'/Editnumber'}>
                  <button className='bg-white cursor-pointer p-2 rounded-full mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                </Link>
                <button className='bg-white text-[#005456] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className="bg-gray-50">
              <td className="font-bold px-3 py-5 rounded-l-2xl">1</td>
              <td style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className="">Стандарт</td>
              <td className="font-bold px-[10px]">200</td>
              <td className="font-bold">200 с</td>
              <td className="font-bold">25</td>
              <td className="font-bold">25</td>
              <td className="font-bold">Стандарт</td>
              <td className="font-bold">5</td>
              <td className="font-bold text-green-600">2</td>
              <td className="font-bold text-red-500">3</td>
              <td className="">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="success"
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              </td>
              <td className='text-[#0E9F6E] rounded-r-2xl'>
                <Link to={'/Editnumber'}>
                  <button className='bg-white cursor-pointer p-2 rounded-full mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                </Link>
                <button className='bg-white text-[#005456] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className="bg-gray-50">
              <td className="font-bold px-3 py-5 rounded-l-2xl">1</td>
              <td style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className="">Стандарт</td>
              <td className="font-bold px-[10px]">200</td>
              <td className="font-bold">200 с</td>
              <td className="font-bold">25</td>
              <td className="font-bold">25</td>
              <td className="font-bold">Стандарт</td>
              <td className="font-bold">5</td>
              <td className="font-bold text-green-600">2</td>
              <td className="font-bold text-red-500">3</td>
              <td className="">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="success"
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              </td>
              <td className='text-[#0E9F6E] rounded-r-2xl'>
                <Link to={'/Editnumber'}>
                  <button className='bg-white cursor-pointer p-2 rounded-full mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                </Link>
                <button className='bg-white text-[#005456] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className='bg-white p-[20px]'> <td className='p-[10px]'></td></tr>
            <tr className="bg-gray-50">
              <td className="font-bold px-3 py-5 rounded-l-2xl">1</td>
              <td style={{fontFamily:"Gilroy-Ligght",fontSize:"13px"}}  className="">Стандарт</td>
              <td className="font-bold px-[10px]">200</td>
              <td className="font-bold">200 с</td>
              <td className="font-bold">25</td>
              <td className="font-bold">25</td>
              <td className="font-bold">Стандарт</td>
              <td className="font-bold">5</td>
              <td className="font-bold text-green-600">2</td>
              <td className="font-bold text-red-500">3</td>
              <td className="">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="success"
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              </td>
              <td className='text-[#0E9F6E] rounded-r-2xl'>
                <Link to={'/Editnumber'}>
                  <button className='bg-white cursor-pointer p-2 rounded-full mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                </Link>
                <button className='bg-white text-[#005456] p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Numbers