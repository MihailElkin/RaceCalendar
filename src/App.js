import React, {
  useState,
} from 'react';
import Calendar from 'rc-year-calendar';
import { connect } from "react-redux"
import 'rc-year-calendar/locales/rc-year-calendar.ru';
import './App.css'
import { chooseRace, onlyChoose, clear } from './store'
import RaceCard from './RaceCard';
import html2canvas from 'html2canvas';
import Select from 'react-select';
import { AiFillEdit } from "react-icons/ai";
const RaceCalendar = (props) => {
  const [tooltip, setTooltip] = useState()
  const [onlyChoose, setOnlyChoose] = useState(false)
  const [tooltipClass, setTooltipClass] = useState('hiden')
  const [tooltipHelpClass, setTooltipHelpClass] = useState('hiden')
  const [targetElem, setTargetElem] = useState()
  const [go, setGo] = useState(0)
  const [raceList, setRaceList] = useState()
  const [raceListFilter, setRaceListFilter] = useState({ yes: true, xz: true, no: false })
  const [race, setRace] = useState({
    date: '',
    org: '',
    name: '',
    type: '',
    id: ''
  })
  const [raceCardClass, setRaceCardClass] = useState('hiden')
  const options = [
    { value: '1', label: 'Еду' },
    { value: '2', label: 'Возможно' },
    { value: '3', label: 'Не еду' }
  ]
  const onMouseOn = (date) => {

    setTargetElem(date.element)
    if (date.events.length != 0) {

      setTooltip(date.events.map((e) => {
        return (<p>{e.name}</p>)
      }))
      setTooltipClass('tooltip')
    }
  }
  const onMouseOff = (date) => {
    setTooltipClass('hiden')
  }
  React.useEffect(() => {
    if (tooltip) {
      const tooltipElement = document.getElementById('tooltip')
      const coords = targetElem.getBoundingClientRect();
      let left = coords.left + 200 > document.documentElement.clientWidth ? coords.left - 300 - (targetElem.offsetWidth - tooltipElement.offsetWidth) / 2 : coords.left +50+ (targetElem.offsetWidth - tooltipElement.offsetWidth) / 2;
      if (left < 0) left = 0;

      let top = coords.top - tooltipElement.offsetHeight - 5;
      if (top < 0) {
        top = coords.top + targetElem.offsetHeight + 5;
      }

      tooltipElement.style.left = left + 'px';
      tooltipElement.style.top = top + 'px';
    }

  }, [tooltip]);


  const onMouseClick = (date) => {
    const newRaces = date.events.filter((e) => {
      if (e.go == 0) {
        return e
      }
      else return
    })
    setRace({
      date: newRaces[0].startDate.toLocaleDateString(),
      org: newRaces[0].org,
      name: newRaces[0].name,
      type: newRaces[0].type,
      id: newRaces[0].id,
      color: newRaces[0].color
    })
    setRaceCardClass('modal')
  }
  const onEdit = (id) => {

    const newRaces = props.raceData.filter((e)=>{
      if (e.id==id){
        return e
      }
      else return
    })

    setRace({
      date: newRaces[0].startDate.toLocaleDateString(),
      org: newRaces[0].org,
      name: newRaces[0].name,
      type: newRaces[0].type,
      id: newRaces[0].id,
      color: newRaces[0].color
    })
    setRaceCardClass('modal')
  }



  React.useEffect(() => {
    if (raceCardClass == 'hiden') {
      props.chooseRace(race.id, go)

      setRaceList(props.raceData.filter((e) => {
        if ((e.go == 1 && raceListFilter.yes) || (e.go == 2 && raceListFilter.xz) || (e.go == 3 && raceListFilter.no)) {
          return e
        }
        else return
      }).map(
        (e) => 
<p key={e.id} style={{ borderBottom: '2px solid ' + e.color, width: 'fit-content' }}>{e.startDate.toLocaleDateString() + (e.go == 1 ? '   Еду   ' : e.go == 2 ? '   Возможно   ' : '    Не еду   ') + e.name}<button className='buttonEdit' onClick={()=>onEdit(e.id)}><AiFillEdit/></button> </p>
      ))
    }
  }, [raceCardClass, raceListFilter]);
  const clickClear = () => {
    props.clear()
    setRaceList(<></>)
  }
  const clickShowChoose = () => {
   // props.onlyChoose(!onlyChoose)
    setOnlyChoose(!onlyChoose)

  }
  const clickHelp = () => {
    setTooltipHelpClass('modal')

  }
  const closeHelp=()=>{
    setTooltipHelpClass('hiden')
}
  const clickPDF = () => {
    if (raceList.length == 0) {
      alert('Сначала выберите мероприятия!')
    }
    else {
      if (!onlyChoose) {
        setOnlyChoose(!onlyChoose)
      }
      Array.from(document.getElementsByClassName('buttonEdit')).forEach((e)=>{e.classList.add('hiden')})
      let c = 0
      const waitData = setInterval(() => {
        if (c == 0) { c = 1 }
        else {
          clearInterval(waitData)
          const input = document.getElementById('divToPrint');
          html2canvas(input).then(function (canvas) {
            const image = canvas.toDataURL();
            let aDownloadLink = document.createElement('a');
            aDownloadLink.download = 'календарь_гонок_' + new Date().getFullYear() + '.png';
            aDownloadLink.href = image;
            aDownloadLink.click();
          })
          Array.from(document.getElementsByClassName('buttonEdit')).forEach((e)=>{e.classList.remove('hiden')})
        }

      }, 2000);
      
    }
  }
  const changeFolterList = (e) => {

    let newRLF = { yes: false, xz: false, no: false }
    e.forEach((v) => {
      newRLF.yes = v.value == '1' ? true : newRLF.yes
      newRLF.xz = v.value == '2' ? true : newRLF.xz
      newRLF.no = v.value == '3' ? true : newRLF.no
    })

    setRaceListFilter(newRLF)
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => clickClear()} >Сбросить все</button>
        <button onClick={() => clickShowChoose()} >{onlyChoose ? 'Показать все кроме "Не поеду"' : 'Показать только выбраные'}</button>
        <button onClick={() => clickPDF()} >Сохранить себе свой календарь!</button>
        <button onClick={() => clickHelp()} >Помощь</button>

      </div>
      <div id='divToPrint'>
        <h1>Календарь МТБ УРФО {new Date().getFullYear()}</h1>
        <div className={tooltipClass} id='tooltip'>{tooltip}</div>
        <div className={tooltipHelpClass} id='help'>
          <div className='modal-dialog'>
        <button className='modal-close' onClick={closeHelp} >
            &times;
          </button>
          <div>
          1. для формирования календаря нажмите на день с заездом и примите решение <br/> 
          2. выбранные заезды попадают в список под кадендарем<br/> 
          3. в списке заезды можно отфильтровать по решению и изменить его, нажав на иконку карандашика<br/> 
          4. по окончании формирования календаря, его можно сохранить как картинку для печати. При этом все заезды, по которым не принято решение, скрываются
          </div>
        </div>
        </div>
        <Calendar
          language="ru"
          displayHeader={false}
          dataSource={props.raceData.filter((e) => {
            if (((e.go == 1 || e.go == 2) && onlyChoose) || (e.go != 3 && !onlyChoose)) {
              return e
            }
            else return
          })}
          onDayEnter={onMouseOn}
          onDayLeave={onMouseOff}
          onDayClick={onMouseClick}
        />
        <div className={raceCardClass}>
          <RaceCard
            date={race.date}
            org={race.org}
            name={race.name}
            type={race.type}
            id={race.id}
            closeModal={setRaceCardClass}
            onClick={setGo}
          />
        </div>
        <div>
          {raceList}
        </div>
      </div>
      <div style={{minHeight: '50px'}}></div>
      <Select
          defaultValue={[options[0], options[1]]}
          isMulti
          onChange={changeFolterList}
          options={options}
        />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { raceData: state }
}
const mapDispathToProps = { chooseRace: chooseRace, onlyChoose: onlyChoose, clear: clear }
export default connect(mapStateToProps, mapDispathToProps)(RaceCalendar)


