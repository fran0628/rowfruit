import { useState } from "react";

import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
export default function IndexAbout() {
  const urlid = String();
  const urlanoutbtn = "/About/" + urlid;
  return (
    <>
    <div className="container">
    <div className="container-fluid section">
          <h1 >了解我們</h1>
          <div class="at-item1"></div>
<CardGroup> 
  <Card>
    <Card.Img variant="top" src="/About/farmer.png" width="320" height="160" />
    <Card.Body>
      <Card.Title>關於我們</Card.Title>
      <Card.Text>
      品牌故事
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div className="d-none d-sm-flex justify-content-center  my-4">
    <a href={urlanoutbtn}>
          <button type="submit" className="btn normal-btn">
            點此進入
          </button></a></div>
    </Card.Footer>
  </Card>
 
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>聯絡我們</Card.Title>
      <Card.Text>
      客服服務
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div className="d-none d-sm-flex justify-content-center  my-4">
          <button type="submit" className="btn normal-btn">
            點此進入
          </button></div>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
</div></>
		);
}

