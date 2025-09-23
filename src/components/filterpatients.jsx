import React, { useState } from 'react'
import { Checkbox, Drawer } from 'antd';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Filterpatients = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>

      <div onClick={showDrawer} className='flex font-light cursor-pointer items-center gap-2 bg-[#005456] text-white p-[8px] rounded text-[13px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>

        <button>Фильтр</button>
        <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
      </div>

      <Drawer
        title={
          <div className="flex justify-between items-center w-full">
            <span style={{ fontSize: "30px", fontWeight: "600" }}>Фильтр</span>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </div>
        }
        closable={false}
        onClose={onClose}
        open={open}
        styles={{
          header: {
            border: 'none',
            padding: '20px',
            marginBottom: '0'
          }
        }}
      >
        <TextField
          select
          label="Приоритет показа "
          defaultValue="standard"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
            "& .MuiInputLabel-root": { fontSize: "15px" },
            "& input": { fontSize: "13px", padding: "8px" },
          }}
        >
          <MenuItem value="standard">Выбрать приоритет показа (по сумме, кол-ву тд)</MenuItem>
        </TextField>
        <div className='flex gap-2 text-[13px] my-[30px] '>
          <div className='w-[50%]'>
            <TextField
              label="Заезд"
              type="date"
              defaultValue={today}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
          <div className='w-[50%]'>
            <TextField
              label="Заезд"
              type="date"
              defaultValue={today}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                "& .MuiInputLabel-root": { fontSize: "15px" },
                "& input": { fontSize: "13px", padding: "8px" },
              }}
            />
          </div>
        </div>
        <div>
          <p className='font-semibold text-2xl mb-[20px]'>Сортировка</p>
          <div className='mt-[20x]'>
            <Checkbox onChange={onChange}>По Атбрибуту</Checkbox>
          </div>
          <div className='my-[20px]'>
            <Checkbox onChange={onChange}>По Отсутствию</Checkbox>
          </div>
          <div>
            <Checkbox onChange={onChange}>По Источнику</Checkbox>
          </div>
        </div>
        <div className='font-semibold flex gap-2 mt-[50px]'>
          <button className='w-full p-[10px] rounded-[10px] text-[#005456] bg-[#F5F7FA]'>Очистить все</button>
          <button className='w-full p-[10px] rounded-[10px] bg-[#005456] text-white'>Применить</button>
        </div>
      </Drawer>

    </div>
  )
}

export default Filterpatients

