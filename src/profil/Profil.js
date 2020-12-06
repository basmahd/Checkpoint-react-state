import React from 'react';
import PropTypes from 'prop-types';
import './profil.css'
import foto from './emotion.jpg'


const  Profil= ({myprofil, handleClick}) =>{
   
    return ( 
     <div className='contenu'>
       <div className='mybouton'> 
          <button  variant="warning"  onClick={handleClick}>GUESS HOW I'M </button>
          </div>
            {myprofil.toggle ?
                   <div className='myprofil' >
                     <div className='aboutme'>  
                <p style= {{fontWeight: 'bold'}}><span> FullName :</span>{myprofil.myprofil.FullName}</p>
                   <p style= {{fontWeight: 'bold'}}> <span>Profession :</span> {myprofil.myprofil.Profession}</p>
              <p style= {{fontWeight: 'bold'}}><span>Email :</span> {myprofil.myprofil.Email}</p>
             <p style= {{fontWeight: 'bold'}}><span>Phone :</span>  {myprofil.myprofil.Phone}</p>
                 
         </div>
         <img className="image" src={myprofil.myprofil.imgSrc} alt="" />
    </div>
        : <div>  
          <img className='face' src={foto} alt="" />
           </div>    }
     
      
      </div>
    );
  }
  Profil.defaultProps = {
    FullName: 'UserName',
    Profession:'User Profession',
    Email:'User mail',
    Phone:'User phone',
    }

Profil.propTypes = {
    FullName: PropTypes.string,
    Profession: PropTypes.string,
    Email:PropTypes.string,
    Phone: PropTypes.string,
}


  export default Profil;