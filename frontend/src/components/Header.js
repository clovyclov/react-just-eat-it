import React from 'react';
import logo from '../img/logo.png';
import profile from '../img/profile.png';

const Header = () => {
	return (
		<div className="header">
			<div className="container p-4">
				<div className="row">
					<div className="col-md-6">
						<img src={logo} alt="Logo" />
					</div>
					<div className="col-md-6">
						<div className="profile">
							<img src={profile} alt="Profile Picture" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
