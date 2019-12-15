const proxyurl = "https://cors-anywhere.herokuapp.com";
const url = "https://topratedphonesptbestprices.herokuapp.com"; // site that doesn’t send Access-Control-*
const baseApiUrl = proxyurl + '/' + url;

const myHeaders = new Headers();

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

$(() => {
    console.log('ready to start fetching data');
    const divPhones = $('#divPhones');
    fetch(baseApiUrl + '/phones', myInit)
        .then(html => {
            divPhones.innerHtml = html;
            console.log(html);
        })
        .catch(error => {
            console.error(error);
        });
});