import React, {useState,useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

//1-create context
const ProductContext = React.createContext();

//2-Provider
const ProductProvider =(props)=>{
    const [products,setProducts]=useState([]);
    const [productDetail, setProductDetail]= useState(detailProduct);
    const [cart, setCart]= useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        fillProducts();
    },[]);

    const fillProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(element => {
            tempProducts = [...tempProducts, {...element}];
        });
        setProducts(tempProducts);
    }

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product;
    }

    const handleProduct = (id) => {
        const product = getItem(id);
        setProductDetail(product);
    }

     const  addToCart = id => {
        let tempProducts = products;
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price * product.count;
        //console.log('product selected', product);
        setProducts(tempProducts);
        setCart([...cart,product]);
        if(cart.length > 0)
        addTotals();
    }

    const openModal = id =>{
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    }

    const closeModal=()=>{
        setModalOpen(false);
    }

    const increment=(id)=>{
        let tempCart = [...cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count++;
        product.total = product.count * product.price;
        tempCart[index]=product;

        setCart(tempCart);
        addTotals();
    }
    const decrement=(id)=>{
        
        let tempCart = [...cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count--;
        if(product.count <= 0){

            removeItem(id);
        }else{
            product.total = product.count * product.price;
            tempCart[index]=product;
    
            setCart(tempCart);
            addTotals();
        }
    }
    const removeItem=(id)=>{
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter((item)=> item.id !== id)
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        setProducts(tempProducts);
        setCart(tempCart);
        addTotals()
    }
    const clearCart = () =>{
        setCart([]);
        //console.log('hi ')
        fillProducts();
        addTotals();
        
    }
    

    const addTotals=()=>{
        let subtotals=0;
            cart.map(item=>{
                return subtotals += item.total
            });
            //console.log('subtotl',subtotals)
            const tempTax = subtotals * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total= subtotals + tax;
            setCartSubTotal(subtotals);
            setCartTax(tax);
            setCartTotal(total);       
    }
    return (
        <ProductContext.Provider value={{
            products:products,
            productDetail:productDetail, 
            cart:cart,
            modalOpen:modalOpen,
            modalProduct:modalProduct,
            cartSubTotal:cartSubTotal,
            cartTax:cartTax, 
            cartTotal:cartTotal,
            handleProduct: handleProduct,
            addToCart: addToCart,
            openModal : openModal,
            closeModal : closeModal,
            increment : increment,
            decrement : decrement,
            removeItem :removeItem,
            clearCart : clearCart
        }}>
            {props.children}
        </ProductContext.Provider>
    );


}
/*class ProductProvider extends Component {
    state = {
        products: [],
        productDetail: detailProduct,
        cart: [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubTotal :0,
        cartTax:0,
        cartTotal:0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(element => {
            const singleItem = {...element};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        });
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleProduct = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { productDetail: product };
        });
    }

    addToCart = id => {
        //console.log('product selected', id);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price * product.count;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {
            this.addTotals();
        })
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState({
            modalProduct : product,
            modalOpen:true
        })
    }

    closeModal=()=>{
        this.setState({modalOpen: false})
    }
    increment=(id)=>{
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count++;
        product.total = product.count * product.price;
        tempCart[index]=product;

        this.setState(()=>{
            return {
                cart : tempCart
            } 
        },()=>this.addTotals());
    }
    decrement=(id)=>{
        
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count--;
        if(product.count <= 0){

            this.removeItem(id);
        }else{
            product.total = product.count * product.price;
            tempCart[index]=product;
    
            this.setState(()=>{
                return {
                    cart : tempCart
                } 
            },()=>this.addTotals());
        }
    }
    removeItem=(id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter((item)=> item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(()=>{
            return{
                products : tempProducts,
                cart : tempCart
            }
        },()=>{
            this.addTotals();
        })
    }
    clearCart = () =>{
        this.setState({
            cart : []
        },
        ()=> {
            console.log('hi ')
            this.setProducts();
            this.addTotals();
        });
    }
    

    addTotals=()=>{
        let subtotals=0;
        this.state.cart.map(item=>{
            subtotals += item.total
        });
        const tempTax = subtotals * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total= subtotals + tax;
        this.setState(()=>{
            return{
                cartSubTotal : subtotals,
                cartTax : tax,
                cartTotal : total
            }
        })
    }

    render() {

        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleProduct: this.handleProduct,
                addToCart: this.addToCart,
                openModal : this.openModal,
                closeModal : this.closeModal,
                increment : this.increment,
                decrement : this.decrement,
                removeItem : this.removeItem,
                clearCart : this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    };
};*/

//3-Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };


//4- import the ProviderContext in this case we have ProductProvider, in index.js and wrapp everything under it like :
//<ProviderContext>
//<Router>
//<App />
//</Router>
// </ProviderContext>

//5-import the ConsumerContext (ProductConsumer) in any component u want 