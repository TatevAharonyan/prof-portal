import { signInReduser } from "./signInReduser";
import { signUpReduser } from "./signUpReduser";
import { jobReduser } from "./jobReduser";

export  const rootReduser = {
    signIn: signInReduser,
    signUp: signUpReduser,
    job: jobReduser,
}