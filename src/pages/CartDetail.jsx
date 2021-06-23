import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Card, Icon } from "semantic-ui-react";
import { addToCart, reduceTheAmount, removeFromCart } from "../store/actions/cartActions";

export default function CartDetail() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveToCart = (product)=>{
    dispatch(removeFromCart(product));
    toast.success(`${product.productName} sepetten silindi`)
  }

  const handleReduceTheAmount = (product)=>{
    dispatch(reduceTheAmount(product));
    toast.success(`${product.productName} miktarı azaltıldı`)
  }

  const handleAddToCart = (product)=>{
      dispatch(addToCart(product));
      toast.success(`${product.productName} miktarı artırıldı`)
  }
  const calculatePrice = (unitPrice,quantity)=>{
    let result = unitPrice*quantity;
    return result;
  }
  return (
    <div>
      <h1>
        <strong>Sepete eklenen ürünler</strong>
      </h1>
      {cartItems.map((cartItem) => (
          <Card.Group >
            <Card fluid style={{float:"left"}}>
              <Card.Content>
                <Card.Header>{cartItem.product.productName}</Card.Header>
                <Card.Description>
                  <strong>Total Price:</strong> {calculatePrice(cartItem.product.unitPrice,cartItem.quantity)}
                  <br />
                  <strong>Quantity: </strong> {cartItem.quantity}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui three buttons">
                  <Button onClick={()=>{handleRemoveToCart(cartItem.product)}} negative >
                  <Icon name="delete" size="large"/> Delete
                  </Button>
                  <Button disabled={cartItem.quantity<1} onClick={()=>handleReduceTheAmount(cartItem.product)}  positive>
                  <Icon name="minus" size="large"/> Miktari azalt
                  </Button>
                  <Button  onClick={()=>handleAddToCart(cartItem.product)}  positive>
                  <Icon name="plus" size="large"/>Miktari Artır 
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
       
      ))}
    </div>
  );
}
