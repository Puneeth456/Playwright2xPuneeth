let responseTime = 850;  //ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log('Response: ${responseTime}ms -${slaStatus}');






let statusCode = 404;
let category = statusCode < 300 ? "success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error";
console.log('Status ${statusCode}: $(category)');


