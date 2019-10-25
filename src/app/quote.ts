export class Quote {
  showSubmitter : boolean;
  constructor(public author:string, public quoteIt:string,public submitter:string,public createdDate: Date){
    this.showSubmitter=false;
  }
}
