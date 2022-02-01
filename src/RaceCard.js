import React, {
    useState,
    useCallback,
    ChangeEvent,
    RefObject,
    createRef,
    FormEvent,
    SetStateAction,
  } from 'react';
  import 'rc-year-calendar/locales/rc-year-calendar.ru';
  import './App.css'
  const RaceCard= (props)=> {

const closeModal=()=>{
    props.closeModal('hiden')
}
const clickButton=(go)=>{
props.onClick(go)
props.closeModal('hiden')

}
    return(
        <div className='modal-dialog'>
               <button className='modal-close' onClick={closeModal} >
            &times;
          </button>
             <div className='modal-header'>Карточка события</div>
          
            <table>
                <tbody>
                <tr>
                <td>
                          Что?
                    </td>
                    <td>
                        {props.name}
                    </td>
                    </tr>
                    <tr>
                <td>
                         Когда?
                    </td>
                    <td>
                        {props.date}
                    </td>
                    </tr>
                    <tr>
                <td>
                         Кто организует?
                    </td>
                    <td>
                        {props.org}
                    </td>
                    </tr>

                    <tr>
                <td>
                         Тип заезда
                    </td>
                    <td>
                        {props.type}
                    </td>
                    </tr>
                   
                </tbody>
            </table>
            <div>
                    <button className='button-yes' onClick={() => clickButton(1)}  >Еду</button>
              
                    <button className='button-xz' onClick={() => clickButton(2)}  >Возможно</button>
                
                    <button className='button-no' onClick={() => clickButton(3)} >Не еду</button>
                    </div>
        </div>
    )
  }
  export default RaceCard