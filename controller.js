function saveNewIcecream(input){
model.input.newIcecream.typeOfIcecream = input
console.log(input)
}
function saveFilling(input){
model.input.newIcecream.filling = input
}
function saveTopping(input){
model.input.newIcecream.topping = input
}
function saveBerries(input){
model.input.newIcecream.berries = input
}
function saveGlace(input){
    model.input.newIcecream.glace = input
}
function saveTypeOfContainer(input){
    model.input.newIcecream.typeOfContainer = input
}
function saveKcal(input){
    model.input.newIcecream.kCal = input
}
function saveCreateIcecreamName(input){
    model.input.newIcecream.createIcecreamName = input
}
function submitIcecream(){
    let newIcecream = {
        id: model.data.icecream.length + 1,
        typeOfIcecream: model.input.newIcecream.typeOfIcecream,
        filling: model.input.newIcecream.filling,
        topping: model.input.newIcecream.topping,
        berries: model.input.newIcecream.berries,
        glace: model.input.newIcecream.glace,
        typeOfContainer: model.input.newIcecream.typeOfContainer,
        kCal: model.input.newIcecream.kCal,
        createIcecreamName: model.input.newIcecream.createIcecreamName,
    }
    model.data.icecream.push(newIcecream);
updateView();
}