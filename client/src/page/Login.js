import React, { useEffect, useState } from "react"
import { Inputs, Header, Footer } from "../components/login";
import { AuthBox } from "../components/shared"
import { validateLoginForm } from "../utils/validators";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
      setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);
  
    const handleLogin = () => {
    //   const userDetails = {
    //     mail,
    //     password,
    //   };
  
    //   login(userDetails, history);
    };
  
    return (
        <AuthBox>
            <Header />
            <Inputs
                mail={email}
                setMail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <Footer isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
    )
}