import api from './../index';

interface GetUserListApiReturnValues {
    success: boolean,
    error: unknown,
    userList: Array<UserInfoProps>;
}

interface UserInfoProps {
    id:number;
    comapnyName: string;
    businessNum: string;
    email: string;
    button: null;
}

interface PageProps{
    token: string;
    page:number;
}

export async function  getUserListApi(props:PageProps):   
Promise<GetUserListApiReturnValues> {
    const {token,page} = props;
    try {
        const response = await api.get('/sales/list?page='+page,{headers:{'x-auth-token': token}});
        return { success: true, error: undefined, userList: response.data.userList};
    } catch (error) {
        return { success: false, error, userList:[]};
    }
}


interface SendMailReturnValues {
    success: boolean,
    error: unknown
}

interface MailProps{
    id:number;
}

export async function  sendMailApi(props:MailProps):   
Promise<SendMailReturnValues> {
    const {id} = props;
    try {
        await api.get('/sales/sendEmail?id='+id);
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}

export async function  sendMailsApi():   
Promise<SendMailReturnValues> {
    try {
        await api.get('/sales/sendEmails');
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}


interface UploadFileProps{
    token: string;
    files: any[];    
}

interface UploadFileReturnValues {
    success: boolean;
    error: unknown;
  }
  

export async function  uploadFileApi(props:UploadFileProps):   
Promise<UploadFileReturnValues> {
    const {token,files} = props;

    console.log(token);
    let formData = new FormData()

    for (let i = 0; i < files.length; i++) { 
        formData.append("files", files[i]); // 반복문을 활용하여 파일들을 formData 객체에 추가한다
    }

    try {
        await api.post('/sales/upload',formData,{headers:{'x-auth-token': token}});
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}

