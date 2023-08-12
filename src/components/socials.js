import {socilas} from '../Data/socialsImages';
import '../styles/socials.scss'

function Socials() {
  return (
    <>
    <h1 className='socilas--title'>SOCIAL NETWORKS</h1>
        <div className='socilas'>
      {  socilas.map(({src, alt}) => 
                <img src={src} alt={alt} className='socilas--image' />
      )
      }
    </div>
    </>
  )
}

export default Socials