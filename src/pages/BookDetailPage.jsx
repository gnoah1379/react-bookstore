import '../css/Detail.css';

function BookDetailPage() {
    return (
        <div className="detail">
            <div className="detail-content">
                <div className="detail-left-side">
                    <div className="book-img">
                        <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="Book Cover" />
                        <div className="book-img-overlay">
                        </div>
                    </div>
                    <div className="book-img-thumbnails">
                        <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="Thumbnail 1" />
                        <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="Thumbnail 2" />
                        <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="Thumbnail 3" />
                    </div>
                    <div className="add-box">
                        <button className="add-to-cart">Thêm vào giỏ hàng</button>
                        <button className="buy-now">Mua ngay</button>
                    </div>
                </div>

                <div className="detail-right-side">
                    <div className="content-box book-info">
                        <div className="bookname">
                            <h2>5 Centimet Trên Giây - One More Side (Tái Bản 2024)</h2>
                        </div>
                        <div className="book-view">
                            <div className="book-view1">
                                <p>Nhà cung cấp: IPM</p>
                                <p>Tác giả: <strong>Shinkai Makoto, Kanoh Arata</strong></p>
                            </div>
                            <div className="book-view2">
                                <p>Nhà xuất bản: <strong>Hồng Đức</strong></p>
                                <p>Hình thức bìa: <strong>Bìa Mềm</strong></p>
                            </div>
                        </div>
                        <div className="book-rate">
                            <span className="rating">★★★★☆</span>
                            <span className="rating-count">(100 đánh giá)</span>
                        </div>
                        <div className="price">
                            <span className="discount-price">92.400 đ</span>
                            <span className="original-price">120.000 đ</span>
                        </div>
                        <div className="book-stock">
                            <p>25 nhà sách còn hàng</p>
                        </div>
                    </div>

                    <div className="content-box book-detail">
                        <h3>Thông tin chi tiết</h3>
                        <div className="book-detail-content">
                            <table className="data-table">
                                <colgroup>
                                    <col width="25%" />
                                    <col width="75%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th className="table-label">Mã hàng</th>
                                        <td className="data">8935250715331</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Tên Nhà Cung Cấp</th>
                                        <td className="data">IPM</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Tác giả</th>
                                        <td className="data">Shinkai Makoto, Kanoh Arata</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Người Dịch</th>
                                        <td className="data">QC Trang</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">NXB</th>
                                        <td className="data">Hồng Đức</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Năm XB</th>
                                        <td className="data">2024</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Ngôn Ngữ</th>
                                        <td className="data">Tiếng Việt</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Trọng lượng (gr)</th>
                                        <td className="data">170</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Kích Thước Bao Bì</th>
                                        <td className="data">18 x 13 x 0.7 cm</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Số trang</th>
                                        <td className="data">152</td>
                                    </tr>
                                    <tr>
                                        <th className="table-label">Hình thức</th>
                                        <td className="data">Bìa Mềm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="content-box book-description">
                        <h3>Mô tả sản phẩm</h3>
                        <h5>5 Centimet Trên Giây - One More Side</h5>
                        <p>
                            Nếu coi tiểu thuyết 5 CENTIMET TRÊN GIÂY là một bức tranh ghép hình, khắc họa chuyện đời,
                            chuyện tình của Tono Takaki, thì 5 CENTIMET TRÊN GIÂY ONE MORE SIDE giống như phần mở rộng và hoàn thiện của bức tranh ấy.

                            Những mảnh ghép vốn có được thay mới cả về nội dung và cách thể hiện.
                            Những mảnh ghép ẩn được hé lộ đầy đủ và sáng tỏ.
                            Bức tranh tổng thể vì thế mà toàn vẹn hơn, đa chiều hơn.

                            Được chắp bút bởi tác giả quen thuộc Kanoh Arata,
                            5 CENTIMET TRÊN GIÂY ONE MORE SIDE sẽ đưa độc giả tiếp cận câu chuyện đượm buồn nhưng tuyệt đẹp của Shinkai Makoto một lần nữa,
                            qua “một góc nhìn khác”.
                        </p>
                    </div>
                </div>
            </div>

            <div className="review-content content-box">
                <h3>Đánh giá sản phẩm</h3>
                <div className="review-box">
                    <div className="rating-side">
                        <div className="rating-summary">
                            <span className="average-rating">4.5</span>
                            <span className="rating-stars">★★★★☆</span>
                            <span className="total-reviews">(100 đánh giá)</span>
                        </div>
                        <div className="rating-breakdown">
                            <div className="rating-item">
                                <span>5 Sao</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                                <span>70%</span>
                            </div>
                            <div className="rating-item">
                                <span>4 Sao</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '20%' }}></div>
                                </div>
                                <span>20%</span>
                            </div>
                            <div className="rating-item">
                                <span>3 Sao</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '5%' }}></div>
                                </div>
                                <span>5%</span>
                            </div>
                            <div className="rating-item">
                                <span>2 Sao</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '3%' }}></div>
                                </div>
                                <span>3%</span>
                            </div>
                            <div className="rating-item">
                                <span>1 Sao</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '2%' }}></div>
                                </div>
                                <span>2%</span>
                            </div>
                        </div>
                    </div>

                    <div className="review-side">
                        <form className="comment">
                            <textarea placeholder="Viết đánh giá của bạn ở đây..." rows="2"></textarea>
                            <button type="submit" className="submit-review">Gửi Đánh Giá</button>
                        </form>
                    </div>
                </div>
                <div className="show-reviews">
                    <div className="review">
                        <div className="user-info">
                            <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="User Avatar" className="user-avatar" />
                            <div className="user-content">
                                <p className="user-name"><strong>User1</strong></p>
                                <span className="user-rating">★★★★★</span>
                            </div>
                        </div>
                        <p>This book was amazing! I loved every part of it.</p>
                    </div>
                    <div className="review">
                        <div className="user-info">
                            <img src="https://cdn1.fahasa.com/media/catalog/product/5/c/5cmsonemoreside---bia1_2.jpg" alt="User Avatar" className="user-avatar" />
                            <div className="user-content">
                                <p className="user-name"><strong>User2</strong></p>
                                <span className="user-rating">★★★★</span>
                            </div>
                        </div>
                        <p>Not my favorite, but still a good read.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetailPage;