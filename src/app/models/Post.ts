import {Comment} from "./Comment";


export interface Post{
  id: number,
  name: string,
  activeLike: boolean,
  likes: number,
  comments: Comment[]
}

export const posts: Post[] =[
  {
    id:1,
    name:"Post 1",
    activeLike: false,
    likes:10,
    comments : [
      {
        user:"Azamat",
        comment:"asdasdasd"
      },
      {
        user:"Azamat2",
        comment: "very good!"
      }
    ]
  },
  {
    id:2,
    name:"Post 2",
    activeLike: false,
    likes:10,
    comments : [
      {
        user:"Azamat",
        comment:"asdasdasd"
      }
    ]
  },
  {
    id:3,
    name:"Post 3",
    activeLike: false,
    likes:10,
    comments : [
      {
        user:"Azamat4",
        comment:"asdasdas312d"
      }
    ]
  },
  {
    id:4,
    name:"Post 4",
    activeLike: false,
    likes:10,
    comments : [
      {
        user:"Azamat4",
        comment:"asdas4dasd"
      }
    ]
  },
  {
    id:5,
    name:"Post 5",
    activeLike: false,
    likes:10,
    comments : [
      {
        user:"Azamat5",
        comment:"asda5sdasd"
      }
    ]
  },
]
