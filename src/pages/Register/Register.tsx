import RegisterForm from "@/components/forms/RegisterForm";
import logo from "@/assets/images/fav.png";

const Register = () => {
  return( 
    <div className="rts-register-area rts-section-gap bg_light-1 py-[60px] bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="md-992:w-full w-full">
              <div className="registration-wrapper-1 max-w-[800px] rounded-[20px] bg-white m-auto text-center md:py-[100px] md:px-[150px] p-[10px]">
                <div className="logo-area mb-0">
                  <img
                    className="mb-[10px] max-w-[57px] m-auto"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <h3 className="title animate-in fade-in-0 font-bold md:text-[26px] text-[20px] leading-[54px] text-secondary">
                  Register A New Account
                </h3>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;
