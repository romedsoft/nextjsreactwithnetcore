'use client'

import { useEffect } from "react";
import { PaginationProps } from "../../../lib/interfaces/types";

const TablePagination = ({ currentPage  , totalItems , pageSize ,  getPageData, defaultData } : PaginationProps) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
      pages.push(i);
    }

    useEffect(() => {
        getPageData && getPageData(currentPage)
    },[getPageData,currentPage])


    return (
        <>
        
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li key="-1">
                        <button
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        onClick={() => currentPage > 1 && getPageData(currentPage - 1)}>
                            Previous
                        </button>
                    </li>

                    {pages.map((page, index) => (
                        
                    page == currentPage ? <li key={index}
                    aria-current="page"
                    className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                    >
                        <button onClick={() => getPageData(page)}>{page}</button>
                    </li> : <li key={index}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    >
                        <button onClick={() => getPageData(page)}>{page}</button>
                    </li>
                    ))}
                    <li key="last">
                        <button
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            onClick={() => currentPage < Math.ceil(totalItems / pageSize) && getPageData(currentPage + 1)}>
                                Next
                        </button>
                    </li>
                </ul>
            </nav>
        
        </>
    );
};

export default TablePagination;