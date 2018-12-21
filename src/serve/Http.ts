// import MD5 from '../utils/MD5';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Bus from '../utils/Bus';
class Http {

    

    public header = {
        'app-version': '', // 小程序版本
        'cli-uniqid': '', // 设备唯一识别码
        'cli-idfa': '', // 广告ID，没有就为空字符串 (IOS)
        'cli-os': '', // 客户端系统，'android' or 'ios' or 'haochang'
        'cli-os-version': '', // 客户端系统版本，例如 '4.1'
        'cli-model': '', // 手机型号，例如 samsung GALAXY S4
        'cli-resolution': '', // 分辨率，例如 1920*1080
        'cli-wifi': 0, // 是否是wifi网络，0: 不是 1: 是
        'cli-mcc': '', // 国籍 默认 460
        'cli-mnc': 0, // 运营商代码
        'cli-lng': '', // 经度，无则不传
        'cli-lat': '', // 维度，无则不传
        'cli-app': '', // app名字，在开发app前约定  教唱 就发  jc_applet
        'cli-trans': 0, // 每次请求时，由前端生成的uuid
        'cli-sign': '', // 时间戳|上行数字签名  _time|_sign
        'Content-Type': 'application/json',
        'x-api-test': 1,
        'Authorize-Token': '',
        'X-HTTP-Method-Override': '',
    };


    public host: string = '';
    public port: string = '';
    public sign: string = '';
    // 与服务器之间的时间差 （服务器时间减去当前时间，得到subTime）
    public subTime = 0;

    public hostList: any = {
        development: {
            baseURL: 'https://test-ck.haochang.tv',
            signKey: '41a939289369cc56dcc80d8f0df66759',
        },
        build_dev: {
            baseURL: 'https://test-ck.haochang.tv', // http://192.168.3.93:81
            signKey: '41a939289369cc56dcc80d8f0df66759',
        },
        test: {
            baseURL: 'https://test-ck.haochang.tv',
            signKey: '41a939289369cc56dcc80d8f0df66759',
        },
        new_test: {
            baseURL: 'https://new-test-ck.haochang.tv',
            signKey: '41a939289369cc56dcc80d8f0df66759',
        },
        audit: {
            baseURL: 'https://a-party.haochang.tv',
            signKey: '051ca4deba99267dcf4ef343ebcdbe2c',
        },
        production: {
            baseURL: 'https://party.haochang.tv',
            signKey: '051ca4deba99267dcf4ef343ebcdbe2c',
        },

    };

    constructor() {
        console.log('Http constructor', process.env.NODE_ENV);
        this.init();
    }

    public init(): void {
        if (process && process.env && process.env.NODE_ENV) {
            this.host = this.hostList[process.env.NODE_ENV]['baseURL'];
            this.sign = this.hostList[process.env.NODE_ENV]['baseURL'];
        }
    }



    public axiosGet(url: string, param: object, success: (res: any) => void, fail: (err: any) => void){
        Bus.$emit('loading', true);
        axios({
            url: this.host + url,
            method: 'get',
            params: param,      // get请求使用params
            header: this.header,
            timeout: 10000,
        } as AxiosRequestConfig).then((res) => {
            if (res.status === 200) {
                //
            }
            if (success) {
                success(res);
            }
            Bus.$emit('loading', false);
        }).catch((err) => {
            if (fail) {
                fail(err);
            }
            Bus.$emit('loading', false);
        });
    }

    /**
     * @method get    get请求方法
     * @param url 请求地址
     * @param params 请求参数
     * @param success 成功回调
     */
    // public get(urls: string, params: object, success: (res: any) => void, fail: (err: any) => void): void {
    //     axios({
    //         url: urls,
    //         method: 'get',
    //         params: this.formatData(params),      // get请求使用params
    //         header: this.header,
    //         timeout: 8000,
    //     } as AxiosRequestConfig).then((res) => {
    //         if (res.status === 200) {
    //             //
    //         }
    //         if (success) {
    //             success(res);
    //         }
    //     }).catch((err) => {
    //         if (fail) {
    //             fail(err);
    //         }
    //     });
    // }

    // public post(
    //     urls: string,
    //     params: object,
    //     methods: string,
    //     success: (res: any) => void,
    //     fail: (err: any) => void): void {
    //     this.header['X-HTTP-Method-Override'] = methods;
    //     axios({
    //         url: urls,
    //         method: methods,
    //         data: this.formatData(params),      // post put patch 使用data
    //         header: this.header,
    //         timeout: 8000,

    //     } as AxiosRequestConfig).then((res) => {
    //         if (res.status === 200) {
    //             //
    //         }
    //         if (success) {
    //             success(res);
    //         }
    //     }).catch((err) => {
    //         if (fail) {
    //             fail(err);
    //         }
    //     });
    // }


    // /**
    //  * @method formatData           计算后台接口所需签名
    //  * @param data         {json}   后台接口所需参数集合
    //  * @param noneed      {boolean}   <可选> 是否需要编码
    //  */
    // public formatData(data: any, noneed?: boolean): object {
    //     noneed = noneed || false;
    //     if (noneed) {
    //         return data;
    //     }

    //     const time: number = Math.floor(this.serverTime() / 1000);
    //     const params: any = {};
    //     const sign: string[] = [];
    //     let signStr: string = '';
    //     if (data) {
    //         // tslint:disable-next-line:forin
    //         for (const k in data) {
    //             sign.push(k + '=' + data[k]);
    //             params[k] = data[k];
    //         }
    //         sign.sort(); // 排序
    //         signStr = sign.join('&') + '|' + time + '|' + this.sign;
    //         const md5Str = MD5.parse(signStr);
    //         //   console.log('md5:', md5Str)
    //         params['_sign'] = md5Str;
    //     }
    //     params['_time'] = time;
    //     return params;
    // }

    // /**
    //  * 返回服务器当前时间 ms
    //  */
    // public serverTime() {
    //     if (this.subTime != null) {
    //         return Date.now() + this.subTime;
    //     } else {
    //         return Date.now();
    //     }

    // }
}


export default new Http();
