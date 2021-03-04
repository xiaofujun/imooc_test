const getPostData = (req, res) => {

    return new Promise((resolve, reject) => {

        if('POST' === req.method) {
            let postData = '';
    
            req.on('data', chunk => {
                postData += chunk.toString();
            })
            req.on('end', () => {
                resolve(postData ? JSON.parse(postData) : {});
            });
        } else {
            resolve({});
        }
    });
}

module.exports = {
    getPostData,
};