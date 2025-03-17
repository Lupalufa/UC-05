const pool = require('../../../config/database')

function ListarAgendamentos() {
    try {
        pool.query = 'select * from produto'
        const resultado = pool.query(query)
        if(!resultado){
            
        }
    } catch (error) {
        
    }
}