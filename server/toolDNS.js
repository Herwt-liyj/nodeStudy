var dns = require('dns');

dns.lookup('www.runoob.com', function(err,address,family){
    console.log('address  : '+ address);
    dns.reverse(address,function(err,hostname) {
        console.log(hostname)
        if(err) console.log(err);
        console.log('反向解析 ' + address + '对应的域名' + JSON.stringify(hostname))
    })
})
// var dns = require('dns');

// dns.lookup('www.github.com', function onLookup(err, address, family) {
//    console.log('ip 地址:', address);
//    dns.reverse(address, function (err, hostnames) {
//    if (err) {
//       console.log(err.stack);
//    }

//    console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
// });  
// });