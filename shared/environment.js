export const environment = process.env.REACT_APP_ENVIRONMENT
console.log("environment");
console.log(environment);
console.log(process.env)
let restAPIUrl;


switch(environment) {
    case "dev":
        restAPIUrl="http://127.0.0.1:9000";
        break;
    case "stage":
        restAPIUrl="https://api-stage.tomvisions.com";
        break;
    case "prod":
    default:
        restAPIUrl="https://api.tomvisions.com";
        break;

}

console.log(restAPIUrl);
export { restAPIUrl }