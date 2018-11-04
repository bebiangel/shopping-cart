import React, { Component } from "react";
import { Select, Button } from "antd";

const Option = Select.Option;

class ItemOption extends Component {
  //
  changeColor() {
    //
    const { item } = this.props;

    this.props.onChangeColor();
  }

  render() {
    const {
      item,
      formItems,
      onChangeSize,
      onChangeColor,
      onChangeQuantity
    } = this.props;

    const colors = [
      ...item.options
        .map(option => option.color)
        .filter((option, index, self) => {
          // console.log(index, self.indexOf(option));
          return index === self.indexOf(option);
        })
    ];

    const sizes = [
      ...item.options
        .map(option => option.size)
        .filter((option, index, self) => {
          return index === self.indexOf(option);
        })
    ];

    const renderOption = size => (
      <Option key={size} value={size}>
        {size}
      </Option>
    );

    const isSelectedColor = formItems.some(
      formItem => formItem.id === item.id && (formItem.color && item.color)
    );

    return (
      <>
        {colors.map(color => (
          <Button
            key={color}
            shape="circle"
            icon={isSelectedColor ? "check" : ""}
            style={{ backgroundColor: color, margin: "0.1rem" }}
            onClick={onChangeColor}
          />
        ))}

        <div>
          <Select
            placeholder="사이즈를 선택하세요."
            style={{ width: "10em", margin: "0.2rem" }}
            onChange={onChangeSize}
          >
            {sizes.map(renderOption)}
          </Select>
        </div>
      </>
    );
  }
}

export default ItemOption;
