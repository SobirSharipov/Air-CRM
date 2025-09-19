import React from 'react'
import img from '..//assets/img1.png'
import img1 from '..//assets/img1 (12).png'
import { Link } from 'react-router'

const Card = () => {
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
        </div>
    )
}

export default Card