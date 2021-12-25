import React from 'react';
import profile from '../assets/img/profile.jpeg';

export const About = () => {
	return (
		<div className="profile-container animate__animated animate__fadeIn">
			<div className="profile-card">
				<div className="card__icons">
					<i className="fas fa-long-arrow-alt-left"></i>
					<i className="far fa-heart"></i>
					<i className="fas fa-ellipsis-v"></i>
				</div>

				<div className="card__content">
					<img
						src={profile}
						alt="My profile"
						className="card__img"></img>

					<h3 className="card__name">Juan Diego Carranza Vega</h3>
					<p className="card__title">Full Stack Developer</p>
					<p className="card__description">
						I love programming and learning new things. Favorite
						hobbies are playing video games and listening to music.
					</p>
					<p className="card__email">
						Write to my e-mail: jcarranzav98@gmail.com
					</p>

					<p className="card__list">Make it Real experience:</p>
					<ul className="card__items">
						<li>React</li>
						<li>Redux</li>
						<li>Express</li>
					</ul>
				</div>

				<div className="card__social-icons">
					<div className="social-icons">
						<a href="https://github.com/jcarranzav1">
							<i className="fab fa-github"></i>
						</a>
					</div>

					<div className="social-icons">
						<a href="https://www.linkedin.com/in/jcarranzav">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>

					<div className="social-icons">
						<a href="https://twitter.com/jcarranzav98">
							<i className="fab fa-twitter"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
