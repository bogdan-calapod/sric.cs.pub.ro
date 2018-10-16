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
  onChange: (selected: string) => void;
}

class TableRow extends Component<IProps> {
  onChange = (cell: Option) => {
    if (!cell.disabled) {
      this.props.onChange(cell.title);
    }
  };

  getCell = (cell: Option, key: number): ReactNode => {
    const { selected } = this.props;

    let className = "cell";

    if (cell.disabled) {
      className += " disabled";
    }

    if (cell.title === selected) {
      className += " selected";
    }

    return (
      <div key={key} className={className} onClick={() => this.onChange(cell)}>
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
