
import ChartThree from '../../components/ChartThree.tsx';
import NotificationBar from '../../components/NotificationBar.tsx';
import StudentCard from '../../components/StudentCard.tsx';
import SubjectCard from '../../components/SubjectCard.tsx';
import DefaultLayout from '../../layout/DefaultLayout.tsx';

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div className="h-[200px] flex items-center rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h1 className='text-[42px] font-medium'><span className='text-[#00A651]'>STUDENT</span> DASHBOARD</h1>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <StudentCard />
        <NotificationBar />
        </div>
        <div className='my-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <SubjectCard subject='En' title="Enlgish" />
        <SubjectCard subject='SS' title='Pakistan Studies'/>
        <SubjectCard subject='UR' title='Basic Math'/>
        <SubjectCard subject='GN' title='General Knowledge'/>
        <SubjectCard subject='CT' title='Creative Thinking'/>
        <SubjectCard subject='VI' title='Verbal Intelligence'/>
        <SubjectCard subject='NVI' title='Non-verbal Intelligence'/>
        <SubjectCard subject='M' title='Mechanical'/>
        <SubjectCard subject='Q/M' title='Quick/Mental'/>
        </div>
        <div className=''>
        <ChartThree />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
