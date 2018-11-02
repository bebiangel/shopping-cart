import React, { Component } from "react";
import { Card, Button } from "antd";

class Item extends Component {
  render() {
    return (
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Button type="primary" />
      </Card>
      // <li>
      //   <div>image</div>
      //   <div>Python Hood T-Shirts</div>
      //   <div>StyleShare</div>
      //   <div>size</div>
      //   <div>colors</div>
      // </li>
    );
  }
}

export default Item;
