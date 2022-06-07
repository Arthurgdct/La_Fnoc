

fetch("./assets/json/Fnocs.json")
.then((Fnocs)=>Fnocs.json())
.then((data) => {
    data = data.results;
    console.log(data);


    for (let i = 0; i < data.length; i++) {
        
        let main = document.createElement('main');
        let category= document.createElement('section');
        let article = document.createElement('article');
        let Src_Img = document.createElement('img');
        let division = document.createElement('div');
        let product_Name = document.createElement('h3');
        let product_Description = document.createElement('p');
        let price_Btn = document.createElement('button');
        let add_Btn = document.createElement('button');


        main.appendChild(section);
        category.appendChild(article);
        article.appendChild(Src_Img);
        article.appendChild(division);
        division.appendChild(product_Name);
        division.appendChild(product_Description);
        division.appendChild(price_Btn);
        division.appendChild(add_Btn);
        
        Src_Img.src = data[i].Src_Img;
        category.createTextNode = "(data[i].category)";
        product_Description.createTextNode = "(data[i].product_Description)";
        product_Name.createTextNode = "(data[i].product_Name)";
        category.createTextNode = "(data[i].category)";
      

       




    }

})

//Début code Aurelien et Arthur


fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        for (let i = 0; i < data.results.length; i++)
        
            if(document.getElementById(i) = data.results[i].id){
                newBlocForProduct()
             }

    
})
//recupere le storage pour verifier si le client na pas deja un panier en cours.
getCartFromStorage(); 

//si l'utilisateurs clic sur la page, vérifie le clic et démare un "Si". 

document.addEventListener("click", event => {
    if (event.target.matches(".add_Btn")) {
    
        newBlocForProduct();

    } else {
        console.log("non");
    }
})





/////////////////////////////// ^ Code mis en application ^ ///////////////////////////////////////


////////////////////////////// v Morceau de code pour m aider v ///////////////////////////////////


/*    //////     Pour ajouter des classes a des bloc cree auto /////
            p.classList.add("para");
            divindiv.classList.add("info");
            div.classList.add("film"); */




/*      ///////*Pour Attribuer du texte a des "paragraphe" encore inexistant ////////////

for (let i = 0; i < data.length; i++) {

        let titles = data[i].product_Name;
        let imgs = data[i].Src_Img;
        let prix = data[i].price_Btn;

        let contentdesc = document.createTextNode(titles);
        let contentitle = document.createTextNode(prix);
        let contentimg = document.createElement("img");

*/

////////////////////////////// ^ Morceau de code pour m aider ^ ///////////////////////////////////


//////////////////////////////    v Liste de Function v    ///////////////////////////////////////


//ajoute un produit au tableau cartfnoc
function productToCart() {
    productInList = new Object();
    productInList.price = 
    productInList.name = 
    product.push(productInList);
}
//envoie des donnees dans le local storage
function FromStorageToCart() {
    localStorage.setItem('cartefnoc', JSON.stringify(cartfnoc));
}
//Recupere les donnees dans le local storage
function getCartFromStorage() {
    cart = JSON.parse(localStorage.getItem("cartfnoc")) || [];
}
//Cree un bloc vide pour accueillir des donnees
function newBlocForProduct(i) {
    let cartRecap = document.getElementById("panier_test");
    let div = document.createElement("div");
    let p = document.createElement("p");

    div.appendChild(p);
    cartRecap.appendChild(div);

}



// Partie Arthur Solo

fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data = data.results;
        console.log(data);
        localStorage.setItem('produits', JSON.stringify(data));
    })


fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data = data.results;
        produits = JSON.parse(localStorage.getItem("produits"));
        console.log(produits);
        let result = 0

        for (let i = 0; i < produits[1].length; i++) {
            if (produits.lenght == 0) {
                console.log("Rien");
            } else if (produits.lenght == 1) {
                console.log(produits.price);
            } else {
                result = produits[i][i].price_Btn + result;
                resulteuro = result + "€"
                console.log(resulteuro);
            }
        }
    })






