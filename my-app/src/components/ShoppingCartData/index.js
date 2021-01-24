import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from "styled-components";


const MainBox = styled.div`
    width:40%;
    display:block;
    border: 1px solid $greycolor;
    box-shadow: 0px 0px 0px 1px;
    padding:15px;
`;

const ItemRow = styled.div`
    width:100%;
    display:flex;
    border-bottom: 2px dotted #ccc;
    margin-top:10px;
`;


const TotalRow = styled.div`
    width:100%;
    display:flex;
    margin-top:10px;
`;




const ShoppingCartData = ({data, handlebasket}) => {
    const [basket,setBasket] = useState(data)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };
    
    useEffect(()=> {
       setBasket(data)
      }, [data])
   

    const handleQuantity = (e, d) => {
        const re = /^[0-9\b]+$/;
        if (e === '' || re.test(e) && (e >= 0 && e <= 3)) {
            let result = basket.map(el => el.name == d.name ? {...el, quantity: e, total: e * el.price} : el);
            handlebasket(result)
        }
    }

    const deleteItemfromBasket = (name) => {
        basket.splice(basket.findIndex(v => v.name === name), 1)
        handlebasket(basket)
    }

    const clearQuantity = () => {
        basket.forEach((item,index)=>{
            basket[index].quantity = 0 
            basket[index].total = 0
         })
        handlebasket(basket)        
    }

      return (
        <div>
            {basket.length <= 0  &&
                <MainBox>
                    <span className="label">There are no items in the basket</span>
                </MainBox>
            }

            {basket.length > 0 && 
            <div>    
                <MainBox>
                    <ItemRow>
                        <span className="info">Max quantity allow per item is 3</span>
                    </ItemRow>
                    {basket.map((d) =>
                    <ItemRow>
                        <div className="col1">
                            <span className="textRow">{d.name}</span>
                        </div>
                        <div className="col2">
                            <input type="text" name="qty"
                                placeholder={d.quantity}
                                value={d.quantity} 
                                onChange={(e)=> handleQuantity(e.target.value, d)}
                            />
                        </div>
                        <div className="col3">
                            {d.currency} {parseFloat(d.total).toFixed(2)}
                        </div>
                        <div className="col4">
                            <a className="label" href="#" onClick={() => deleteItemfromBasket(d.name)}>X</a>
                        </div>
                    </ItemRow>
                    )}
                    <TotalRow>
                        <div className="col1">
                            <span className="labelTotal">{basket[0].currency} {parseFloat(basket.map(item => item.total).reduce((prev, curr) => prev + curr, 0)).toFixed(2)}</span>
                        </div>
                        <div className="col3">
                            <a className="label" href="#" onClick={() => clearQuantity()}>Clear</a>
                        </div>
                        <div className="colbutton">
                            <Button onClick={handleClickOpen} variant="contained" color="primary">Check Out ></Button>
                        </div>
                    </TotalRow>
                </MainBox>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Shopping Cart Total"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Total Purchase : {basket[0].currency} {parseFloat(basket.map(item => item.total).reduce((prev, curr) => prev + curr, 0)).toFixed(2)}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            }
        </div>
    )
   };

  export default ShoppingCartData;