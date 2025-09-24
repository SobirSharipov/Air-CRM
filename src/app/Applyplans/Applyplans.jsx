import React from 'react'
import Cog from '../../components/cog'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Profile from '../../components/profile'

const Applyplans = () => {
  return (
    <div>

      <div className='flex gap-[10px] font-light text-gray-600 items-center pt-[5px] px-[20px]'>
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

        <p>Общее редактирование</p>
      </div>

      <div className='flex justify-between items-center px-[30px] pt-[20px]'>
        <p className='font-semibold text-[36px]'>Применение настроек для всех тарифов</p>
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

      <div className='flex gap-4 items-start m-[20px]'>

        <div className='w-[40%] bg-white p-[20px] rounded-2xl'>
          <p className='font-semibold text-2xl'>Выбрать тарификацию</p>
          <div className='my-[20px]'>
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
              <MenuItem value="premium">Премиум</MenuItem>
              <MenuItem value="vip">VIP</MenuItem>
            </TextField>
          </div>
          <div className='flex font-semibold gap-2'>
            <button className='p-[10px] cursor-pointer bg-[#1D272F1A] rounded-[10px] w-full'>Отмена</button>
            <button className='p-[10px] cursor-pointer bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
          </div>
        </div>

        <div className='bg-white w-[58%] p-[20px] rounded-2xl'>
          <div className='flex justify-between my-[20px]'>
            <p className='font-semibold text-2xl'>Время заезда и выезда</p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='flex gap-2'>
            <div className='w-[50%]'>
              <TextField
                label="Время заезда"
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
                label="Время заезда"
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
          <div>
            <p className='font-semibold text-2xl my-[20px]'>Стоимость</p>
            <div className='flex gap-2'>
              <div className='w-[50%]'>
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
              <div className='w-[50%]'>
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
          </div>
          <div>
            <p className='font-semibold text-2xl my-[20px]'>Хаускипинг (уборка) </p>
            <TextField
              select
              label="Периодичность уборки"
              defaultValue="standard"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "15px", padding: "8px" },
              }}
            >
              <MenuItem value="standard">Ежедневно</MenuItem>
              <MenuItem value="premium">Премиум</MenuItem>
              <MenuItem value="vip">VIP</MenuItem>
            </TextField>
          </div>
          <div className='flex gap-2 font-semibold mt-[20px]'>
            <button className='p-[10px] cursor-pointer bg-[#1D272F1A] rounded-[10px] w-full'>Отмена</button>
            <button className='p-[10px] cursor-pointer bg-[#005456] text-white rounded-[10px] w-full'>Сохранить</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Applyplans