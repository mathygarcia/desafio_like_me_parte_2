const { showPosts, createPost, modifyPost, removePost } = require('../services/postServices')

const controlador = {
    show: async (req, res) => {
        try {
            //obtenemos los posts
            const mostrarPosts = await showPosts();
            res.status(200).json(mostrarPosts)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },
    create: async (req, res) => {
        try {
            const { titulo, url, descripcion } = req.body;
            const crearPost = await createPost(titulo, url, descripcion);
            res.status(201).json(crearPost)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },
    modify: async (req, res) => {
        try {
            const { id } = req.params;
            if (id != "") {
                await modifyPost(id);
                res.status(200).json({
                    status: 200,
                    estado: `Like agregado con éxito en el post con id: ${id}`,
                });
            } else {
                res.status(400).json({
                    status: 400,
                    estado: "Error, id no detectado",
                });
            }
            /* const { id } = req.params;
            const modificacionPost = await modifyPost(id);
            res.status(200).json(modificacionPost) */
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },
    remove: async (req, res) => {
        try {
            const { id } = req.params;
            const eliminarPost = await removePost(id);
            res.status(200).json(eliminarPost)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}

module.exports = controlador;