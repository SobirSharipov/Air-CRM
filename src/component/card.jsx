import React from 'react'
import img from '..//assets/img1.png'
import img1 from '..//assets/img1 (12).png'
import { Link } from 'react-router'

const Card = ({ color, text, col }) => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-[20px] p-[20px] text-[13px]'>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Номера стандарт</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p className='font-semibold'>40%</p>
                        </div>
                        <p className='font-semibold'>12  мест</p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Номера Люкс</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p className='font-semibold'>40%</p>
                        </div>
                        <p className='font-semibold'>12  мест</p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Номера Вып</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p className='font-semibold'>40%</p>
                        </div>
                        <p className='font-semibold'>12  мест</p>
                    </div>
                </div>

                <Link to="/newBron" className='bg-white rounded-2xl cursor-pointer font-semibold text-[15px] flex flex-col justify-center p-[10px] gap-[10px]'>
                    <p>Новое бронирование</p>
                    <p className='text-[50px] font-black mx-[20px]'>+</p>
                </Link>

            </div>

            <div className='flex text-[12px] font-semibold  gap-[5px] bg-white p-[20px] mx-[20px] rounded-2xl'>
                <Link to={'/'} className='flex items-center  bg-[#005456] text-white p-[5px] px-[15px] rounded'>
                    <button className='flex gap-2'>Все <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                </Link>
                <button className='flex items-center gap-[10px] bg-[#005456] text-white p-[5px] px-[15px] rounded'>Новые <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                <Link
                    to="/residents"
                    className="flex items-center gap-[10px] text-black p-[5px] px-[15px] rounded"
                    style={{ backgroundColor: color, color: text }}
                >
                    <button className="flex gap-2">
                        Проживающие <span className="bg-white text-black px-[10px] rounded">12</span>
                    </button>
                </Link>

                <button className='flex items-center gap-[10px] bg-[#DEF7EC] text-black p-[5px] px-[15px] rounded'>Ожидают заселения <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                <button className='flex items-center gap-[10px] bg-[#6B7280] text-white p-[5px] px-[15px] rounded'>Ожидают выселения <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                <button className='flex items-center gap-[10px] bg-[#FEECDC] text-black p-[5px] px-[15px] rounded'>Не оплачено <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                <button className='flex items-center gap-[10px] bg-[#FDE8E8] text-black p-[5px] px-[15px] rounded'>Выехали <span className='bg-white text-black px-[10px] rounded'>12</span></button>
                <button style={{ backgroundColor: col, color: text }} className='flex items-center gap-[10px]  text-black p-[5px] px-[15px] rounded'>Отменено <span className='bg-white text-black px-[10px] rounded'>12</span></button>
            </div>
        </div>
    )
}

export default Card