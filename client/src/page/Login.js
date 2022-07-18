import React, { useState } from "react"
import { Inputs, Header } from "../components/login";
import { AuthBox } from "../components/shared"

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthBox>
            <Header />
            <Inputs
                mail={email}
                setMail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </AuthBox>
    )
}