const { db } = require('../firestore');
const ther = db.collection('therapists');
const blogs = db.collection('blogs');

exports.getAllBlogs = (req, res) => {
    blogs
        .orderBy('date', 'desc')
        .get()
        .then(query => {
            var data = [];
            query.forEach(doc => {
                data.push(doc.data());
            })
            return res.status(200).send(data);
        })
        .catch(error => {
            console.log('Error obteniendo todos los blog documents', error);
            return res.status(404).send(error);
        })
}

exports.getAllBlogsByTherapist = (req, res) => {
    blogs
        .where('author', '==', req.params.tid)
        .orderBy('date', 'desc')
        .get()
        .then(query => {
            var data = [];
            query.forEach(doc => {
                data.push(doc.data());
            })
            return res.status(200).send(data);
        })
        .catch(error => {
            console.log('Error obteniendo los blog documents del terapeuta', error);
            return res.status(404).send(error);
        })

}

exports.getBlog = (req, res) => {
    blogs
        .doc(req.params.bid)
        .get()
        .then(doc => {
            return res.status(200).send(doc.data());
        })
        .catch(error => {
            console.log('Error obteniendo el blog document', error);
            return res.status(404).send(error);
        })
}

exports.newBlog = (req, res) => {
    blogs
        .add(req.body.blogdata)
        .then(blogdoc => {
            // actualizar campo de id
            blogdoc
                .update({id: blogdoc.id})
                .then(() => {
                    console.log('Campo ID: actualizado!')
                })
                .catch(error => {
                    console.log('Error actualizando blog document', error);
                })
            
            // actualiar campos de terapeuta
            author = ther.doc(req.body.blogdata.author);
            author
                .get()
                .then(doc => {
                    upblogs = doc.data().blogs;
                    upblogs.push(blogdoc.id);
                    author.update({blogs: upblogs}).then(() => {
                        return res.status(201).send(doc.id);
                    })
                    .catch(error => {
                        console.log('Error actualizando el campo blogs en author document', error);
                        return res.status(404).send(error);
                    })
                })
                .catch(error => {
                    console.log('Error obteniendo author document', error);
                    return res.status(404).send(error);
                })
        })
        .catch(error => {
            console.log('Error creando el blog document', error);
            return res.status(404).send(error);
        })
}

exports.deleteBlog = (req, res) => {
    blogs
        .doc(req.params.bid)
        .delete()
        .then(() => {
            console.log('Se borro el blog document exitosamente!');
            return res.status(204);
        })
        .catch(error => {
            console.log('Error borrando el blog document', error);
            return res.status(404).send(error);
        })
}

exports.updateBlog = (req, res) => {
    blogs
        .doc(req.params.bid)
        .set(req.body.blogdata)
        .then(() => {
            console.log('Acutalización del blog docucment exitosa!');
            return res.status(204);
        })
}
