class BaseModal {
    constructor(datas, message) {
        if(typeof(datas) === "string") {
            this.message = datas;
        } else {
            if(datas) {
                this.datas = datas;
            }

            if(message) {
                this.message = message;
            }
        }
    }
}

class SuccessModal extends BaseModal {
    constructor(datas, message) {
        super(datas, message);
        this.status = true;
    }
}

class FailModal extends BaseModal {
    constructor(datas, message) {
        super(datas, message);
        this.status = false;
    }
}

module.exports = {
    SuccessModal,
    FailModal, 
}