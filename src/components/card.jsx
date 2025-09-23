import React from 'react'
import img from '..//assets/img1.png'
import img1 from '..//assets/Frame.svg'
import { Link } from 'react-router'

const Card = ({ color, text, col }) => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-[20px] p-[20px] text-[13px]'>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p style={{fontFamily:"Inter-Bold"}} className=' text-[13px]'>Номера стандарт</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>40%</p>
                        </div>
                        <p className='font-normal text-[14px]'> <span style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>12</span> мест </p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p style={{fontFamily:"Inter-Bold"}} className='text-[13px]'>Номера Люкс</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>40%</p>
                        </div>
                        <p className='font-normal text-[14px]'> <span style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>12</span> мест </p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl cursor-pointer'>
                    <div className='flex items-center gap-[10px] pt-[20px] px-[30px]'>
                        <img src={img} alt="" />
                        <div>
                            <p style={{fontFamily:"Inter-Bold"}} className='text-[13px]'>Номера Вып</p>
                            <p className='font-semibold'>123 <span className='font-normal'>Мест свободно</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 p-[20px]'>
                        <p>Операций</p>
                        <p>К освобождению</p>
                        <div className='flex itcems-center gap-[10px]'>
                            <img src={img1} alt="" />
                            <p style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>40%</p>
                        </div>
                        <p className='font-normal text-[14px]'> <span style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>12</span> мест </p>
                    </div>
                </div>

                <Link to="/Newbooking" className='bg-white rounded-2xl cursor-pointer  flex flex-col justify-center p-[10px] '>
                    <p style={{fontFamily:"Inter-Bold"}} className='text-[14px]'>Новое бронирование</p>
                    <p className='text-[60px] font-black mx-[10px]'>+</p>
                </Link>

            </div>

            <div className="flex flex-nowrap text-[12px] font-semibold gap-[8px] bg-white p-[15px] mx-[20px] rounded-2xl">
                <Link to={'/'} className='flex items-center bg-[#005456] text-white py-[6px] px-[8px] rounded'>
                    <button className='flex gap-2'>Все <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                </Link>
                <button className='flex items-center gap-[8px] bg-[#005456] text-white py-[6px] px-[8px] rounded'>Новые <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                <Link
                    to="/residents"
                    className="flex items-center gap-[8px] text-black py-[6px] px-[8px] rounded"
                    style={{ backgroundColor: color, color: text }}
                >
                    <button className="flex gap-2">
                        Проживающие <span className="bg-white text-black px-[8px] rounded">12</span>
                    </button>
                </Link>
                <button className='flex items-center gap-[8px] bg-[#DEF7EC] text-black py-[6px] px-[8px] rounded'>Ожидают заселения <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                <button className='flex items-center gap-[8px] bg-[#6B7280] text-white py-[6px] px-[8px] rounded'>Ожидают выселения <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                <button className='flex items-center gap-[8px] bg-[#FEECDC] text-black py-[6px] px-[8px] rounded'>Не оплачено <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                <button className='flex items-center gap-[8px] bg-[#FDE8E8] text-black py-[6px] px-[8px] rounded'>Выехали <span className='bg-white text-black px-[8px] rounded'>12</span></button>
                <button style={{ backgroundColor: col, color: text }} className='flex items-center gap-[8px] text-black py-[6px] px-[8px] rounded'>Отменено <span className='bg-white text-black px-[8px] rounded'>12</span></button>
            </div>

        </div>
    )
}

export default Card