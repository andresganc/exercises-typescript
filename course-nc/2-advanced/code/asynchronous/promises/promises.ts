
// =========== PROMISES ============
/*
- Las promesas se crearon para solucionar el codigo piramidal y poco legible
    de los callback. Los famosos callback-hell 

- Las promesas son funciones con parametros req y res (Requerimiento - Respuesta) que tienen internamente un 
.then si es ok
.catch si es error

*/


function requestHandlerTS(req: any, res: any) {
    // Consulta User
    User.findById(req.userId)
        // Si ok realizo una consulta .then (Entonces)
        // Consulto usuarios
        .then(function (user){
            return tasks.findById(user.tasksId)
        })
        // Si usuarios ok consulto las tareas de ese usuario
        .then(function (tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function (){
            res.send('Tareas completadas')
        })
        // El catch captura todos los errores de los then que haya
        // No es como los callback que se tiene que gestionar un error por cada consulta
        .catch(function(errors){
            res.send(errors)
        })
}