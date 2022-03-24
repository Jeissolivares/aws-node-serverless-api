const db = require("../libs/db");
const  logger  = require('../utils/index');

async function getUserTest(event) {
	try {
		const data = await db.query(`SELECT *
        FROM public."userTest";`);
		logger.info("Users ok");
		return {
			status: 200,
			data: data.rows,
		};
	} catch (error) {
		logger.error(error);
	}
}

async function createUserTest(event) {
	const { userId, testId, startDate, endDate, startTime, endTime } = JSON.parse(
		event.body
	);
	const data = await db.query(`INSERT INTO public."userTest"(
                "userId", "testId", "startDate", "endDate", "startTimeN", "endTimeN")
                VALUES (${userId}, ${testId}, '${startDate}', '${endDate}', '${startTime}', '${endTime}')`);

	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Go Serverless v3.0! Your function executed successfully!",
				data: data.rows,
			},
			null,
			2
		),
	};
}

module.exports = {
	createUserTest,
	getUserTest,
};