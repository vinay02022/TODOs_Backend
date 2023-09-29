//module mtlb file
//NPM module
const color=require('cli-color');
const fs=require('fs')
// const { log } = require('console')
const path=require('path')
const os=require('os');
// // iifs-imediiate invoke function
// (function(name){
//     console.log(color.red(name))
// })('vinay') 
// console.log(color.green("Vinay Pandey"));
// -----console.log(__filename);
// -----console.log('Folder Name:',path.dirname(__filename));
//to Get Only FIleName:
// -----console.log('File Name: ',path.basename(__filename));
//Extension NAme 
// -----console.log('Extension Name :',path.extname(__filename));
//Parse y poora obj de dega
// -----console.log('Parse ',path.parse(__filename));
/**OUTPUT:---
 * Parse  {
  root: 'c:\\',
  dir: 'c:\\Users\\DELL 7490\\backendByVinay',
  base: 'module.js',
  ext: '.js',
  name: 'module'
}
 */

//JOIN:Url Banane k kaam aata h
// -----console.log('Join Krta h,',path.join(__dirname,'MyNewFolder','myTempTestApp.js'));

// FILE SYSTEM Module -Data can be read,write,create ->/file/folder

// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if(err){
//         console.log("SomeThing Went Wrong");
//         return
//     }
//     console.log("Folder Created");
// })


// File Create
// fs.writeFileSync(path.join(__dirname,'test','text.js'),"Hello Message In FIle 2nd Parameter m passed",(err)=>{
//     if (err) {
//         console.log("Somethinng Went Wrong",err);
//         return  
//     }else{
//         console.log("Created");

//     }
// })
// fs.writeFileSync('Test_1','Ok.txt')
//
//Append file-agr aap chahete h ki data rewrite n hoke add ho msg
// fs.appendFileSync(path.join(__dirname,'test','text.js'),"some more data added",(err)=>{
//     if(err){
//         console.log("error aa gya ",err);
//         return
//     }
//     console.log("Safal")
// })
// console.log('os arc: ',os.arch());
// console.log('os CPU: ',os.cpus());
console.log('os UP TIME',os.uptime());

//////////////////////////////////MOST IMPORTANT ---EVENT MODULE
const emitter=require('events')
//register->verification email->mailing list m add krna





