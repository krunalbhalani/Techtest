import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchshoppingcartlist, updateBasket} from '../../actions/index'
import ShoppingCartData from '../../components/ShoppingCartData'


class ShoppingCartList extends Component
{
    componentDidMount() {
        this.props.fetchshoppingcartlist()
    }

    render() {
        const handlebasket = (basket) => {
            this.props.updateBasket(basket)
        }

        return(
            <div>
                <ShoppingCartData data={this.props.shoppingcart} handlebasket={handlebasket} />
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingcart: state.shoppingcart,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchshoppingcartlist, updateBasket}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ShoppingCartList);
