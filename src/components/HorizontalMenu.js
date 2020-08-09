import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';
import DoughNut from './DoughNut';
import Pies from './Pies';

const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

export const Menu = (list) => list.map(el => {
  const { name, key } = el;

  return (
    <MenuItem
      text={name}
      key={key}
    />
  );
});

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class HorizontalMenu extends Component {
  state = {
    selected: 0
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }
 
  render() {
    const { selected } = this.state;
    const { data } =this.props
    const list = [
      { name: <DoughNut data={data}/> ,key:1},
      { name: <Pies data={data}/>,key:2 }
    ];
    const menu = Menu(list, selected);

    return (
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
    );
  }
}

export default HorizontalMenu