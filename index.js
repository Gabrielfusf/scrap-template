var puppeteer = require('puppeteer');
var cheerio = require('cheerio');

var div = '';

// { headless: false }


(async () => {
  var browser = await puppeteer.launch({ headless: false });
  var page = await browser.newPage();
  await page.goto('https://web.telegram.org/z/#-1637635186');

    //faz login
  await page.evaluate(async () => {
  var login =
    {
    username: 'dayane',
    password: 'Bebitinho1213'
    }

    const inputUserName = document.getElementById('j_idt261:j_idt268');
    const inputPassword = document.getElementById('j_idt261:j_idt270');
    const buttonAcessar = document.getElementById('j_idt261:j_idt274');
    
    
    inputUserName.value = login.username;
    inputPassword.value = login.password;
    await buttonAcessar.click();    
    

});

await page.waitForNavigation();

//navega menu
await page.evaluate(async () => {
  const buttonMenu =  document.getElementsByClassName('ui-menuitem-link ui-corner-all');
  await buttonMenu[3].click();
});

await page.waitForNavigation();


//faz pesquisa
await page.evaluate(async () => {
    const inputLogradouroHin = document.getElementById('formcrud:logradouro_hinput');
    const inputLogradouro = document.getElementById('formcrud:logradouro_input');
  

    const inputNumero = document.getElementById('formcrud:filtro-numero');
    const buttonPesquisar = document.getElementById('formcrud:j_idt284');




    inputNumero.value = '1610';
    inputLogradouroHin.value  = 'RUA ARNALDO VICTALIANO';
    inputLogradouro.value = 'RUA ARNALDO VICTALIANO';
    
    // await buttonPesquisar.click();

});
var a = await page.$('input[id="formcrud:logradouro_input"]');
a.press('Backspace');
await a.contentFrame();


//   await browser.close();
})();

