import { useState } from "react";
import './indexabout.scss'
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
<Card className="border-0">
    <div className="kr-contain mx-auto"><Card.Img variant="top" src="/About/indexabout.jpg" className="object-fit"/></div>
    
    <Card.Body>
      <Card.Text>
      我們網站的服務<br/>主要是販售搭配好的主題水果盒 可以提供單買或是訂閱制 <br/>訂閱制服務主要是定時每個星期配送水果盒到客人家中，讓客人每個禮拜不愁為了買水果<br/>還要出門<br/>那除了上述的服務外 我們也提供客制化水果盒<br/>這個服務主要可以讓客人指定購買喜歡的水果搭配
      </Card.Text>
      <div className="d-none d-sm-flex justify-content-center  my-4">
    <a href={urlanoutbtn}>
          <button type="submit" className="btn normal-btn">
            了解更多
          </button></a></div>
    </Card.Body>
  </Card>
</div>
</div></>
		);
}

