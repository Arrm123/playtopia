import Card from '../card/Card';
import './home.scss';
import joy_stick from './../../assets/images/joy_stick.png';

const Home = ({games}) => {
  return (
    <div className='home'>
      <div className='designerMenu'>
        <div className='allDesignerMenu'>
          <div className='prodDesignerMenu'>Proved By prodesigner</div>
          <div className='workDesignerMenu'>Work that we produce for our clients</div>
          <div className='textDesignerMenu'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
          <div className='getMoreDetails'>Get more details</div>
       </div>
          <div className='joyStickPic'> 
            <img src={joy_stick} alt='joyStickPic' />
          </div>
        </div>
        <Card />
    </div>
    
  )
}

export default Home