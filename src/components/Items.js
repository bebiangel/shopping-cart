import React, { Component } from "react";
// import "./Items.css";
import Item from "./Item";
import { List, Card, Button, Select } from "antd";
import ItemOption from "./ItemOption";
import { randomImage } from "../common/randomImage";

const goods = [
  {
    id: 1,
    name: "Python Hood T-Shirts",
    provider: "StyleShare",
    price: 20000,
    options: [
      {
        id: 1001,
        color: "yellow",
        size: "S",
        stock: 10
      },
      {
        id: 1002,
        color: "yellow",
        size: "M",
        stock: 10
      },
      {
        id: 1003,
        color: "yellow",
        size: "L",
        stock: 10
      },
      {
        id: 1004,
        color: "blue",
        size: "S",
        stock: 10
      },
      {
        id: 1005,
        color: "blue",
        size: "M",
        stock: 10
      },
      {
        id: 1006,
        color: "blue",
        size: "L",
        stock: 10
      }
    ],
    shipping: {
      method: "FREE",
      price: 0,
      canBundle: true
    }
  },
  {
    id: 2,
    name: "JAVA Round T-Shirts",
    provider: "StyleShare",
    price: 15000,
    options: [
      {
        id: 2001,
        color: "green",
        size: "S",
        stock: 10
      },
      {
        id: 2002,
        color: "green",
        size: "M",
        stock: 10
      },
      {
        id: 2003,
        color: "green",
        size: "L",
        stock: 10
      }
    ],
    shipping: {
      method: "PREPAY",
      price: 3000,
      canBundle: true
    }
  },
  {
    id: 3,
    name: "PHP V Neck T-Shirts",
    provider: "StyleShare",
    price: 15000,
    options: [
      {
        id: 3001,
        color: "violet",
        size: "S",
        stock: 10
      },
      {
        id: 3002,
        color: "violet",
        size: "M",
        stock: 10
      },
      {
        id: 3003,
        color: "violet",
        size: "L",
        stock: 10
      }
    ],
    shipping: {
      method: "PREPAY",
      price: 5000,
      canBundle: false
    }
  },
  {
    id: 4,
    name: "Flask Jacket",
    provider: "StyleShare",
    price: 3000,
    options: [
      {
        id: 4001,
        color: "black",
        size: "S",
        stock: 10
      },
      {
        id: 4002,
        color: "black",
        size: "M",
        stock: 10
      },
      {
        id: 4003,
        color: "black",
        size: "L",
        stock: 10
      }
    ],
    shipping: {
      method: "FREE",
      price: 0,
      canBundle: true
    }
  },
  {
    id: 5,
    name: "Spring Boot Jacket",
    provider: "StyleShare",
    price: 20000,
    options: [
      {
        id: 5001,
        color: "yellowgreen",
        size: "S",
        stock: 10
      },
      {
        id: 5002,
        color: "yellowgreen",
        size: "M",
        stock: 10
      },
      {
        id: 5003,
        color: "yellowgreen",
        size: "L",
        stock: 10
      },
      {
        id: 5004,
        color: "yellowgreen",
        size: "XL",
        stock: 10
      }
    ],
    shipping: {
      method: "FREE",
      price: 0,
      canBundle: true
    }
  },
  {
    id: 6,
    name: "Codeigniter Jacket",
    provider: "StyleShare",
    price: 5000,
    options: [
      {
        id: 6001,
        color: "red",
        size: "S",
        stock: 100
      },
      {
        id: 6002,
        color: "red",
        size: "M",
        stock: 120
      }
    ],
    shipping: {
      method: "PREPAY",
      price: 5000,
      canBundle: false
    }
  },
  {
    id: 7,
    name: "Django Jacket",
    provider: "29cm",
    price: 15000,
    options: [
      {
        id: 7001,
        color: "green",
        size: "M",
        stock: 0
      },
      {
        id: 7002,
        color: "green",
        size: "L",
        stock: 30
      }
    ],
    shipping: {
      method: "PREPAY",
      price: 2500,
      canBundle: true
    }
  }
];

const Option = Select.Option;
class Itmes extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddToCart = e => {};

  renderOption = option => {
    return (
      <Option key={option.id} value={option.size}>
        {option.size}
      </Option>
    );
  };

  render() {
    //

    return (
      <div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={goods}
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

                {/*
               <div>
                  {item.options.map(option => {
                    console.log(option);
                  })}
                </div>

                <Select style={{ width: "10em" }}>
                  {item.options.map(this.renderOption)}
                </Select>
                */}
                <ItemOption item={item} />
                <div
                  style={{
                    align: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    type="primary"
                    value={item.id}
                    onClick={this.onAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Itmes;
