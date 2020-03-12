export default class UploadFile{
    FileName: string;
    Bytes: string;
    public constructor (FileName: string, Bytes: string)
    {   
        this.FileName = FileName;
        this.Bytes = Bytes;
    }
}