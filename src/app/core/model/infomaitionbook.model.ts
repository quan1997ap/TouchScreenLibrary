export class InfomationBookModel {

    public bookname?: string;
    public bookresume?: string;
    public bookcall?: string;
    public bookstatus?: string;
    public bookloction?: string;
    constructor(
        // bookname: string,
        // bookresume: string,
        // bookcall: string,
        // bookstatus: string,
        // bookloction: string,
    ) {
        // this.bookname = bookname;
        // this.bookresume =bookresume;
        // this.bookcall = bookcall;
        // this.bookstatus = bookstatus;
        // this.bookloction = bookloction;
    }

    setInfomationBookModel(
        bookname: string,
        bookresume: string,
        bookcall: string,
        bookstatus: string,
        bookloction: string,
    ){
        this.bookname = bookname;
        this.bookresume =bookresume;
        this.bookcall = bookcall;
        this.bookstatus = bookstatus;
        this.bookloction = bookloction;
    }
}