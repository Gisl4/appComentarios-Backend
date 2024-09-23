const Comment = require('../models/Comment');

exports.create = async (req, res) => {

    try {
        let comment;

        //Guardar el comentario
        comment = new Comment(req.body);

        await comment.save();
        res.send(comment);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error saving comment');
    }
};

exports.get = async (req, res) => {

    try {

        const comments = await Comment.find();
        res.json(comments);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting comments');
    }
}

exports.delete = async (req, res) => {

    try {

        let comment = await Comment.findById(req.params.id);

        if(!comment) {
            res.status(404).json( { msg: 'The comment does not exist'});
        }

        await Comment.findOneAndRemove({ _id: req.params.id});
        res.json( {message: 'Comment successfully deleted'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting comments');
    }

}