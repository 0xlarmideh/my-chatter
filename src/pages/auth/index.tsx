import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthForm from "../../../components/auth/auth-form";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import AccountForm from "../../../components/auth/account";


type Inputs = {
  email: String;
  password: String;
};


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const session = useSession();
  const supabase = useSupabaseClient();
  console.log(session?.user)

  return (
    <>
      {!session ? (
        <Container className="auth" maxW="500px">
          <AuthForm />
        </Container>
      ) : (
        <AccountForm session={session} />
      )}
    </>
  );
};

export default Login;
