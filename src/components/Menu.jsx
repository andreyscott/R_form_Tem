import React, { useState } from 'react';
import TemplateModel from './TemplateModel';
import styled from 'styled-components';
import Pagination from './Pagination';
import Loader from './Loader';

const Menu = ({ templates, isLoading, fetchError, textState }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [tempsPerPage, setTempsPerPage] = useState(1770);
    const indexOfLastTemp = currentPage * tempsPerPage;
    const indexOfFirstTemp = indexOfLastTemp - tempsPerPage;
    const currentTemps = templates && templates.slice(indexOfFirstTemp, indexOfLastTemp)
    const totalPages = templates && templates.length / tempsPerPage


    const prev = () => {
        currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const next = () => {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && fetchError && <div style={{ color: "red" }}>{fetchError}</div>}
            {!isLoading && !fetchError &&
                <>
                    <CountAndCheckers className='flex items-center justify-between'>
                        <h3>{textState} Templates</h3>
                        <h2>{templates && templates.length} {templates && templates.length === 1 ? 'template' : 'templates'} </h2>
                    </CountAndCheckers>
                    <ViewScroller>
                        <CardDisplay>
                            {templates && currentTemps.map((template, i) => (
                                <TemplateModel templates={templates} key={i} template={template} i={i} />
                            ))}
                        </CardDisplay>
                    </ViewScroller>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        first={indexOfFirstTemp}
                        previousPage={prev}
                        nextPage={next}
                    />
                </>
            }
        </>
    );
};

const CardDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap:100px 69px;

    @media screen and (max-width: 1200px){
        gap: 69px 20px;
    }

    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 20px;
    }
    @media screen and (max-width: 540px){
        gap: 50px 10px;
    }
   
`
const CountAndCheckers = styled.div`
    margin-bottom: 23px;
    h3{
        font-family: circular-std-book; 
        font-weight: 450;
        font-size: 18px;
        line-height: 23px;
        color: #3F3E3E;

        @media screen and (max-width: 640px){
            font-size: 15px;
        }
    }

    h2 {
        font-family: circular-std-light; 
        font-weight: 450;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        color: #989898;
        @media screen and (max-width: 640px){
            font-size: 12px;
        }
    }
`

const ViewScroller = styled.div`
    width: 100%;
    height:700px;
    overflow-y: scroll;
    margin-right: 20px;
    padding:7px;
    
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background:  transparent; 
    }

    ::-webkit-scrollbar-thumb {
      background: #171616; 
      height: 100px;
      width: 2px;
      border-radius: 10px;
    }
`

export default Menu;

