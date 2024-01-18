const KEY = '5f8581ca4981de783cf7b19b583cadc6'
let pais,temp,estado,icono,dayTime,coordenada=[];
let btn = document.querySelector('.btn')
let envio = document.querySelector('.cards')
let input = document.getElementById('envioCiudad')
let x = "";
let reload = [];
let before = localStorage.getItem('wheather')
before = JSON.parse(before)
if(before){
    reload.push(...before)
}
let before2 = localStorage.getItem('coords')
before2 = JSON.parse(before2)
if(before2){
    coordenada.push(...before2)
}
const cargarCiudad = async (element) => {
    const url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${KEY}&lang=es&units=metric`);
    let respuesta = await url.json()
    //console.log(respuesta.id)
    if (respuesta.cod === 200) {
        //Inyectando contenido a las variables
        pais=respuesta.sys.country;
        estado=respuesta.weather[0].description;
        temp=respuesta.main.temp;
        icono=respuesta.weather[0].icon;
        dayTime=icono.split('');
        dayTime=dayTime[2]=== 'd' ? dayTime='dia' : dayTime='noche';
        //Declarando las etiquetas de la estructura
        const cor = document.createElement('div');
        const div = document.createElement('div');
        const ciudad =document.createElement('span');
        const Cpais = document.createElement('span');
        const divimg = document.createElement('div');
        const Cclima = document.createElement('span');
        const Ctemp = document.createElement('div');
        const CdateTime = document.createElement('div');
        const img=document.createElement('img');
        //Inyección de contenido
        cor.textContent=respuesta.id
        Ctemp.textContent=temp+" °C ";
        ciudad.textContent=element+"-";
        Cclima.textContent= estado;
        Cpais.textContent=pais;
        CdateTime.textContent=dayTime;
        img.src=`https://openweathermap.org/img/wn/${icono}@2x.png`;
        divimg.className="card-head"
        img.className="card-img-top"
        div.appendChild(ciudad)
        div.appendChild(Cpais);
        div.appendChild(Ctemp);
        div.appendChild(CdateTime);
        divimg.appendChild(img);
        div.appendChild(Cclima);
        div.appendChild(divimg);
        envio.appendChild(div);
        localStorage.setItem('coords',JSON.stringify(coordenada));
        localStorage.setItem('wheather',JSON.stringify(reload));
    } else {
        alert("La ciudad no existe o está mal digitada.");
    }
}
addEventListener('keyup',(event) => {
    if (event.key=='Enter'){
        let input = document.getElementById('envioCiudad').value
        document.getElementById('envioCiudad').value=''
        cargarCiudad(input)
        reload.push(input); 
    }
})
btn.addEventListener('click',()=>{
    let input = document.getElementById('envioCiudad').value
    document.getElementById('envioCiudad').value=''
    cargarCiudad(input)
    reload.push(input);   
});
reload.forEach(element => {
   cargarCiudad(element);
});
