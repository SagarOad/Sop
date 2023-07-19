import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Styles.css'


import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import NotificationPage from './pages/NotificationPage';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import MainPage from './pages/Dashboard/MainPage';
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
import CertificateUpload from './components/CertificateUpload'
import ChooseSubjects from './components/ChooseSubjects';
import ChooseChapters from './components/ChooseChapters';
import StartQuiz from './components/StartQuiz';
import QuizPaper from './components/QuizPaper';
import Guide from './components/Guide';
import SamplePaper from './components/SamplePaper';
import LeaderBoard from './LeaderBoard';
import Contact from './components/Contact';
import Faq from './components/Faq';
import RegistrationTabs from './components/RegistrationTabs';

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
        <Route path="/mainpage" element={<MainPage />} />
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
        <Route path="/samplepaper" element={<SamplePaper />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/registrationtabs" element={<RegistrationTabs />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/documentupload" element={<UploadDocument />} />
        <Route path="/programregistration" element={<ProgramRegistration />} />
        <Route path="/payment" element={<Challan />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/certificateupload" element={<CertificateUpload />} />
        <Route path="/choosesubject" element={<ChooseSubjects />} />
        <Route path="/choosechapters" element={<ChooseChapters />} />
        <Route path="/startquiz" element={<StartQuiz />} />
        <Route path="/quizpaper" element={<QuizPaper />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </>
  );
}

export default App;
