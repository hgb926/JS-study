import Component from "./Component.js";

class ShoppingCart extends Component {

    constructor(tagId) {
        super(tagId);
        // 장바구니에 담은 product들을 저장
        this.cartItems = [];
    }

    render() {
        let sum = 0;
        const childHtml = `
      <h2>총액 ${sum}원</h2>
      <button>주문하기</button>
    `;

        this.createElement('section', 'cart', childHtml);

    }
}

// 총액 갱신

export default ShoppingCart;