import api from './../index';

interface GetUserListApiReturnValues {
    success: boolean;
    error: unknown;
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
        const response = await api.get('/saleManage/users?page='+page,{headers:{'x-auth-token': token}});
        return { success: true, error: undefined, userList: response.data.userList};
    } catch (error) {
        return { success: false, error, userList:[]};
    }
}


interface SendMailReturnValues {
    success: boolean;
    error: unknown;
}

interface MailProps{
    id:number;
}

export async function  sendMailApi(props:MailProps):   
Promise<SendMailReturnValues> {
    const {id} = props;
    try {
        await api.get('/saleManage/email?id='+id);
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}

export async function  sendMailsApi():   
Promise<SendMailReturnValues> {
    try {
        await api.get('/saleManage/email/all');
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
        await api.post('/saleManage/upload',formData,{headers:{'x-auth-token': token}});
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}

interface GetSalesProps{
    start: Date;
    end: Date;
    token: string;    
}

interface GetSalesReturnValues {
    success: boolean;
    error: unknown;
    saleList: Array<SaleInfoProps>;
  }

interface SaleInfoProps {
    userId:number;
    saleManageId: number;
    companyName: string;
    businessNum: string;
    email: string;
    totalSales: number;
    operatingProfit: number;
    netIncome: number;
    date: Date;
    accessToken: string;
}

export async function  getSalesApi(props:GetSalesProps):   
Promise<GetSalesReturnValues> {
    const {start, end, token} = props;
    const startAt =start.toLocaleDateString("fr-CA");
    const endAt =end.toLocaleDateString("fr-CA");

    try {
        const response =await api.post('/saleManage/download',{startAt, endAt},{headers:{'x-auth-token': token}});
        return { success: true, error: undefined, saleList: response.data};
    } catch (error) {
        return { success: false, error, saleList:[]};
    }
}

export async function  getAllSalesApi(props:GetSalesProps):   
Promise<GetSalesReturnValues> {
    const {start, end, token} = props;
    const startAt =start.toLocaleDateString("fr-CA");
    const endAt =end.toLocaleDateString("fr-CA");

    try {
        const response =await api.post('/saleManage/download/all',{startAt, endAt},{headers:{'x-auth-token': token}});
        return { success: true, error: undefined, saleList: response.data};
    } catch (error) {
        return { success: false, error, saleList:[]};
    }
}

interface InviteProps {
    accessToken: string;
}

interface SendTempInviteMailReturnValues {
    success: boolean;
    error: unknown;
}

export async function sendTempInviteMailApi(props:InviteProps):
Promise<SendTempInviteMailReturnValues> {
    const {accessToken} = props;

    try {
        await api.get('/saleManage/email/invite/'+accessToken);
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}

interface AccessTokenProps {
    accessToken: string | string[];
}


export interface GetSaleWithAccessTokenReturnValues {
    success: boolean;
    error: unknown;
    saleInfo: SaleInfoProps;
}

export async function getSaleWithAccessTokenApi(props:AccessTokenProps):
Promise<GetSaleWithAccessTokenReturnValues> {
    const {accessToken} = props;

    try {
        const response = await api.get('/saleManage/sale?accessToken='+accessToken);
        return { success: true, error: undefined, saleInfo: response.data};
    } catch (error) {
        return { success: false, error, saleInfo: null};
    }
}

interface SaleUpdateProps {
    saleManageId: number;
    companyName: string;
    businessNum: string;
    email: string;
    totalSales: number;
    netIncome: number;
    operatingProfit: number;
    date: string;
    accessToken: string | string[];
}


export interface GetSaleUpdatedReturnValues {
    success: boolean,
    error: unknown,
}

export async function saleUpdatedApi(props:SaleUpdateProps):
Promise<GetSaleUpdatedReturnValues> {
    const {saleManageId, companyName, businessNum, email, totalSales, netIncome, operatingProfit, date, accessToken} = props;

    console.log(date);

    try {
        await api.put('/saleManage/'+saleManageId.toString() +'/sale/' + accessToken,{companyName, businessNum, email, totalSales, netIncome, operatingProfit, date});
        return { success: true, error: undefined};
    } catch (error) {
        return { success: false, error};
    }
}
