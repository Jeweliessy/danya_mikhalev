import './App.css'
import Header from './Components/Header/Header'
import SignUp from './Components/Reg/reg'
import Auth1 from './Components/Auth1/auth1'
import Qr from './Components/Qr/qr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HelpPage from './Page/help'
import MainPage from './Page/MainPage/MainPage'
import InfoPage from './Page/infoPage'
import Museum from './Page/museum'
import BookingForm from './Components/Bron/Bron'

function App() {
  return (
    <div>
      <div className="main1">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Auth1 />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/" element={<InfoPage />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            <Route path="/museum" element={<Museum />}></Route>
            <Route path="/bron" element={<BookingForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      <Qr />
    </div>
  )
}

export default App
