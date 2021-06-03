import React from 'react'

export default function CartRow(props) {
    console.log("test",props);
    const { id, title,count, img, price } = props.item;
    const {decrement, increment, removeItem} = props.value;
    return (
                <div className="row my-1 text-capitalize text-center">
                    <div className="col-10 mx-auto col-lg-2">
                        <img 
                            src={img} 
                            style={{width:"5rem",height:"5rem"}}
                            alt="product" className="img-fluid"
                        />     
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-capitalize">
                            <span className="d-lg-none">product:</span>
                            {title}
                        </p>     
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-capitalize"><span className="d-lg-none">price: $</span>{price}</p>     
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                            <div>
                                <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                                    -
                                </span>
                                <span className="btn btn-black mx-1">
                                    {count}
                                </span>
                                <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="carte-icon" onClick= {()=>removeItem(id)}><i className="fas fa-trash-alt"></i></span>   
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        
                        <p className="text-capitalize"><span >Total item: $</span>{price * count}</p>     
                    </div>
                </div> 
    )
}
