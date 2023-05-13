'use client'

import { useState, useCallback,useEffect, useRef } from 'react';
import TablePagination from '../components/table/TablePagination';
import PokemonTable from '../components/table/PokemonTable';
import Loading from '../components/Loading';
import { PaginationFetchProps2 } from '../../lib/interfaces/types';

function Page() {
    const stringLenght = 12;
    const initialData = [{title: "-",webpageUrl:"-",provider: { name : "-"} }];
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);
    const [data, setData] = useState(initialData);
    const [totalItems, setTotalItems] = useState(1);
    const [loading, setLoading] = useState(false);
    const fetchIdRef = useRef(0);
    
    const getPageData = useCallback((page: any)=>{
      const fetchId = ++fetchIdRef.current;

      if (fetchId === fetchIdRef.current) {

        fetchApiData2({
          page: page,
          pageSize: pageSize
        });
      }
    },[]);

    const fetchApiData2 = async ({ page ,  pageSize} : PaginationFetchProps2) => {
      try {

        setCurrentPage(page);
        setLoading(true);

        const url = 'https://pokeapi.co/api/v2/ability/?limit='+ pageSize+'&offset=' + (page * pageSize);

        const options = {
          method: 'GET',
        };

        const response = await fetch(url, options);
        const result = await response.json();

        setData(result.results);
        setTotalItems(result.count);
        setLoading(false);
      } catch (e) {
        console.log("Error while fetching", e);
        setLoading(false);
        setData(initialData);
        setTotalItems(1); 
      }
    };


  return (
    <>
    
    <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Pokemons</h1>
      </div>
    </header>

    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
       {/* Your content */}   
       <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      {!loading ? 

                        <PokemonTable data={data} /> 
                        : 
                        <Loading/>
                        }
                    </div>
                </div>
                <TablePagination totalItems={totalItems } pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} getPageData={getPageData} defaultData={initialData}/>
            </div>
            
       </div>       
      </div>
     </main>
     </>
  );
}
 
export default Page;