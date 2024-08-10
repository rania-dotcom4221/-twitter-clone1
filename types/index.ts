export type User ={
    name:string;
    id:string;
  username:string;
  image?:string;
  }
  
 export  type tweetType={
    content:string;
    user:User;
    id: string;
    image?:string;
    createdAt?:string;
    numberOfComments?:number; 
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
  };