'use client'
import MyLinearChart from '@/app/components/mycharts/MyLinearChart';
import MyBarChart from '../components/mycharts/MyBarChart';




function Page() {

    const data = [{name: 'Pikachu', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Charmander', uv: 800, pv: 2400, amt: 2400},
    {name: 'Psyduck', uv: 500, pv: 2400, amt: 2400}];


return (
    <>
    
    <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Charts with Echart React components </h1>
      </div>
    </header>

    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <MyLinearChart />
        <MyBarChart />
      </div>
     </main>
     </>
  );


}

export default Page;