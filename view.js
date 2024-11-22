updateView()

function updateView(){
    model.app.div.innerHTML = /*HTML*/`
    
    <div >
    <h1>Lag din egen iskrem!</h1>
    Type of icecream:<input type="text" onchange="saveNewIcecream(this.value)"><br>
    Filling:<input type="text" onchange="saveFilling(this.value)"><br>
    Topping:<input type="text" onchange="saveTopping(this.value)"><br>
    Berries:<input type="text" onchange="saveBerries(this.value)"><br>
    Glace:<input type="text" onchange="saveGlace(this.value)"><br>
    Type of container:<input type="text" onchange="saveTypeOfContainer(this.value)"><br>
    kCal:<input type="text" onchange="saveKcal(this.value)"><br>
    Name your icecream:<input type="text" onchange="saveCreateIcecreamName(this.value)"><p>
    <button onclick="submitIcecream()">Submit</button>
    ${displayAllIcecream()}

    `
}

function displayAllIcecream(){
let html = '';
model.data.icecream.forEach(icecream => {
html += `
<div><p><br>
<p><b>ICECREAM:</b>
<p><b>Type of icecream: </b>${icecream.typeOfIcecream}</p>
<p><b>Filling: </b>${icecream.filling}</p>
<p><b>Topping: </b>${icecream.topping}</p>
<p><b>Berries: </b>${icecream.berries}</p>
<p><b>Glace: </b>${icecream.glace}</p>
<p><b>Type of container: </b>${icecream.typeOfContainer}</p>
<p><b>kCal: </b>${icecream.kCal}</p>
<p><b>Name your icecream: </b>${icecream.createIcecreamName}</p>
</div>
`
});
return html;
}