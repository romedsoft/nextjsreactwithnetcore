import Link from 'next/link';
 
function Page() {
  return (
    <>
    <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Users</h1>
      </div>
    </header>

    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {/* Your content */}   
              <ul>
      <li>
        <Link className='text-green-600 hover:text-black' href="/users/1">Go to users/[uid].tsx</Link>
      </li>

    </ul>          
      </div>
     </main>
     </>
  );
}
 
export default Page;