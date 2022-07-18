import React, { useEffect, useState } from "react"
import { Header } from "../components/login";
import { RegisterInputs, RegisterFooter } from "../components/register";
import { AuthBox } from "../components/shared"
import { validateRegisterForm } from "../utils/validators";

export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
      setIsFormValid(validateRegisterForm({ email, password, username }));
    }, [email, password, username, setIsFormValid]);
  
    const handleRegister = () => {

    };
  
    return (
        <AuthBox>
            <Header />
            <RegisterInputs
                mail={email}
                setMail={setEmail}
                password={password}
                setPassword={setPassword}
                setUsername={setUsername}
                username={username}
            />
            <RegisterFooter isFormValid={isFormValid} handleLogin={handleRegister} />
        </AuthBox>
    )
}