import api from './../index';

interface LoginApiProps {
  loginEmail: string;
  loginPassword: string;
}

interface LoginApiReturnValues {
  success: boolean;
  error: unknown;
}

export async function callLoginApi(
  props: LoginApiProps,
): Promise<LoginApiReturnValues> {
  const { loginEmail, loginPassword } = props;
  try {
    await api.post(`/login`, {email: loginEmail,password: loginPassword });
    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error };
  }
}

interface SignUpProps {
  companyName: string;
  businessNum: String;
  email: string;
  password: string;
  role:string
}

interface SignupApiReturnValues {
  success: boolean;
  error: unknown;
}

export async function callSignUpApi(
  props: SignUpProps,
): Promise<SignupApiReturnValues> {
  const { companyName, businessNum, email, password, role} = props;
  try {
    await api.post(`/signup`, { companyName, businessNum, email, password, role});
    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error };
  }
}