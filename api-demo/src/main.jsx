import React from "react";
import ReactDOM from "react-dom";
const apiResult = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (isStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          ></ProductCategoryRow>
        );
      }
      rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
  }
  onFilterChange(e) {
    this.props.onFilterChange(e.target.value);
  }
  onStockChange(e) {
    this.props.onStockChange(e.target.value);
  }
  render() {
    const isStockOnly = this.props.isStockOnly;
    const filterText = this.props.filterText;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.onFilterChange}
        ></input>
        <p>
          <input
            type="checkbox"
            checked={isStockOnly}
            onChange={this.onStockChange}
          ></input>{" "}
          Only show product in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", isStockOnly: false };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
  }
  onFilterChange(filterText) {
    this.setState({ filterText });
  }
  onStockChange(isStockOnly) {
    this.setState({ isStockOnly });
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterChange={this.onFilterChange}
          onStockChange={this.onStockChange}
        ></SearchBar>
        <ProductTable
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          products={this.props.products}
        ></ProductTable>
      </div>
    );
  }
}
ReactDOM.render(
  <FilterableProductTable products={apiResult}></FilterableProductTable>,
  document.getElementById("root")
);
