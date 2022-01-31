import api from './../index';

interface GetUserListApiReturnValues {
    success: boolean,
    error: unknown,
    userList: Array<UserInfoProps>;
}

interface UserInfoProps {
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

