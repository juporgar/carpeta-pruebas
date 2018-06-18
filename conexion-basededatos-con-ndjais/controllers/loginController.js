const Controller = require('./controller');
const UserModel = require('../models/users');

class loginController extends Controller
{
   constructor(req, res, next)
   {
       super(req,res,next);
   }

   login()
   {
       let username = this.req.body.uname;
       let password = this.req.body.psw;
       let userModel = new UserModel();

       userModel.findUser(username,(info)=>{
          console.log(JSON.stringify(info))
        if (info.length === 0){
            this.req.flash('info','El usuario no existe');
            //this.res.render('login',{tittle: 'login', layout:'layout'});
            this.index();    
            }else{ 
            if(password==info[0].password){
                this.index();
            }else{
                this.req.flash('info','El pass es incorrecto')
                this.index();    
            }
            }
        });
    }

   index()
   {
    let info = this.req.flash('info')
       if(info == "") 
       {
        console.log("No Existe Info");
        this.res.render('login', {title:'Login', layout:'layout'});
        }else{
            this.res.render('login', {title:'Login', layout:'layout',info:info});
            info="";
        }
    }
}
module.exports = loginController;