import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPets } from "../../Redux/actions";
import { createSearchParams } from "react-router-dom";



const Pagination = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handlerPrev = () => {
    if (state.pets.prevPage === null) return;
    let p = state.pets.params;
    p.page = state.pets.prevPage;
   dispatch(getPets(`?${createSearchParams(p)}`));
  };

  const handlerNext = () => {
    if (state.pets.nextPage === null) return;
    
    let p = state.pets.params;
    p.page = state?.pets?.nextPage;
    dispatch(getPets(`?${createSearchParams(p)}`));
   
  };
  
  const handlerStart = () =>{
    if (state.pets.prevPage === null) return;
    let p = state.pets.params;
    p.page = 0;
    dispatch(getPets(`?${createSearchParams(p)}`));
  }
  
  const handlerEnd = () =>{
    if (state.pets.nextPage === null) return;
    let p = state.pets.params;
    p.page = Math.ceil(state.pets.count / state.pets.pageSize -1);
    dispatch(getPets(`?${createSearchParams(p)}`));
  }
  

  return (
    <div>
     
      <div class="flex items-center justify-center ">
        <div class="flex justify-center items-center space-x-4">
        <div
            onClick={handlerStart}
            class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          >
            inicio
          </div>
          <div
            onClick={handlerPrev}
            class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          >
            Prev
          </div>
          <div class="text-slate-500">
            {state?.pets?.currentPage} / {state.pets.totalPage}
          </div>
          <div
            onClick={() => handlerNext()}
            class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          >
            Next
          </div>
          <div
            onClick={handlerEnd}
            class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          >
            fin
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;


