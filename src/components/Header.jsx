import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
	return (
		<div
			style={{
				border: '1px solid #007bff',
			}}
		>
			<p>List Based</p>
			<Nav>
				<NavItem>
					<NavLink href='#'>Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='#'>Another Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink disabled href='#'>
						Disabled Link
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};

export default Header;
