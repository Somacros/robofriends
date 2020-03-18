import React from 'react';
import Card from './Card';

const CardList = ({ Robots}) => {
	return	(
		<div>
		{
			Robots.map((user, Index) => 
			{	
				return(
					<Card
					 key = {Index} 
					 id={Robots[Index].id} 
					 name={Robots[Index].name} 
					 email={Robots[Index].email}
					 /> 
				);
			})
		}
		</div>
	)
}

export default CardList;