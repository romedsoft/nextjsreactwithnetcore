export interface PaginationProps {
    totalItems: number;
    pageSize : number
    setCurrentPage: any;
    getPageData : any;
    currentPage: number;
    defaultData : any[];
  }

  export interface PaginationFetchProps{
    limit :number,
    skip :number
  }

  export interface PaginationFetchProps2{
    pageSize :number,
    page :number
  }

