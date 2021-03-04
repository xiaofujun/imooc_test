// 封装请求方法
function getXHR(url, method, params) {

    return new Promise(function(resolve, reject) {
        let xhr = null;
        let result = {};
    
        if(XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        if(xhr) {
            xhr.onreadystatechange = function() {
                if(4 == xhr.readyState && xhr.status == 200) {
                    if(xhr.responseText) {
                        try {
                            result = JSON.parse(xhr.responseText);
                        } catch(err){}
                    }
                    
                    resolve(result);
                }
            };
    
            if('GET' === method.toUpperCase()) {
                if(params) {
                    let str = '';
                    Object.keys(params) && Object.keys(params).forEach(key => {
                        str += (key + '=' + params[key] + '&');
                    })
    
                    if(str.endsWith('&')) {
                      str = str.slice(0, str.length - 1);  
                    }
    
                    url = `${url}?${str}`;
                }
                params = null;
            }
            
            xhr.open(method.toLowerCase(), url, true);

            // 设置请求头必须要在open之后
            if('POST' === method.toUpperCase()) {
                params = params ? JSON.stringify(params) : JSON.stringify({});
                xhr.setRequestHeader('Content-type', 'application/json');
            }
            xhr.send(params);
        }
    })
}