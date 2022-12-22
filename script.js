const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        let num = 0;
        const obj = JSON.parse(data);
        obj.map((user) => {
            num = num + user.age
        })
        const result = String(num / obj.length)
        
        fs.appendFile('result.txt', result, err => {
            if (err) {
                console.error(err);
            }
        });
    } else {
        console.error(err);
    }
});