import React from "react";
import Loading from "../Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Sidenav from "../SideNav";
import ProfileCards from "../ProfileCards"

// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

// cookies.set('reg', 'RegistrationComplete', { path: '/' });
// console.log(cookies.get('RegistrationComplete')); // Pacman

export const RegComplete = () => {
  return (  
    <div className="next-steps my-5 content-wrapper">
            <Sidenav />
        <div className="main-content-profile">
            <h2>Your registration is now complete!</h2>
            <ProfileCards />
        </div>
    </div>
  );
};

export default withAuthenticationRequired(RegComplete, {
  onRedirecting: () => <Loading />,
});
