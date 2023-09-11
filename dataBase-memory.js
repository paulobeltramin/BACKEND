// import {randomUUID} from "node:crypto"

// export class dataBaseMemory{

// #videos = new Map()


// list(){

// return Array.from( this.#videos.entries()).map((videosArray)=>{
//   const id = videosArray[0] 
//   const data= videosArray[1]

//   return{
//     id,
//     ...data,
//   }
// })
  
// }

// create(video){
// const videoId = randomUUID()

// this.#videos.set(videoId,video)


// }

// update(id,video){
// this.#videos.set(id,video)
// }

// delete(id){
// this.#videos.delete(id)
// }

// }