const Express = require('express');
const Router = Express.Router();

Router.get('/',(req,res,next)=>{
    res.status(200).json(req.session.isAdmin || "Sesión no creada");
})

Router.get('/create',(req,res,next)=>{  //para crear una sesion
    req.session.username="xrodriguex";
    req.session.isAdmin = true;
    res.redirect('/admin'); 
})

Router.get('/remove',(req, res,next)=>{  //para eliminar una de las variables de una sesion
    req.session.username=null;
    res.redirect('/admin');
})

Router.get('/destroy',(req, res, next)=>{ //para destruir todas las variables de una sesion
    req.session.destroy();
    res.redirect('/admin');
})

module.exports = Router;