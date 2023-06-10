import {
  Container,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthForm from "../../../components/auth/auth-form";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import AccountForm from "../../../components/auth/account";
import { ReactElement } from "react";
import { landingLayout } from "@/types/type";
import Layout from "../../../components/layout/default";


type Inputs = {
  email: String;
  password: String;
};


const Login:landingLayout = () => {

  const session = useSession();
  const supabase = useSupabaseClient();
  console.log(session)

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

Login.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
