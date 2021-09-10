"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_bootstrap_1 = require("react-bootstrap");
const Rating_1 = __importDefault(require("../components/Rating"));
const Message_1 = __importDefault(require("../components/Message"));
const Loader_1 = __importDefault(require("../components/Loader"));
const Meta_1 = __importDefault(require("../components/Meta"));
const productActions_1 = require("../actions/productActions");
const productConstants_1 = require("../constants/productConstants");
const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = (0, react_1.useState)(1);
    const [rating, setRating] = (0, react_1.useState)(0);
    const [comment, setComment] = (0, react_1.useState)('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const productDetails = (0, react_redux_1.useSelector)((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const userLogin = (0, react_redux_1.useSelector)((state) => state.userLogin);
    const { userInfo } = userLogin;
    const productReviewCreate = (0, react_redux_1.useSelector)((state) => state.productReviewCreate);
    const { success: successProductReview, loading: loadingProductReview, error: errorProductReview, } = productReviewCreate;
    (0, react_1.useEffect)(() => {
        if (successProductReview) {
            setRating(0);
            setComment('');
        }
        if (!product._id || product._id !== match.params.id) {
            dispatch((0, productActions_1.listProductDetails)(match.params.id));
            dispatch({ type: productConstants_1.PRODUCT_CREATE_REVIEW_RESET });
        }
    }, [dispatch, match, successProductReview]);
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch((0, productActions_1.createProductReview)(match.params.id, {
            rating,
            comment,
        }));
    };
    return (<>
      <react_router_dom_1.Link className='btn btn-light my-3' to='/'>
        Go Back
      </react_router_dom_1.Link>
      {loading ? (<Loader_1.default />) : error ? (<Message_1.default variant='danger'>{error}</Message_1.default>) : (<>
          <Meta_1.default title={product.name}/>
          <react_bootstrap_1.Row>
            <react_bootstrap_1.Col md={6}>
              <react_bootstrap_1.Image src={product.image} alt={product.name} fluid/>
            </react_bootstrap_1.Col>
            <react_bootstrap_1.Col md={3}>
              <react_bootstrap_1.ListGroup variant='flush'>
                <react_bootstrap_1.ListGroup.Item>
                  <h3>{product.name}</h3>
                </react_bootstrap_1.ListGroup.Item>
                <react_bootstrap_1.ListGroup.Item>
                  <Rating_1.default value={product.rating} text={`${product.numReviews} reviews`}/>
                </react_bootstrap_1.ListGroup.Item>
                <react_bootstrap_1.ListGroup.Item>Price: ${product.price}</react_bootstrap_1.ListGroup.Item>
                <react_bootstrap_1.ListGroup.Item>
                  Description: {product.description}
                </react_bootstrap_1.ListGroup.Item>
              </react_bootstrap_1.ListGroup>
            </react_bootstrap_1.Col>
            <react_bootstrap_1.Col md={3}>
              <react_bootstrap_1.Card>
                <react_bootstrap_1.ListGroup variant='flush'>
                  <react_bootstrap_1.ListGroup.Item>
                    <react_bootstrap_1.Row>
                      <react_bootstrap_1.Col>Price:</react_bootstrap_1.Col>
                      <react_bootstrap_1.Col>
                        <strong>${product.price}</strong>
                      </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </react_bootstrap_1.ListGroup.Item>

                  <react_bootstrap_1.ListGroup.Item>
                    <react_bootstrap_1.Row>
                      <react_bootstrap_1.Col>Status:</react_bootstrap_1.Col>
                      <react_bootstrap_1.Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </react_bootstrap_1.Col>
                    </react_bootstrap_1.Row>
                  </react_bootstrap_1.ListGroup.Item>

                  {product.countInStock > 0 && (<react_bootstrap_1.ListGroup.Item>
                      <react_bootstrap_1.Row>
                        <react_bootstrap_1.Col>Qty</react_bootstrap_1.Col>
                        <react_bootstrap_1.Col>
                          <react_bootstrap_1.Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>))}
                          </react_bootstrap_1.Form.Control>
                        </react_bootstrap_1.Col>
                      </react_bootstrap_1.Row>
                    </react_bootstrap_1.ListGroup.Item>)}

                  <react_bootstrap_1.ListGroup.Item>
                    <react_bootstrap_1.Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
                      Add To Cart
                    </react_bootstrap_1.Button>
                  </react_bootstrap_1.ListGroup.Item>
                </react_bootstrap_1.ListGroup>
              </react_bootstrap_1.Card>
            </react_bootstrap_1.Col>
          </react_bootstrap_1.Row>
          <react_bootstrap_1.Row>
            <react_bootstrap_1.Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message_1.default>No Reviews</Message_1.default>}
              <react_bootstrap_1.ListGroup variant='flush'>
                {product.reviews.map((review) => (<react_bootstrap_1.ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating_1.default value={review.rating}/>
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </react_bootstrap_1.ListGroup.Item>))}
                <react_bootstrap_1.ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (<Message_1.default variant='success'>
                      Review submitted successfully
                    </Message_1.default>)}
                  {loadingProductReview && <Loader_1.default />}
                  {errorProductReview && (<Message_1.default variant='danger'>{errorProductReview}</Message_1.default>)}
                  {userInfo ? (<react_bootstrap_1.Form onSubmit={submitHandler}>
                      <react_bootstrap_1.Form.Group controlId='rating'>
                        <react_bootstrap_1.Form.Label>Rating</react_bootstrap_1.Form.Label>
                        <react_bootstrap_1.Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </react_bootstrap_1.Form.Control>
                      </react_bootstrap_1.Form.Group>
                      <react_bootstrap_1.Form.Group controlId='comment'>
                        <react_bootstrap_1.Form.Label>Comment</react_bootstrap_1.Form.Label>
                        <react_bootstrap_1.Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}></react_bootstrap_1.Form.Control>
                      </react_bootstrap_1.Form.Group>
                      <react_bootstrap_1.Button disabled={loadingProductReview} type='submit' variant='primary'>
                        Submit
                      </react_bootstrap_1.Button>
                    </react_bootstrap_1.Form>) : (<Message_1.default>
                      Please <react_router_dom_1.Link to='/login'>sign in</react_router_dom_1.Link> to write a review{' '}
                    </Message_1.default>)}
                </react_bootstrap_1.ListGroup.Item>
              </react_bootstrap_1.ListGroup>
            </react_bootstrap_1.Col>
          </react_bootstrap_1.Row>
        </>)}
    </>);
};
exports.default = ProductScreen;
//# sourceMappingURL=ProductScreen.js.map