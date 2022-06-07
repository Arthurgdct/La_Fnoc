/*code Aurelien et Arthur pour panier*/

fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data = data.results;
        console.log(data);
        let paniertest = document.getElementById("panier_test")

        for (let i = 0; i < data.length; i++) {


            let titles = data[i].product_Name;
            let imgs = data[i].Src_Img;
            let prix = data[i].price_Btn;
            let section = document.getElementById("section");


            let div = document.createElement("div");
            let p = document.createElement("p");


            let contentdesc = document.createTextNode(titles);
            p.appendChild(contentdesc);

            let contentitle = document.createTextNode(prix);
            p.appendChild(contentitle);

            let contentimg = document.createElement("img");
            div.appendChild(contentimg);
            contentimg.src = imgs;

            /*
                        p.classList.add("para");
                        divindiv.classList.add("info");
                        div.classList.add("film");
                        /*
            
                        /*Sans affecter l'enfant a son parent ça ne fonctionne pas. */
            div.appendChild(p);
            paniertest.appendChild(div);
        }
    })
/* fin code aurelien et arthur pour panier*/

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






