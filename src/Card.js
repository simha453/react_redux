
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AddProduct } from './actions';
import { RemoveProduct } from './actions';


const Card = ({products,AddProduct,RemoveProduct}) => {
const[item,setItem] =useState("");
const submitHandler = async (e) => {
    e.preventDefault();
    if(item!==''){
    await AddProduct({name:item});
        setItem('');
    }
}

  return (
<center>
    <div className="card">
        <div className="card-body">
            <form className='form'>
                <input type="text" className='form-group'  placeholder='Add descritpion' value={item} onChange={e =>setItem(e.target.value)} />
            {" "}<button type='button' className='btn btn-success' onClick={(e)=>submitHandler(e)}> Save</button>
            </form>
            <br/>
            {
                products?.length >= 1&& products?.map((product,index)=>{
                    return(
                        <div className='item' key={index}>
                            {product.name}
                           {"  "} <span onClick={() => RemoveProduct(product.name)} style={{"color":"red"}}>X</span>
                        </div>
                    )

                })
            }
        </div>
    </div>
</center>
  )
};
const mapStateToProps = state => ({
    products:state
})
export default connect(mapStateToProps,{AddProduct,RemoveProduct}) (Card);
