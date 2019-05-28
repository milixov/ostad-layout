class LayoutParser {

    constructor(height, input) {
        this.height = height;
        this.input = input;

        this.unit = {XL: 2, L:4, SM: 4};

        this.size = this.sizeGenerator();
        this.config = this.configGenerator();
    }

    sizeGenerator() {
        let obj = Object.assign({}, this.unit);
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                if(typeof obj[key] == 'number') {
                    obj[key] = this.height / obj[key];
                }
            }
        }
        return obj;
    }

    configGenerator() {
        let x = this.input.split("/");
        let arr = [];
        for(let item in x) {
            let num = x[item].match(/(\d+)/);
            let str = x[item].match(/[a-zA-Z]+/g);
            arr.push(
                {
                    count: num !== null ? num[0] : 1,
                    layout: str[0]
                }
            )
        }
        return arr;
    }

    generate() {
        let res = [];
        for(let item in this.config) {
            if(this.config.hasOwnProperty(item)) {
                let itemCount = this.config[item].count;
                let itemLayout = this.config[item].layout;

                if (itemLayout === 'SM') {
                    let arr = [];
                    for (let i = 0; i < itemCount; i++) {
                        arr.push({index: i, size: this.size[itemLayout]});
                    }
                    res.push(arr)
                } else {
                    for (let i = 0; i < itemCount; i++) {
                        res.push(this.size[itemLayout])
                    }
                }
            }
        }
        return res;
    }
}

export default LayoutParser;
