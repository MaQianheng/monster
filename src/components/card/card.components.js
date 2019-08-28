import React from 'react';
import './card.styles.css';

export const Card = props => (
	// props可以拿到从Card自定义组件中定义的属性的值
	<div className="card-container">
		{
		//https://robohash.org/${props.monster.id}?set=set2&size=180x180
		}
		<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
		<h2>{props.monster.name}</h2>
		<h3>{props.monster.email}</h3>
	</div>
	);