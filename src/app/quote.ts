export class Quote {
  showSubmitter : boolean;
  constructor(public author:string, public quoteIt:string,public submitter:string){
    this.showSubmitter=false;
  }
}
