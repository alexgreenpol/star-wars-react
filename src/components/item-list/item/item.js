import React from 'react';
import './item.css';

const Item = (props) => {
	return (
		<a href="javascript:void(0)" className="list-group-item list-group-item-action" onClick={() => {
			props.updateCurrentId(props.data.id)
		}}>{props.data.name}</a>
	)
}
export default Item;