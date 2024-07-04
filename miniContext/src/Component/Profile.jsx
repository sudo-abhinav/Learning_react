import  {useContext} from 'react'

import UserContext from '../Context/UserContext';

function Profile() {
    const {User}  = useContext(UserContext);
 
   if(!User) return <div>Login Please</div>

   return <div>welcome {User.Username} </div>

  
}

export default Profile