/**
 * TableRow
 */

import React, { Component, ReactNode } from "react";

import "./index.scss";
import { Option } from "../..";

interface IProps {
  options: Option[];
  selected: string;
  title: string;
  onChange: (option: Option) => void;
}

class TableRow extends Component<IProps> {
  getCell = (cell: Option, key: number): ReactNode => {
    const { selected } = this.props;
    const onChange = () => this.props.onChange(cell);

    let className = "cell";

    if (cell.disabled) {
      className += " disabled";
    }

    if (cell.title === selected) {
      className += " selected";
    }

    return (
      <div key={key} className={className} onClick={onChange}>
        <span>{cell.title}</span>
      </div>
    );
  };

  get cells() {
    const { options } = this.props;
    return options.map(this.getCell);
  }

  public render() {
    const { title } = this.props;

    return (
      <div className="TableRow">
        <div className="cell disabled">
          <span>{title}</span>
        </div>
        {this.cells}
      </div>
    );
  }
}

export default TableRow;
