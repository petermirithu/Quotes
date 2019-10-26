export class Quote {
  showSubmitter : boolean;
  constructor(public author:string, public quoteIt:string,public submitter:string,public createdDate: Date,public upVote: number, public downVote:number){
    this.showSubmitter=false;
  }
}
