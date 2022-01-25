
// ============== CALLBACKS ==============
/*
Los callbacks son el inicio para manejar la asincronia
algunos de los inconvenientes es que generan un codigo piramidal
*/

function requestHandler2(req: any, res: any) {
    // Consulta
    User.findById(req.userId, function(err, user){
        if (err) {
            res.send(err);
        } else {
            // Si anterior consulta es ok realiza otra consulta si se desea
            Tasks.findById(user.tasksId, function(err, task){
                if (err) {
                    return res.send(err);
                } else {
                    // Si anterior consulta es ok se puede realizar otra consulta si se desea
                    // Se asignar valores si se desea 
                    task.completed = true;
                    // Guardar valores
                    // Y se puede hacer una ultima consultas que no devuelva mas resultados. Que solo haga la consulta y verifique si da error
                    task.save(function(err){
                        if (err) {
                            return res.send(err);
                        } else {
                            // Si ok se envia mensaje de tarea completada
                            res.send('Task Completed')
                        }
                    })
                }
            })
        }
    })
}