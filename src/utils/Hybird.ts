class Hybird {

    public tag: string = 'party';


    public toApp(param: any, callBack?: (res: any) => void, resend: boolean = false): void {
        if (callBack) {
            const callBackName = 'cb_' + (Math.random() * 1000) + '_' + new Date().getTime();


            (window as any)[callBackName] = (res: any) => {
                const appdata = JSON.parse(res);
                if (callBack) {
                    callBack(appdata);

                }
                delete (window as any)[callBackName];
            };
        }

        if ((window as any).hc) {// ios 7
            (window as any).hc.call(JSON.stringify(param));
        } else if ((window as any).webkit) {// ios8/android
            (window as any).webkit.messageHandlers.call.postMessage(JSON.stringify(param));
        } else {// 电脑端移动测试
            return;
        }
    }

    /**
     * 设置页面标题
     * @method setTitle
     * @param {String} title 标题内容
     */
    public setTitle(titles: string): void {
        const param: any = {
            api: 'com.haochang.chunk.setTitle',
            data: {
                title: titles,
            },
        };
        this.toApp(param);
    }


    /**
     * 获取保存的token
     * @method getToken
     * @param {Function} _callback 回调函数
     * 回调方法参数
     *  {
     *    errno:(integer) ，
     *    error:(string)  ，
     *    data:{
     *        token:(string)
     *
     *    }
     *  }
     */
    public getToken(callback: () => void): void {
        const param: any = {
            api: 'com.haochang.chunk.getToken',
        };
        this.toApp(param, callback, true);
    }

    /**
     * 物理返回键处理方式(Android)
     * @method interceptBack
     * @param  {int} intercept  是否拦截 1 拦截 0 不拦截（退出app）
     */
    public interceptBack(intercepts: number): void {
        const param: any = {
            api: 'com.haochang.chunk.interceptBack',
            data: {
                intercept: intercepts,
            },
        };
        this.toApp(param);
    }

    /**
     * 关闭页面
     * 关闭前端App当前WebView的页面（主要用于超链跳转打开其他页面使用）
     * @method finish
     */
    public finish(): void {
        const param: any = {
            api: 'com.haochang.chunk.finish',
        };
        this.toApp(param);
    }

    /**
     * 获取网络状态
     * @method networkReachability
     * @param {Function} _callback  回调函数
     * 回调方法参数
     *  {
     *    errno:(integer) ，
     *    error:(string)  ，
     *    data:{
     *        status:(string) // 枚举值：未知 unknown, 未联网 notReach, 移动网络 viaWWAN, WIFI viaWIFI
     *    }
     *  }
     */
    public networkReachability(callback: () => void): void {
        const param: any = {
            api: 'com.haochang.chunk.networkReachability',
        };
        this.toApp(param, callback);
    }




    /** 检测app是否注入js桥梁
     * @method checkBridge
     * @returns {any} window.hc | window.webkit
     */
    public checkBridge(): any {
        return (window as any).hc || (window as any).webkit;
    }


    /**
     * 获得随机数
     * @param minNum
     * @param maxNum
     */
    public getRandomInt(minNum: number, maxNum: number): number {
        return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10);
    }

}

export default new Hybird();
