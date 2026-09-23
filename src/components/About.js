
import User from './User';
import UserClass from './UserClass';
import userContext from '../utils/userContext';

const About = () => {

    return (

        <div>
            <h1>About Us</h1>
            <UserClass
                 name={"Aditya Vaisnav"}
                location={"Jaipur"}
                contact={"1234567890"}
             />

 <div>
  LoggedInUser:  <userContext.Consumer>
        {({loggedInUser})=> <h1 className="font-bold text-gray-800  text-3xl">{loggedInUser}</h1>}
    </userContext.Consumer>
 </div>
        </div>
    )
}

export default About;