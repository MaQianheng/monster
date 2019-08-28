import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder,hanndleChange}) => (
	<input
	className="search"
	type="search"
	placeholder={placeholder}
	onChange={hanndleChange}
	//{e => 
	// Synchronize（同步处理）,第二个参数：前一事件执行完成后 => 回调
	//this.setState({searchField:e.target.value},() =>
		//console.log(this.state.searchField))} 
	/>
	);