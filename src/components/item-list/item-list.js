import React from 'react';
import Spinner from '../spinner/spinner';
import Item from './item/item';

class ItemList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}
	
	componentDidMount() {
		this.updateItemList();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateItemList() {
		this.props.getData()
		.then(this.onDataLoaded.bind(this))
		.catch(this.onError.bind(this));
	}

	onDataLoaded(data) {
		this.setState({data})
	}

	onError() {
		this.setState({
			loading: false,
			error: true
		})
	}

	render() {

		if(!this.state.data) {
			return <Spinner />
		}

		return (
			<div className="list-group">
				{this.state.data.map((data) => <Item key={data.id} data={data} updateCurrentId={this.props.updateCurrentId} />)}
			</div>
		)
	}
}
export default ItemList;