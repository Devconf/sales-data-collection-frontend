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

export async function  getUserListApi(page:number):   
    Promise<GetUserListApiReturnValues> {
        try {
          const response = await api.get('/sales/list?page='+page);
          return { success: true, error: undefined, userList: response.data.userList};
        } catch (error) {
          return { success: false, error, userList:[]};
        }
      }

