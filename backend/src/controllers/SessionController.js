import User from '../models/User';

/*
Metodoso possiveis
index : listagem de sessoes
store: criar uma sessao
show: listar uma unica sessao
update alterar alguma sessao
destroy deletar uma sessao

Usamos o await para que seja 
esperado o resultado da requisição e fica dentro de um async

*/

class SessionController{

    async store(req, res){
       
        const { email } = req.body;

        // verifica se o usuario já existe FindOne
        let user = await User.findOne({email});

        if (!user){

            user = await User.create({email});
        }
        
        

        return res.json(user);
    }
}

export default new SessionController();