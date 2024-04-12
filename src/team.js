import {useRef} from 'react'
import {teamData} from './data'
const Team = () => {
    const team=useRef(null)
    const teamItems=useRef([]);

    const ScrollToTeam=()=>{
        window.scrollTo({
            top:team.current.offsetTop,
        })
    }
  
    const clickTeamBtn=(e)=>{
        if (e.target.innerText==='Вся команда') {
            e.target.innerText="Часть команды"
            for(let i=4;i<teamItems.current.length;i++)
                if (teamItems.current[i].classList.contains('none')) teamItems.current[i].classList.remove('none');
            }
        else {
            e.target.innerText="Вся команда"
            for(let i=4;i<teamItems.current.length;i++) teamItems.current[i].classList.add('none');
            ScrollToTeam()
        }
    }
    const renderTeam=()=>{
        return teamData.map((item,i)=>{
            return  <div key={item.name} className={`item__team  ${item.numberPicture>4?'novisible none':""}`} ref={el=>teamItems.current[i]=el}  >
                <div className="wrapper__img"><img src={`./img/team/team_${item.numberPicture}.jpg`} alt=""/></div>
                <div className="team__name">{item.name}</div>
                <div className="team__description">{item.description}</div>
            </div>
        })
    }
    return ( 
        <section className="team" ref={team} id='team'>
        <div className="container">
            <div className="wrapper__team">
                <div className="team__title title">Команда</div>
                <div className="team__cards">
                    {renderTeam()}
                </div>
                <button type="button" className="btn btn-team"  onClick={(e)=>{clickTeamBtn(e)}}>Вся команда</button>
            </div>
        </div>
    </section>
     );
}
 
export default Team;