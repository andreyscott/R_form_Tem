import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'


const SelectBox = ({ options, newSelected, label, onClick }) => {
    const [selected, setSelected] = useState(newSelected)
    const [isDropped, setIsDropped] = useState(false)
    const optionsRef = useRef()


    const renderOptions = options !== null && options.map((val, i) =>
        <h5 key={i} onClick={() => onClick(val, setSelected(val.option), setIsDropped(!isDropped))}>{val.option}</h5>
    )


    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })

    const handleClickOutside = (event) => {
        optionsRef.current && !optionsRef.current.contains(event.target) && setSelected(newSelected)
    };

    return (
        <SelectBoxWrapper ref={optionsRef}>
            <Label>{label}</Label>
            <SelectBoxContainer onClick={() => setIsDropped(!isDropped)}>
                <h5>{selected}</h5>
                <img className='sm:w-4 w-2' src="./assets/images/drop-chevron.png" alt="drop-chevron-formplus" />
            </SelectBoxContainer>

            {isDropped && <Dropdown>
                {renderOptions}
            </Dropdown>
            }
        </SelectBoxWrapper>
    )
}

const SelectBoxWrapper = styled.div`
    position: relative;
    width: 160px;

    @media screen and (max-width: 640px){
       width: 140px;
    }
    @media screen and (max-width: 540px){
       width: 110px;
       font-size: 14px;
    }
    @media screen and (max-width: 400px){
       width: 100px;
       font-size: 12px;
    }

`
const SelectBoxContainer = styled.div`
    width: 100%;
    border: 0.5px solid #C4C4C4;
    padding: 10px 15px 11px 23px;
    display: flex;
    border-radius: 2px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (max-width: 540px){
        padding: 7px 10px 6px 10px;
    }
    
`

const Label = styled.label`
    position: absolute;
    background: #fff;
    top:-7px;
    left: 22px;
    padding: 0 2px;
    font-family: circular-std-light;   
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.01em;
    color: #8F8B8B;

    @media screen and (max-width: 540px){
      left: 9px;
      font-size: 10px;
    }
`

const Dropdown = styled.div`
    border: 0.5px solid #C4C4C4;
    background: #fff;
    position: absolute;
    width: 100%;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

    h5 {
        padding:5px 15px 6px 23px;
        text-align: left !important;
        transition: all .2s ease-in-out;
        font-family: circular-std-book !important;
        color: #000 !important;

        &:hover{
            cursor: pointer;
            transform: scale(0.98)
        }

        @media screen and (max-width: 540px){
        padding: 7px 10px 6px 10px;
        white-space: nowrap;
    }
    }
    h5:nth-child(even){
        background: #f3f3f3;
    }
`

export default SelectBox
