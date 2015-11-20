/*Problem 7. Parse URL

Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
Return the elements in a JSON object.
Example:

URL	result
http://telerikacademy.com/Courses/Courses/Details/239	{ protocol: http, 
server: telerikacademy.com 
resource: /Courses/Courses/Details/239*/


function urlParse(text) {
    var regex = /:\/\/(?:www\.)?(.[^/]+)(.*)/,
    protocol = text.match(regex);
    //alert(protocol[2]);
    var server = protocol[1];
    var resource = protocol[2];



    return {
        server: server,
        resource : resource

    }
}

var input = 'http://telerikacademy.com/Courses/Courses/Details/239';

console.log(urlParse(input));