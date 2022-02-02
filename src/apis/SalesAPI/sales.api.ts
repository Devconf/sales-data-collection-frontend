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
    page:number;
}

export async function  getUserListApi(props:PageProps):   
    Promise<GetUserListApiReturnValues> {
        const {page} = props;
        try {
          const response = await api.get('/sales/list?page='+page);
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

