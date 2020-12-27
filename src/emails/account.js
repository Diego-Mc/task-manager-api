const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'projkd1@gmail.com',
		subject: 'Thanks for joining!',
		text: `Welcome, ${name}, let me know how you get along with the app.`,
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'projkd1@gmail.com',
		subject: 'BUT WHY',
		text: `not cool, ${name}, not cool.`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
