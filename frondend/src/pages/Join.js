import React from 'react';
import styled from 'styled-components';

// components
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'
import PageBanner from '../components/PageBanner';
import joinService from '../_services/join.service';

// assets
import bannerImage from '../assets/team_seier.jpeg';
import { Title } from '../components/blog.style';

const Section = styled.div`
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #F6F8FC;
	padding: 20px 0 50px 0;
	z-index: 0;
`;

const PositionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;

const IntroCard = styled.div`
	vertical-align: top;
	padding: 40px;
	margin-top: 5px;
	position: relative;
	display: inline-block;
	overflow: hidden;
	width: 45%;
	min-width: 350px;
	background-color: white;
	font-size: 16px;
`;

const Deadline = styled.div`
	vertical-align: top;
	padding: 30px;
	position: relative;
	margin-top: -20px;
	margin-bottom: 15px;
	display: inline-block;
	overflow: hidden;
	width: 45%;
	min-width: 350px;
	background-color: white;
	font-size: 21px;
	font-weight: bold;
	text-align: center;
`;

function PositionCard({ position, description, linebreaker = "" }) {
	const Card_1 = styled.div`
		position: relative;
		display: inline-block;
		background-color: white;
		vertical-align: top;
		border-radius: 3px;
		padding: 30px;
		margin: 15px;
		overflow: hidden;
		width: 350px;
		max-width: 90vw;
		height: 660px;
		text-align: justify;
	`;

	const Card_2 = styled.div`
		position: relative;
		display: inline-block;
		background-color: white;
		vertical-align: top;
		border-radius: 3px;
		padding: 30px;
		margin: 15px;
		overflow: hidden;
		width: 350px;
		max-width: 90vw;
		height: 370px;
		text-align: justify;
	`;

	// Creating two card-tempelates: one for the first four card with the height 660px and one for the rest
	// ,each with a equal but lower height.


	const Title = styled.div`
		font-weight: bold;
		font-size: 18px;
		color: black;
	`;

	const Description = styled.div`
		padding: 10px 0;
		font-size: 14px;
		color: rgba(0,0,0,0.6);
	`;

	if ((position === "Marketing" || position === "Autonomous" || position === "Electrical" || position === "Mechanical")) {
		return (
		<Card_1>
			<Title>{position}</Title>
			<Description dangerouslySetInnerHTML={{ __html: description }} />
			<Description dangerouslySetInnerHTML={{ __html: linebreaker }} />
		</Card_1>
		)
	} else {
		return (
		<Card_2>
			<Title>{position}</Title>
			<Description dangerouslySetInnerHTML={{ __html: description }} />
			<Description dangerouslySetInnerHTML={{ __html: linebreaker }} />
		</Card_2>
		) 
	}
	
	
	
	
}

function JoinForm() {
	const style = {
		form: {
			backgroundColor: 'white',
			padding: '20px',
			maxWidth: '600px',
			width: '100%',
		},
		text: {
			disclaimer: {
				margin: '20px',
				color: 'rgba(0,0,0,0.6)',
				textAlign: 'center',
			}
		},
		input: {
			text: {
				display: 'block',
				padding: '20px',
				marginBottom: '20px',
				backgroundColor: '#F6F8FC',
				borderRadius: '3px',
				border: 'none',
				width: '100%',
				fontSize: '18px',
				// precent textarea resize
				resize: 'none',
			},
			checkbox: {
				marginRight: '10px',
				backgroundColor: '#F6F8FC',
				width: '20px',
				height: '20px',
			},
			label: {
				paddingLeft: '10px',
				margin: '5px 0',
				fontSize: '18px',
				color: 'rgba(0,0,0,1)',
				display: 'flex',
				alignItems: 'center',
			},
			check: {
				paddingLeft: '10px',
				margin: '5px 0',
				fontSize: '18px',
				color: 'rgba(0,0,0,0.8)',
				display: 'flex',
				alignItems: 'center',
			},
			submit: {
				borderRadius: '3px',
				padding: '6px 9px',
				backgroundColor: '#011A2C',
				boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05),inset 0 1px 0 0 rgba(255,255,255,.2),inset 0 -1px 0 0 rgba(255,255,255,.1),0 1px 3px rgba(0,0,0,.05),0 1px 2px rgba(0,0,0,.1)',
				color: 'white',
				cursor: 'pointer',
				float: 'right',
				fontSize: '16px',
				border: 'none',
			}
		}
	}

	const form = {
		firstname: '',
		lastname: '',
		email: '',
		description: '',
		//Change phonenumber to int
		phonenumber: '',
		selectedPositions: [],
	};

	const positions = ["Marketing", "Mechanical", "Autonomous", "Electrical", "Design", "Software","Finance"];
	
	
	const handleCheckbox = (event, position) => {
		if (event.target.value && form.selectedPositions.indexOf(position) === -1) {
			form.selectedPositions.push(position);
		} else {
			form.selectedPositions.splice(form.selectedPositions.indexOf(position), 1);
		}
	}

	const handleInput = (event, key) => {
		form[key] = event.target.value;
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const evaluation = joinService.evaluateForm(form);

		if (evaluation.length === 0) {
			joinService.sendForm(form)
				.then((result) => {
					if (result) {
						alert('Your application is sent. Please check your email for a confirmation');
					} else {
						alert('There was an error while sending your application. Please send your application to post@fuelfighter.no and inform about your issue');
					}
				}).catch(exception => {
					alert('There was an error while sending your application. Please send your application to post@fuelfighter.no and inform about your issue');
				});
		} else {
			evaluation.forEach(error => {
				alert(error);
			});
		}
	}

	return (
		<form onSubmit={handleSubmit} style={style.form} >
			<div style={style.text.disclaimer} >
				You will recieve a confirmation email when you submit your application. If you don`t, please send your application to post@fuelfighter.no and inform about your issue.
			</div>
			<span style={style.input.label}>First name</span>
			<input
				type="text"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'firstname')}
				// placeholder="firstname"
				required
			/>
			<span style={style.input.label}>Last name</span>
			<input
				type="text"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'lastname')}
				// placeholder="firstname"
				required
			/>
			<span style={style.input.label}>Email</span>
			<input
				type="email"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'email')}
				// placeholder="email"
				required
			/>
			<span style={style.input.label}>Phone number</span>
			<input
				type="phonenumber"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'phonenumber')}
				// placeholder="email"
				required
			/>
			<span style={style.input.label}>About you and why you want to apply</span>
			<textarea
				rows={5}
				style={style.input.text}
				onChange={(event) => handleInput(event, 'description')}
				required
			/>
			<span style={style.input.label}>Select your desired position</span>
			{
				positions.map((position) =>
					<label
						style={style.input.check}
						key={position}
					>
						<input
							type="checkbox"
							style={style.input.checkbox}
							onChange={(e) => handleCheckbox(e, position)}
							name={position}
						/>
						{position}
					</label>
				)
			}
			<input
				type="submit"
				value="Submit application"
				style={style.input.submit}
			/>
		</form>
	);
}

export default function Join() {
	return (
		<>
			<Header floating />
			<PageBanner title="Join Us" image={bannerImage} />
			<Section>
				<IntroCard>
					As a cross-disciplinary project we need students from every field of study. We are usually a team of 45 students, and always make sure some of them are exchange students. We like to have a good mixture of people from every year of study, to get good group dynamic and a good work culture to make people want to continue over several years. {/*By being a part of our team you get 7.5 credits you can use in you study plan.*/}
				</IntroCard>
				<Deadline>The recruitment period is closed, but you can send us an open application</Deadline>
				
				

				{/*<Title>Apply</Title>*/}
				<JoinForm /> 

				{/* <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4CWazjpxWbrPAmqx5"><Button>Application form</Button></a> */}

				
		
				<PositionsContainer>
					
					

					<PositionCard
						position="Marketing"
						description= "As a As Marketing group leader you will lead the marketing group. You will get an insight into photos and videos, 3D animation, graphical design and creating content for Social Media. You will be in close contact with the other groups to make exciting marketing content. The marketing group is also responsible for planning and conducting both our internal social events and external events like the reveal of our car. In addition to this the marketing group also works with the finance group get new sponsors, promote our sponsors and give them content. This is a position where you can come up with creative ideas and really think outside the box. A marketing leader should have good communication skills and be organized. It is required with any former experience about marketing."
					/>
					<PositionCard
						position= "Autonomous"
						description= "As a member in the feature team Autonomous you will gain insights in how to make a car self-driving. You will work with high tech equipment such as 3D Lidar, stereo camera, localization gear, components for steering and braking the car and much more! It's also a good experience where you can develop you coding skills, by forming algorithms to solve a task. You will not only take part in one small part of the system, but you will work together with the rest of the team trying to achieve common goals, and to get to this point all members need to contribute in all of the systems shaping process. The system is young, which allows each member to have a lot of influence on the design. give the autonomous car a kind of vision for greater distances, a LiDAR (Light Detection and Ranging) is used. The main task for the team is to use the data published by the LiDAR and process it in a way so that the autonomous control-team can use it for steering, braking and acceleration of the car. SLAM is short for Simultaneous Localization and Mapping and is responsible for mapping an unknown environment, whilst keeping track of its position inside the map."
					/>

					<PositionCard
						position="Electrical"
						description= "The electrical group is in charge of making the electrical systems of the car. Building a car to run with extreme efficiency requires the electrical group to optimize the electrical systems on every level, making all systems low power with innovative solutions. As a member of the group you will be able to plan out your system, design circuit boards in KiCad, solder your boards, and code the microcontrollers responsible for driving your system. You will build upon what has been created before as well as coming up with totally new ideas."
					/>
					

					<PositionCard
						position="Mechanical"
						description= "The Mechanical group is responsible for designing, producing and testing the mechanical systems of the car. This includes the cars chassis, suspension, steering system, brakes, doors and more. To do this you will learn about composite optimalization, CAD (computer aided design), 3D-printing, machining, aerodynamics and more. The mechanical group also works closely with the design and electrical group to make sure the different systems works well together."/>	
					
					<PositionCard
						position="Design"
						description="The design team is in charge of translating the ideas and concepts gathered in cooperation with the rest of the teams, into tangible objects, or systems that would be used in the vehicle.
						As a member of the design team, you will be working on the development of the exterior and interior of the vehicle, from the steering wheel to the frame and the chassis. Aspects such as aerodynamics, strength, ergonomics and aesthetics, are modelled, prototyped and tested digitally and physically to overcome all the challenges along the way and develop the best vehicle possible. 
						"
					/>

					<PositionCard
						position="Software"
						description= "As a member of the software team , you are responsible for software developed for use both on- and off-track. This includes a simulator for training the driver, driving strategy for figuring out how we should drive to minimize energy consumption, developing the Fuel Fighter website and creating a data visualisation of the data retrieved from the cars many sensors. The software group is one of the newest groups in fuel fighter, allows to have a lot of influence on the direction of the development of the group."/>
		
					<PositionCard
						position="Finance"
						description= "As a member of the finance group, you are responsible for the team’s economy. This includes keeping track of the team’s expenses, planning the budget, and gathering sponsors. You will get to work closely with the marketing team to ensure that good relationships with the sponsors are uphold."
					/>

						

				</PositionsContainer>
			
				

				
			</Section>
			<Footer />
		</>
	)
}
