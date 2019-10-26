export class Quote {
  showSubmitter : boolean;
  constructor(public author:string, public quoteIt:string,public submitter:string,public createdDate: Date,public upVote: number =0, public downVote:number=0){
    this.showSubmitter=false;
  }
}
