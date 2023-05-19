import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import NotificationPage from './pages/NotificationPage';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import MySkills from './components/MySkills';
import MyDocuments from './components/MyDocuments';
import MyRecords from './components/MyRecords';
import MyExams from './components/MyExams';
import MyQuizes from './MyQuizes';
import UploadDocument from './components/UploadDocument';
import EducationHistory from './components/EducationHistory';
import StudentRegistration from './components/StudentRegistration';
import ProgramRegistration from './components/ProgramRegistration';
import Challan from './components/Challan';
import Verification from './components/Verification';


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<ECommerce />} />
        <Route path="/calendar" element={<NotificationPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/notifications-page" element={<NotificationPage />} />
        <Route path="/myeducation/educationhistory" element={<EducationHistory />} />
        <Route path="/myeducation/myskills" element={<MySkills />} />
        <Route path="/myeducation/mydocuments" element={<MyDocuments />} />
        <Route path="/myeducation/myrecords" element={<MyRecords />} />
        <Route path="/myeducation/myexams" element={<MyExams />} />
        <Route path="/myeducation/myquizes" element={<MyQuizes />} />
        <Route path="/forms/form-elements" element={<FormElements />} />
        <Route path="/forms/form-layout" element={<FormLayout />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/documentupload" element={<UploadDocument />} />
        <Route path="/programregistration" element={<ProgramRegistration />} />
        <Route path="/payment" element={<Challan />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </>
  );
}

export default App;
