let  btc = 19000 , eth = 1100 , usdt = 0.99;
let monto = 0, saldo = 0, saldoBtc = 0, saldoEth = 0; saldoUsdt=0, btcInvested = 0, ethInvested = 0, usdtInvested = 0;
let transacciones = 0, totalAccount = 0;
const id ="", usuario = "", contrasena ="";
let registredUsers = 0;
const userList = [];
/*

    INICIO DECLARACION DE FUNCIONES

*/
function showContent(id,e) {
    document.getElementById("error").style.display='none';

    if (e.checked) {
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}

function deposito() {
    document.getElementById("error1").style.display='none';

    let valor= parseInt(document.getElementById("depositbtn").value);
    if((!isNaN(valor)) && (" " !== valor))
    {
        totalAccount = totalAccount + valor;
        document.getElementById("total").innerHTML=" $ " + totalAccount;
        Swal.fire({
            title:'Deposito satifactoria!',
            icon:"success",
            confirmButtonText:'Aceptar',
        })
    }
    else {
        document.getElementById("error1").innerHTML="El campo no puede estar vacio";
        document.getElementById("error1").style.display='block'
    }
}

function retiro() {
    document.getElementById("error").style.display='none';

    let valor= parseInt(document.getElementById("withdrawbtn").value);
    if((!isNaN(valor)) && (" " !== valor))
    {
        if(valor<=totalAccount)
        {
            totalAccount=totalAccount-valor;
            document.getElementById("total").innerHTML= " $  " + totalAccount;
            Swal.fire({
                title:'Retiro satifactoria!',
                icon:"success",
                confirmButtonText:'Aceptar',
            })
        }
        else{
            document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("error").style.display='block';
        }
    }else {
        document.getElementById("error").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("error").style.display='block';
    }
}

    function buyBtc(){
        document.getElementById("errorbtc").style.display='none';
        let valor= parseInt(document.getElementById("buybtc").value);
        if(!isNaN(valor)){
            saldoBtc = saldoBtc + (valor / btc);
            document.getElementById("btctotal").innerHTML= "  " + saldoBtc + " ($" + (saldoBtc*btc) + ")";
            Swal.fire({
                title:'Compra satifactoria!',
                icon:"success",
                confirmButtonText:'Aceptar',
            })
        }else {
            document.getElementById("errorbtc").innerHTML="El campo no puede estar vacio y no pueden ser letras";
            document.getElementById("errorbtc").style.display='block';
        }
    }

function buyEth(){
    document.getElementById("erroreth").style.display='none';

    let valor2= parseInt(document.getElementById("buyeth").value);
    if(!isNaN(valor2)){
        saldoEth = saldoEth + (valor2 / eth);
        document.getElementById("ethtotal").innerHTML="  " + saldoEth + " ($" + (saldoEth*eth) + ")";
        Swal.fire({
            title:'Compra satifactoria!',
            icon:"success",
            confirmButtonText:'Aceptar',
        })
    }
    else {
        document.getElementById("erroreth").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("erroreth").style.display='block';
    }
}

function buyUsdt(){
    document.getElementById("errorusdt").style.display='none';

    let valor3= parseInt(document.getElementById("buyusdt").value);
    if(!isNaN(valor3)){
        saldoUsdt = saldoUsdt + (valor3 / usdt);
        document.getElementById("usdttotal").innerHTML="  " + saldoUsdt  + " ($" + (saldoUsdt*usdt) + ")";
        Swal.fire({
            title:'Compra satifactoria!',
            icon:"success",
            confirmButtonText:'Aceptar',
        })
    }
    else {
        document.getElementById("errorusdt").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("errorusdt").style.display='block';
    }
}

function investBtc(){
    document.getElementById("errorbtc1").style.display='none';

    let valor= parseFloat(document.getElementById("investbtc").value);
    if(!isNaN(valor)){
        if ((valor+btcInvested) > saldoBtc){
            document.getElementById("errorbtc1").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("errorbtc1").style.display='block';
        }
        else{
        btcInvested = btcInvested + valor;
        document.getElementById("btcinvesttotal").innerHTML= "  " + btcInvested + " ($" + (btcInvested*btc) + ")";
        Swal.fire({
                title:'Inversión realizada!',
                icon:"success",
                confirmButtonText:'Aceptar',
            })
        }
    }else {
        document.getElementById("errorbtc1").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("errorbtc1").style.display='block';
    }
}
function investEth(){
    document.getElementById("erroreth1").style.display='none';

    let valor= parseFloat(document.getElementById("investeth").value);
    if(!isNaN(valor)){
        if ((valor+ethInvested) > saldoEth){
            document.getElementById("erroreth1").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("erroreth1").style.display='block';
        }
        else{
        ethInvested = ethInvested + valor;
        document.getElementById("ethinvesttotal").innerHTML= "  " + ethInvested + " ($" + (ethInvested*eth) + ")";
        Swal.fire({
            title:'Inversión realizada!',
            icon:"success",
            confirmButtonText:'Aceptar',
        })
        }
    }else {
        document.getElementById("erroreth1").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("erroreth1").style.display='block';
    }
}
function investUsdt(){
    document.getElementById("errorusdt1").style.display='none';

    let valor= parseFloat(document.getElementById("investusdt").value);
    if(!isNaN(valor)){
        if ((valor+usdtInvested) > saldoUsdt){
            document.getElementById("errorusdt1").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("errorusdt1").style.display='block';
        }
        else{
        usdtInvested = usdtInvested + valor;
        document.getElementById("usdtinvesttotal").innerHTML= "  " + usdtInvested + " ($" + (usdtInvested*usdt) + ")";
        Swal.fire({
            title:'Inversión realizada!',
            icon:"success",
            confirmButtonText:'Aceptar',
        })
        }
    }
    else {
        document.getElementById("errorusdt1").innerHTML="El campo no puede estar vacio y no pueden ser letras";
        document.getElementById("errorusdt1").style.display='block';
    }
}

    /* inicio funcion para insertar dom */
function dom (){
    if (cryptoList.length === 0) {
        document.getElementById("nameTitle").innerHTML = " Usted no esta invirtiendo";
    }
    else{
    let dom = cryptoList.map(function(bar){
        return '<li>'+bar.moneda+' '+bar.cantidad+'</li>'
    })
    document.getElementById("nameTitle").innerHTML = " Sus inversiones son: \n" + dom;
    }
    document.getElementById("cantTransacciones").innerHTML = " Cantidad de transacciones: \n" + transacciones;
}

function newUser(){
    class UsuariosRegistrados{
        constructor(usuario, contrasena) {
            this.usuario = document.getElementById('registroUsuario').value;
            this.contrasena = document.getElementById('registroContraseña').value;
        }
    }
    const newUser = new UsuariosRegistrados(id, usuario, contrasena);
    userList.push(newUser);
    registredUsers = userList.length ;
    document.getElementById("usuariosregistrados").innerHTML= registredUsers;
    }
    /* fin funcion dom */


    fetch('./data.json')
    .then ( (resp) => resp.json())
    .then( (data) => {
        var foo = data.map(function(bar){
            return "     " + bar.moneda + " : " + "$" + bar.valor;
        })
        document.getElementById("list").innerHTML = foo;
    })

/*

    FIN DECLARACION DE FUNCIONES

*/