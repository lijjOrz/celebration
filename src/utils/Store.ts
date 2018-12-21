class Store {
    public debug: boolean =  true;

    // 房间信息弹框
    public RoomInfo: any = {
        show: false,
        title: '',
        msg: []
    }
    public showRoomInfo(title: string, msg: string): void{
        console.log(title, msg)
        this.RoomInfo.title = title;
        this.RoomInfo.msg = msg;
        this.RoomInfo.show = true;
    }
    public hideRoomInfo(): void{
        this.RoomInfo.show = false;
    }

    // 房间排行榜
    public RankInfo: any = {
        show: false,
        type: '',
        arr: [],
        rankname: '',
        ranktitle: ''
    }

    public showRnak(type: string, arr: [], rankname: string, ranktitle: string): void {
        this.RankInfo.type = type;
        this.RankInfo.arr = arr;
        this.RankInfo.rankname = rankname;
        this.RankInfo.ranktitle = ranktitle;
        this.RankInfo.show = true;
    }
    public hideRank(): void {
        this.RankInfo.show = false;
    }

    // 错误页面
    public errorInfo: any = {
        show: false,
        cb: null,
    }

    public showError(cb: ()=>void): void {
        this.errorInfo.show = true;
        this.errorInfo.cb = cb;
    }

    public hideError(): void {
        if(this.errorInfo.cb) this.errorInfo.cb();
        this.errorInfo.show = false;
        this.errorInfo.cb = null;
    }
}

export default new Store()