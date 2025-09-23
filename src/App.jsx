import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './app/Home/Home'
import Layout from './app/layout/layout'
import Patients from './app/Patients/Patients'
import Numbers from './app/Numbers/Numbers'
import Calendar from './app/Calendar/Calendar'
import Residents from './app/Residents/Residents'
import NewNumber from './app/New Number/newNumber'
import Editnumber from './app/Edit number/Editnumber'
import Applyplans from './app/Applyplans/Applyplans'
import Applyfields from './app/Applyfields/Applyfields'
import Listpatients from './app/Listpatients/Listpatients'
import Newentry from './app/New entry/Newentry'
import Info from './app/Info/info'
import Newbooking from './app/New booking/newbooking'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="patients" element={<Patients />} />
          <Route path="numbers" element={<Numbers />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="newbooking" element={<Newbooking />} />
          <Route path="residents" element={<Residents />} />
          <Route path="newNumber" element={<NewNumber />} />
          <Route path="Editnumber" element={<Editnumber />} />
          <Route path="Applyplans" element={<Applyplans />} />
          <Route path="Applyfields" element={<Applyfields />} />
          <Route path="Listpatients" element={<Listpatients />} />
          <Route path="Newentry" element={<Newentry />} />
          <Route path="Info" element={<Info />} />

          
        </Route>
      </Routes>
    </div>
  )
}

export default App