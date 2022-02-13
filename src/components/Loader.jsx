import React from 'react'
import styled from 'styled-components';

const Loader = () => {
    const createLoaders = () => {
        const loaders = [];

        for (let i = 1; i < 50; i++) {
            loaders.push(
                <div key={i} className='placeholder-loader shimmer'>
                    <h1></h1>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h6></h6>
                </div>
            )
        }
        return loaders
    }

    return (
        <>  <LoaderScroll>
            <div className='placeholder-container'>
                {createLoaders()}
            </div>
        </LoaderScroll>
        </>
    )
}

const LoaderScroll = styled.div`
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

export default Loader