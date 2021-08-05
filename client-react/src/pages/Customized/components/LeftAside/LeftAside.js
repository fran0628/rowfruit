import React from "react";
import { Link } from "react-scroll";
function LeftAside(props) {
  const { totalWight } = props;
  const imageScale = 1+totalWight/10
 

  return (
    <>
      <aside className="col-md-2 d-none d-lg-block position-relative">
        <ul className="tagGroup ms-4">
          <li className="btn d-block text-center tag-all">
          <Link
              href="#all"
              to="all"
              containerId="customizedProduct"
              activeClass=""
              className="text-dark"
              spy={true}
              smooth={true}
              offset={-130}
              duration={700}
            >
              全部商品
            </Link>
          </li>
          <li>
            <Link
              href="#whitening"
              to="whitening"
              containerId="customizedProduct"
              activeClass="active"
              className="btn d-block text-center tag-whitening"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              美白商品
            </Link>
          </li>
          <li>
            <Link
              href="#slimming"
              to="slimming"
              containerId="customizedProduct"
              activeClass="active"
              className="btn d-block text-center tag-slimming"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              瘦身商品
            </Link>
          </li>
          <li>
            <Link
              href="#silverHair"
              to="silverHair"
              containerId="customizedProduct"
              activeClass="active"
              className="btn d-block text-center tag-silverHair"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              銀髮族
            </Link>
          </li>
          <li>
            <Link
              href="#vision"
              to="vision"
              containerId="customizedProduct"
              activeClass="active"
              className="btn d-block text-center tag-vision"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              顧眼睛
            </Link>
          </li>
        </ul>
      
          <img style={{transform:`rotate(5deg) scale(${imageScale})`}} className="rowFruitImage" src="http://localhost:3000/images/null.png" alt=""/>
       
      </aside>
    </>
  );
}
export default LeftAside;
