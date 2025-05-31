function status(req, res){
    res.status(200).json({
        status: "ok",
        message: "API is running smoothly"
    });
}

export default status;