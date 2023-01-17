const likemeDB = require('../database/conexion')

const showPosts = async () => {
    try {
        const { rows } = await likemeDB.query("SELECT * FROM posts");
        return rows;
    } catch (error) {
        console.log(error)
    }
}

const createPost = async (titulo, img, descripcion) => {
    try {
        const consulta = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
        const valores = [titulo, img, descripcion];
        const resultado = await likemeDB.query(consulta, valores);
        return (resultado);
    } catch (error) {
        console.log(error)
    }
};

const modifyPost = async (id) => {
    try {
        //UPDATE posts SET likes = COALESCE(likes,0) + 1 WHERE id = $1
        //UPDATE posts SET likes = likes + 1  WHERE id = $1
        const consulta = `UPDATE posts SET likes = COALESCE(likes,0) + 1  WHERE id = $1`;
        const valores = [id];
        const resultado = await likemeDB.query(consulta, valores)
        return (resultado);
    } catch (error) {
        console.log(error)
    }

}

const removePost = async (id) => {
    try {
        const consulta = `delete from posts where id=$1`;
        const resultado = await likemeDB.query(consulta, [id])
        return (resultado);
    } catch (error) {
        console.log(error)
    }
}


module.exports = { showPosts, createPost, modifyPost, removePost }; 