import Login from "@/components/ui/my-account/login";
import SignUp from "@/components/ui/my-account/signup";


const MyAccountPage = () => {
     return (
          <section>
               <section>
                    <div>
                         <h1>Login</h1>
                    </div>

                    <div>
                         <Login />
                    </div>
               </section>

               <section>
                    <div>
                         <h1>Register</h1>
                    </div>

                    <div>
                         <SignUp />
                    </div>
               </section>
          </section>
     );
}

export default MyAccountPage