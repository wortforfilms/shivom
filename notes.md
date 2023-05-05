create typescript to register new product and show filtered list  

//Interface
interface Product{
    name: string;
    type: string;
    price: number;
    quantity: number;
}

//Register new product
let registerProduct = (name: string, type: string, price: number, quantity: number): void => {
    let data: Product = {
        name: name,
        type: type,
        price: price,
        quantity: quantity
    }
    //add the new product to the list
    products.push(data);
}

//Filter list
let filterProductList = (filterType: string, filterPrice: number): Product[] => {
    let filteredProductList: Product[] = [];

    for(let i = 0; i < products.length; i++){
        if(products[i].type === filterType && products[i].price <= filterPrice){
            filteredProductList.push(products[i]);
        }
    }

    return filteredProductList;
}