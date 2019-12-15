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
    fetch(baseApiUrl + '/readFile', myInit)
        .then(function (response) {
            // When the page is loaded convert it to text
            return response.text()
        })
        .then(function (html) {
            //console.log(html);
            divPhones.html(html);
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });
    const fileUpdateBtn = $('#fileUpdate');
    fileUpdateBtn.click(() => {
        fetch(baseApiUrl + '/startFile', myInit)
            .then(msg => {
                console.log(msg);
            })
            .catch(error => {
                console.error(error);
            })
    });
});