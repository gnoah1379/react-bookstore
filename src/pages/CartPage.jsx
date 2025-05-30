import '../css/Cart.css'

function CartPage() {
    return (
        <div className="cart">
            <h2 className="cart-title">GIỎ HÀNG <p className="cart-title-total">(1 sản phẩm)</p></h2>
            <div className="cart-list">
                <div className="content-box title-list">
                    <input type="checkbox" className="checkbox-all-product"></input>
                    <span className="checkbox-tick"></span>
                    <p className="select-all">Chọn tất cả (1 sản phẩm)</p>
                    <p className="count">Số lượng</p>
                    <p className="total">Thành tiền</p>
                </div>
                <div className="content-box book">
                    <input type="checkbox" className="checkbox-product"></input>
                    <div className="book-img-thumbnails">
                        <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="Thumbnail 1" />
                    </div>
                    <div className="title">5 Centimet Trên Giây - One More Side (Tái Bản 2024)</div>
                    <div className="quantity">4</div>
                    <div className="total">368.000 đ</div>
                    <div className="cancel">C</div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;