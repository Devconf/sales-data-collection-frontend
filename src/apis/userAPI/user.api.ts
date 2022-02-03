import api from './../index';

interface LoginApiProps {
  loginEmail: string;
  loginPassword: string;
}

interface LoginApiReturnValues {
  response: AuthorizedUserProps;
  success: boolean;
  error: unknown;
}

interface AuthorizedUserProps {
    comapnyName: string;
    businessNum: string;
    email: string;
    token: string;
}

export async function callLoginApi(
  props: LoginApiProps,
): Promise<LoginApiReturnValues> {
  const { loginEmail, loginPassword } = props;
  try {
     const response = await api.post(`/login`, {email: loginEmail,password: loginPassword });
    return { 
        response: response.data,
        success: true, 
        error: undefined 
    };
  } catch (error) {
    return { 
        response: null,
        success: false, error };
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