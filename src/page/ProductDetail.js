import React, { useEffect } from "react"; // API 호출은 항상 useEffect 에서 한다. useEffect는 항상 변수 2개(함수, array)를 받는다.
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom"; // 넘겨온 파라미터를 읽는다.
import { useState } from "react";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null); // data 값을 저장하기 위한 변수를 만든다.
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kwan-hee/
    Hnm-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <div>
            <select className="select-item">
              <option selected>사이즈 선택</option>
              {product?.size.map((menu) => (
                <option>{menu} </option>
              ))}
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
