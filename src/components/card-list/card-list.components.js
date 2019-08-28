import React from 'react';
import {Card} from '../card/card.components.js'
import './card-list.styles.css'
// 每个组件有个prop，prop可以通过'prop.'的方式拿到自定义组件标签里的任一属性
export const CardList = props => (
	<div className='card-list'>
	{
	// props.monsters = [{0},{1},{2},{3},{4},{5},{6},{7},{8},{9}]
		props.monsters.map(monster => (
		// 用map循环遍历props.monster并把值传给每一个Card组件
			<Card monster={monster} key={monster.id} />
			))
	}
	</div>
	);