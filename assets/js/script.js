
fetch('./assets/json/Fnocs.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    data = data.results;
    console.log(data);

    let main = document.getElementById('all_Category');

    for (let i = 0; i < data.length; i++) {
        
        
        let category= document.createElement('section');
        category.classList.add("category");
        main.appendChild(category);

        let produce = document.createElement('article');
        produce.classList.add("produce");
        category.appendChild(produce);

        let Src_Img = document.createElement('img');
        Src_Img.src = data[i].Src_Img;
        Src_Img.classList.add("Src_Img");
        produce.appendChild(Src_Img);

        let description = document.createElement('div');
        description.classList.add("description");
        produce.appendChild(description);
        
        let product_Name = document.createElement('h5');
        let createTextNode_Name = document.createTextNode(data[i].product_Name);
        product_Name.classList.add("product_Name");
        description.appendChild(product_Name);
        product_Name.appendChild(createTextNode_Name);

        let product_Description = document.createElement('p');
        let createTextNode_Description = document.createTextNode(data[i].product_Description);
        product_Description.classList.add("product_Description");
        description.appendChild(product_Description);
        product_Description.appendChild(createTextNode_Description);

        let price_Btn = document.createElement('p');
        let createTextNode_Price = document.createTextNode(data[i].price_Btn);
        price_Btn.classList.add("price_Btn");
        description.appendChild(price_Btn);
        price_Btn.appendChild(createTextNode_Price);

        let add_Btn = document.createElement('button');
        let createTextNode_Btn = document.createTextNode(data[i].add_Btn);
        add_Btn.classList.add("add_Btn");
        description.appendChild(add_Btn);
        add_Btn.appendChild(createTextNode_Btn);

        let identification = document.createElement('id');
        // Element.setAttribute(name, value);
        add_Btn.setAttribute("id",(data[i].id));
        add_Btn.appendChild(identification);
    
    }

})
        

        
        
        

        

        

        
        
        

       

        






