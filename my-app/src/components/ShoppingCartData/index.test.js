import React from 'react'
import ShoppingCartData from '.'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Shopping Cart Data', () => {
 
    it('render', () => {
        const shoppingcartdata = shallow(<ShoppingCartData data={[]} />)
        expect(shoppingcartdata).toBeTruthy();
    })

    it('handle when basket is empty', () => {
        jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => setBasket([]))
        const content = shallow(<ShoppingCartData data={[]} />)
        const shoppingcartdata = content.find('#noItem')
        expect(shoppingcartdata).toBeTruthy();
    })

    it('handle when basket is not empty', () => {
        const data = [
            {
            "name": "Toilet Roll",
            "SKU": 1298443,
            "price": 1.3,
            "currency": "£",
            "metadata": {
                "category": "toiletries"
            }
            },
        ]

        jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => setBasket([]))
        const content = shallow(<ShoppingCartData data={data} />)
        const shoppingcartdata = content.find('#information')
        expect(shoppingcartdata).toBeTruthy()
    })
  
    it('show dialog', () => {
        const data = [
            {
                "name": "Toilet Roll",
                "SKU": 1298443,
                "price": 1.3,
                "currency": "£",
                "metadata": {
                    "category": "toiletries"
                }
            },
        ]

        jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => setBasket([]))

        const content = shallow(<ShoppingCartData data={data} />)
        content.find('#checkout').simulate('onClick')
        const dialog = content.find('Dialog')
        expect(dialog).toBeTruthy()
    })
})