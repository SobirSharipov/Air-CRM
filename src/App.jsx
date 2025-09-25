import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './app/Home/Home'
import Layout from './app/layout/layout'
import Patients from './app/Patients/Patients'
import Numbers from './app/Numbers/Numbers'
import Calendar from './app/Calendar/Calendar'
import Residents from './app/Residents/Residents'
import NewNumber from './app/New_Number/newNumber'
import Editnumber from './app/Edit_number/Editnumber'
import Applyplans from './app/Applyplans/Applyplans'
import Applyfields from './app/Applyfields/Applyfields'
import Listpatients from './app/Listpatients/Listpatients'
import Newbooking from './app/New_booking/newbooking'
import Companies from './app/Companies/companies'
import Newentry from './app/New entry/Newentry'
import Settings from './app/Settings/settings'
import Services from './app/Services/services'
import Finance from './app/Finance/finance'
import Staff from './app/Staff/staff'
import Store from './app/Store/store'
import Info from './app/Info/info'

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
          <Route path="Store" element={<Store />} />
          <Route path="Services" element={<Services />} />
          <Route path="Finance" element={<Finance />} />
          <Route path="Companies" element={<Companies />} />
          <Route path="Staff" element={<Staff />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App