import React from "react";
import { Select, Button } from "antd";

const Option = Select.Option;

const ItemOption = props => {
  //
  const { item } = props;

  const colors = [
    ...item.options
      .map(option => option.color)
      .filter((option, index, self) => {
        // console.log(index, self.indexOf(option));
        return index === self.indexOf(option);
      })
  ];

  const sizes = [
    ...item.options.map(option => option.size).filter((option, index, self) => {
      return index === self.indexOf(option);
    })
  ];

  const renderOption = option => {
    return (
      <Option key={option.id} value={option.size}>
        {option.size}
      </Option>
    );
  };

  return (
    <>
      {colors.map(color => (
        <Button
          key={color}
          shape="circle"
          style={{ backgroundColor: color, margin: "0.1rem" }}
        />
      ))}

      <div>
        <Select
          placeholder="사이즈를 선택하세요."
          style={{ width: "10em", margin: "0.2rem" }}
        >
          {item.options.map(renderOption)}
        </Select>
      </div>
    </>
  );
};

export default ItemOption;
