function requestValidator(obj) {
    let methodCHECKING = ["GET","POST","DELETE","CONNECT"]
    let versionCHECKING = ["HTTP/0.9","HTTP/1.0","HTTP/1.1","HTTP/2.0"]
    function checkMethod() {
        if (!(methodCHECKING.includes(obj.method))|| obj.method == undefined) {
            throw new Error("Invalid request header: Invalid Method");
        }
        return;
    }

    function checkURI() {
        let rgx = /[^a-zA-Z0-9\.]+/;
        if (obj.uri !== "*" && rgx.test(obj.uri) || obj.uri == undefined || obj.uri==="") {
            throw new Error("Invalid request header: Invalid URI");
        }
        return
    }

    function checkVersion() {
        if (!(versionCHECKING.includes(obj.version))||obj.version == undefined) {
            throw new Error("Invalid request header: Invalid Version");
        }
        return;

    }

    function checkMessge() {
        let rgx = /[<>\\\&\'\"]+/;
        if ((rgx.test(obj.message) == true)|| obj.message == undefined) {
            throw new Error("Invalid request header: Invalid Message");
        }
        return;

    };

    checkMethod();
    checkURI();
    checkVersion();
    checkMessge();
    return obj;
}


requestValidator({

    method: 'GET',
    uri: 'fdsfds',
    version: 'HTTP/1.1',
    message: '$'
});
