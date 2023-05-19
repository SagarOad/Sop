import DefaultLayout from './layout/DefaultLayout';
import Breadcrumb from './components/Breadcrumb';
import Classes from './components/Classes';
import ClassData from './ClassData';

const MyQuizes = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Quizes" />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
        {ClassData.map((data) => (
          <Classes key={data.id} heading={data.name} />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default MyQuizes;
