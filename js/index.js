function aggiuntaTagP(testo,contenitore){
    var p = document.createElement('p');
    p.innerText = testo;
    document.getElementById(gitcontenitore).append(p);
}

function caricaData(){
    setTimeout(function(){
        moment('it');
        var sunrise = 1485762037;
        var data = moment.unix(sunrise);
        var dataEstesa = data.format('hh:mm:ss');
        console.log(dataEstesa);
        // var p = document.createElement('p');
        // p.innerText = dataEstesa;
        // document.getElementById('contenitore').append(p);
        aggiuntaTagP(dataEstesa,'contenitore');

        var dataIntera = data.format('LLL');
        // var p1 = document.createElement('p');
        // p1.innerText = dataIntera;
        // document.getElementById('contenitore').append(p1);
        aggiuntaTagP(dataIntera,'contenitore');

        var settimana = data.format('LLLL');
        // var p2 = document.createElement('p');
        // p2.innerText = settimana;
        // document.getElementById('contenitore').append(p2);
        aggiuntaTagP(settimana,'contenitore');

        var oggi = moment();
        console.log(oggi);
        var dataScadenza = oggi.add(30, 'days');
        var dataScadenzaStringa = dataScadenza.format('LLLL');
        // var p3 = document.createElement('p');
        // p3.innerText = dataScadenzaStringa;
        // document.getElementById('contenitore').append(p3);
        aggiuntaTagP(dataScadenzaStringa,'contenitore');


    },1000);
}