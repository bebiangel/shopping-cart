import React, { Component } from "react";
// import "./Items.css";
import { List, Card, Button, Select } from "antd";
import ItemOption from "./ItemOption";
import { randomImage } from "../common/randomImage";

const Option = Select.Option;

class Itmes extends Component {
  //
  onAddToCart = e => {};

  renderOption = option => (
    <Option key={option.id} value={option.size}>
      {option.size}
    </Option>
  );

  render() {
    //
    const {
      items,
      formItems,
      onAddToCart,
      onChangeSize,
      onChangeColor,
      onChangeQuantity
    } = this.props;

    return (
      <>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Card
                title={item.name}
                hoverable
                cover={
                  <img alt="example" height={"350px"} src={randomImage()} />
                }
              >
                <p>{item.provider}</p>
                <p>{item.price} 원</p>

                <ItemOption
                  item={item}
                  formItems={formItems}
                  onChangeSize={onChangeSize}
                  onChangeColor={onChangeColor}
                  onChangeQuantity={onChangeQuantity}
                />

                <div className="AddToCartButtonWrapper">
                  <Button type="primary" value={item.id} onClick={onAddToCart}>
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default Itmes;
