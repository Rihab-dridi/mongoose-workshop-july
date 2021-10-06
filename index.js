const connectDB=require('./config/connectBD')
connectDB()
const CONTACTS=require('./Models/CONTACTS')

//CRUD Operation
//CREATION 
//Read the data in th DB
//update
//Delete


//create a sibgle new person 
// const person= new  CONTACTS({
//     name:"Nidhal",
//     email:"nidhal@gmail.com",
//     phone:216555555
// })
// person.save((err,res)=>{
//     try {
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// })


// //Create multiple records 
// CONTACTS.create([{
//         name:"fares",
//         email:"fares@gmail.com",
//         phone:216555555
//     },{
//         name:"imen",
//         email:"imen@gmail.com",
//         phone:216555555
//     },{
//         name:"haythem",
//         email:"haythem@gmail.com",
//         phone:216555555
//     }],(err,data)=>{
//         try {
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     })

//Read the data in th DB
// CONTACTS.find({name:'Nidhal'},(err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

//update
// CONTACTS.findByIdAndUpdate("615d767687bf7f36a73bbf48",{email:'katar@gmail.com'},(err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } )

//delete
CONTACTS.findByIdAndDelete('615d767687bf7f36a73bbf48', (err,data)=>{
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    } )
    