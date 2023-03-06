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
	width: 45vw;
	min-width: 350px;
	background-color: white;
	font-size: 21px;
	font-weight: bold;
	text-align: center;
`;

function PositionCard({ position, description, linebreaker = "" }) {
	const Card = styled.div`
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
		text-align: justify;
	`;

	const Title = styled.div`
		font-weight: bold;
		font-size: 18px;
		color: black;
		text-align: center;
	`;

	const Description = styled.div`
		padding: 10px 0;
		font-size: 14px;
		color: rgba(0,0,0,0.6);
	`;

	return (
		<Card>
			<Title>{position}</Title>
			<Description dangerouslySetInnerHTML={{ __html: description }} />
			<Description dangerouslySetInnerHTML={{ __html: linebreaker }} />
		</Card>
	)
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
		<>
			{/* <Deadline>Please send your application to <a href='post@fuelfighter.no'>post@fuelfighter.no</a>.</Deadline> */}
			{/* <Deadline>Remember to include: email, name and positions you are for.</Deadline> */}
		</>
		// <form onSubmit={handleSubmit} style={style.form} >
		// 	<div style={style.text.disclaimer} >
		// 		You will recieve a confirmation email when you submit your application. If you don`t, please send your application to post@fuelfighter.no and inform about your issue.
		// 	</div>
		// 	<span style={style.input.label}>First name</span>
		// 	<input
		// 		type="text"
		// 		style={style.input.text}
		// 		onChange={(event) => handleInput(event, 'firstname')}
		// 		// placeholder="firstname"
		// 		required
		// 	/>
		// 	<span style={style.input.label}>Last name</span>
		// 	<input
		// 		type="text"
		// 		style={style.input.text}
		// 		onChange={(event) => handleInput(event, 'lastname')}
		// 		// placeholder="firstname"
		// 		required
		// 	/>
		// 	<span style={style.input.label}>Email</span>
		// 	<input
		// 		type="email"
		// 		style={style.input.text}
		// 		onChange={(event) => handleInput(event, 'email')}
		// 		// placeholder="email"
		// 		required
		// 	/>
		// 	<span style={style.input.label}>Phone number</span>
		// 	<input
		// 		type="phonenumber"
		// 		style={style.input.text}
		// 		onChange={(event) => handleInput(event, 'phonenumber')}
		// 		// placeholder="email"
		// 		required
		// 	/>
		// 	<span style={style.input.label}>About you and why you want to apply</span>
		// 	<textarea
		// 		rows={5}
		// 		style={style.input.text}
		// 		onChange={(event) => handleInput(event, 'description')}
		// 		required
		// 	/>
		// 	<span style={style.input.label}>Select your desired position</span>
		// 	{
		// 		positions.map((position) =>
		// 			<label
		// 				style={style.input.check}
		// 				key={position}
		// 			>
		// 				<input
		// 					type="checkbox"
		// 					style={style.input.checkbox}
		// 					onChange={(e) => handleCheckbox(e, position)}
		// 					name={position}
		// 				/>
		// 				{position}
		// 			</label>
		// 		)
		// 	}
		// 	<input
		// 		type="submit"
		// 		value="Submit application"
		// 		style={style.input.submit}
		// 	/>
		// </form>
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
				<Deadline>We are recruiting for new leader positions. Deadline: 19 March</Deadline>
				<a href='https://forms.office.com/e/JELKE2y10G'><Deadline><button className="suggested-action small-button">APPLY HERE</button></Deadline></a>
				
				

				{/*<Title>Apply</Title>*/}
				<JoinForm /> 

				{/* <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4CWazjpxWbrPAmqx5"><Button>Application form</Button></a> */}



				<PositionsContainer>
					


					{/* <PositionCard
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
					/> */}

					<PositionCard
						position="Project Manager"
						description= "As project manager you are the main responsible for DNV Fuel Fighter’s overall progress, and you will have the overall responsibility for ensuring the success for all phases of the team’s work, from initiation to closure. This means that you will be involved in every part of the organisation, and will have to work with both technical problems, marketing and general administration. As PM you are also our public face, and will have to talk to sponsors, organizers of the SEM-event, NTNU and many others. This position gives what we consider a rather unique experience in working with and managing a fairly large team and engineering project. We do not demand any previous experience in leadership, and encourage everyone interested to apply, but as the PM of a technical student organisation you should have some interest in both technical and administrative tasks. But most importantly we are looking for you who are organised, dedicated and keen to work hard to take both the car and team to the next level!"
					/>
					<PositionCard
						position="Assistant Project Manager"
						description="The assistant project manager(APM) works closely with the project manager(PM) to ensure that the administrative side of the project runs smoothly. The PM will have a lot to do, and you will help her/him with tasks that are ultimately their responsibility. Therefore, it is important to communicate well and work together. You will also work with the head of finance when dealing with budgeting, financing and matters of economy. In team 2022 the Assistant Project Manager will be HR responsible, meaning you will make sure the members are happy and handle possible HR situations that may arise. Some of the tasks you will have is arranging recruitment, plan employee interviews, have contact with sponsors etc. Since you will be working with the PM and share a lot of the tasks, you could be a part of deciding who is doing which tasks."
					/>
					<PositionCard
						position="Head of Finance"
						description="As head of Finance, you are responsible for the budget and our sponsors. You will be in contact with employees at NTNU as well as contact people from sponsors. The work consists of purchasing orders for the team, handling sponsor deals and making sure the project is keeping within its budget. One of the tasks is also working closely with the assistant project manager in trying to get new sponsorship deals, and renewing existing ones."
					/>
					<PositionCard
						position="Technical Leader"
						description="The technical leader’s most important task is to make sure that the car is ready in time for the competition. This means helping the team do their work and overcoming obstacles and making sure that the system is within the rules. You need to have a good general knowledge of each subsystem, but not necessarily every single detail. It also helps to have both experience within mechanics, electronics and software, but it is not necessary. You also have other tasks, such as reaching out to potential sponsors"
					/>
					<PositionCard
						position="Assistant Technical Leader"
						description="The Assistant Technical Leader is responsible to support the Technical Leader in making the car ready for the competition. They must at all times be up to date on how the groups are doing and facilitate, along with the Technical Leader, good cooperation. The Assistent Technical Leader should have general knowledge about each of the subsystems, but not necessarily every single detail. If the Technical Leader is unavailable, the Assistant Technical Leader must be able to fill in. The position offers a unique experience in leadership and cooperation along with varied tasks and many opportunities."
					/>
					<PositionCard
						position="Electrical Group Leader"
						description="As leader of the electrical team, you are responsible for making sure the electrical system is ready for the competition.  You will get insight in all the electronics needed to make an electric car, this includes everything from motors to the dashboard. Improving on last years design is important to improve the efficiency of the electrical system. This includes everything from hardware design to writing software. You will also be responsible for ordering everything the team needs for electrical system. It is a great experience as you can influence the whole electrical system, and you get to help the team members when they encounter problems with their subsystems. It can be challenging at times, but it is also a lot of fun."
					/>
					<PositionCard
						position="Design Group Leader"
						description="The Design Leader manages the overall process of designing both the interior and exterior design of the vehicle; he/she is responsible of ensuring that the car is designed according to the specifications of the SEM 2022 rules and the design goes together with the technical design of the Mechanical and Electrical group."
					/>
					<PositionCard
						position="Marketing Group Leader"
						description="As Marketing group leader you will be responsible for making Fuel Fighter visible. There is a lot of different tasks in a marketing team, like SoMe, Event planning, graphical design and photo & video, and you will be the one with an overview of what everyone is doing and help out if needed. This gives you a unique opportunity to be a part of all of these roles and learn a lot. You are also the connection between the board and every marketing role, so you need to communicate well with both and learn how to find answers to questions the group might have. This is a job where you can come up with creative ideas and really think outside the box."
					/>
					<PositionCard
						position="Software Group Leader"
						description="The Software group leader is responsible for the Software group. The software group is responsible for the fuelfighter.no website, as well as the simulator. The Software Group Leader makes sure that the Software group is collaborating and reaching their goals by facilitating work sessions. They are also responsible to communicate relevant information about the competition/other groups to the Software group. The Software Group leader should be familiar with different it architectures and able to aid the members in their tasks. As Software Group Leader you will get experience in managing a small group, as well as communication in a complex organisation. You will have the freedom to explore different."
					/>
					<PositionCard
						position="Autonomous Group Leader"
						description="The Software group leader is responsible for the Autonomous group, and a special responsibility to ensure that the Autonomous system is ready for the competition. Fuel Fighter NTNU competes both in energy efficiency and in an Autonomous challenge, this entails an extra responsibility to stay up to date on competition rules and regulations. They are also responsible to communicate relevant information about the competition/other groups to the Autonomous. The Autonomous Group Leader should be familiar with concepts such as machine learning and automation. The Group leader is also responsible in aiding members if needed. As Autonomous Group Leader you will get experience in managing a small group, as well as communication in a complex organisation. You will have the freedom to explore different directions for the Autonomous system."
					/>
					<PositionCard
						position="Mechanical Group Leader"
						description="The Mechanical Group Leader has the responsibility to ensure that all mechanical systems function according to specifications. The group leader is the main point of contact with the electrical and autonomous group. The group leader represents the mechanical group in board meetings, and is expected to be conscious about any issues related to the mechanical group and report these to the board. The group leader is expected to be available for any mechanical group members to turn to when they are facing an issue."
					/>
				</PositionsContainer>
			</Section>
			<Footer />
		</>
	)
}
