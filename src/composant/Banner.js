import '../styles/Banner.css'
import logo from '../assets/logo.png'
// import Recommandation from './Recommandation'
function Banner() {
    const title='La maison jungle'
    return <div >
                <div className="lmj-banner">
                                <img src={logo} alt='leaf' className='lmj-logo'></img>
                                <h1 className='lmj-title'>{title}</h1>
                                {/* <Recommandation/> */}
                        </div> 
                        <div> 
                     
                </div>       
          </div>
        
          
           
}
export default Banner