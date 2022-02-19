const emailValidation = (email: string) => {
    const emailExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.length < 1) return '이메일을 입력해주세요';
    else if (!emailExp.test(email)) return '이메일 형식을 맞춰주세요';
    else return '';
  };
  
  const passwordValidation = (password: string) => {
    const passwordExp =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    if (password.length < 1) return '비밀번호를 입력해주세요';
    else if (!passwordExp.test(password))
      return '숫자,소문자,대문자,특수문자를 최소 하나씩 포함하여 8자~20자여야 합니다';
    else return '';
  };
  
  const passwordConfirmValidation = (
    password: string,
    passwordConfirm: string,
  ) => {
    if (passwordConfirm.length < 1) return '비밀번호 확인을 입력해주세요';
    else if (password !== passwordConfirm) return '비밀번호와 일치하지 않습니다';
    else return '';
  };
  
  const companyNameValidation = (companyName: string) => {
    const companyNameExp = /^\S[0-9가-힣a-zA-Z.()]+$/;
  
    if (companyName.length < 1) return '이름을 입력해주세요';
    else if (!companyNameExp.test(companyName))
      return '".()"을 제외한 특수 문자는 사용 불가능 합니다.';
    else return '';
  };
  
  const businessNumValidation = (businessNum: string) => {
    const businessNumExp = /^([0-9]{3})-([0-9]{2})-([0-9]{5})$/;

    if (businessNum.length < 1) return '사업자 번호를 입력해주세요';
    else if (!businessNumExp.test(businessNum))
      return '사업자 번호 형식은 "xxx-xx-xxxxx" 입니다..';
    else return '';
  };

  const numberValidation = (num: number) => {
    const numExp = /^([-0-9]+)$/;

    if (num.toString() === "") return '매출액을 입력해주세요';
    else if (!numExp.test(num.toString()))
      return '숫자만 입력 가능합니다.';
    else return '';
  };

  const dateValidation = (date: any) => {
    const dateExp = /^([12][0-9]{3}[/])+(0[1-9]|1[0-2])$/;

    if (date === "") return '기준일자(년월)을 입력해주세요';
    else if (!dateExp.test(date))
      return '숫자만 입력 가능합니다.';
    else return '';
  };
  
  export {
    emailValidation,
    passwordValidation,
    passwordConfirmValidation,
    companyNameValidation,
    businessNumValidation,
    numberValidation,
    dateValidation,
  };