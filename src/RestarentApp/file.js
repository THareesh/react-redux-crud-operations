 export const restaurent =[{
    "id": 1,
    "name": "PizzaHut",
    "address": "Noida",
    "rating": "4.5",
    "email": "pizzahut@test.com"
},
{
    "id": 2,
    "name": "McDonald",
    "address": "Delhi",
    "rating": "4.0",
    "email": "mcdonald@test.com"
  
 }
 ]

 
 export const add= (data)=>{
    restaurent.push(data)
      
}
 export const remove = (id)=>{
 const restarentIndex=restaurent.findIndex(item=>item.id==id)
   if(restarentIndex!==-1){
    restaurent.splice(restarentIndex,1)
   }
   console.log(restaurent)
 }
 export const edit = (item,id)=>{
   const update = restaurent.find(item=>item.id==id)
   if(update){
    update.name=item.name;
    update.address=item.address;
    update.rating=item.rating;
    update.email=item.email
    
   } 
   console.log(update)

 }
 
console.log(restaurent)