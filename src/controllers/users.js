const db = require("../libs/db");

async function getUsers() {
	const data = await db.query(
		'SELECT * FROM public."Users" WHERE "statusId" = 1'
	);
	try {
		return {
			status: 200,
			data: data.rows,
		};
	} catch (error) {
		console.log(error);
	}
}

async function getUser(event) {
	const userId = event.pathParameters.id;
	const data = await db.query(
		`Select * from public."Users" where id = ${userId} AND "statusId" = 1`
	);
	try {
		if (data) {
			return {
				status: 200,
				data: data.rows,
				message: "User found",
			};
		} else {
			return {
				status: 404,
				message: "User not available",
			};
		}
	} catch (error) {
		console.log(error);
	}
}

// async function createUser(event) {
// 	const { fName, sName, fSurname, sSurname, role, email, document, statusId } = JSON.parse(event.body);
// 	if (fName && sName  && fSurname && sSurname && role && email && document && statusId) {
//         const data = await db.query(
//             `INSERT INTO public."Users"("fName", "sName", "fSurname", "sSurname", "role", "email", "document", "statusId") VALUES ('${fName}', '${sName}', '${fSurname}', '${sSurname}', '${role}', '${email}', '${document}', ${statusId}) RETURNING *`
//         );
//         try {
//             return {
//                 status: 200,
//                 data: data.rows,
//                 message: "User created",
//             };
//         } catch (error) {
//             console.log(error);
//         }
//     } else {
//         return {
//             status: 400,
//             message: "Missing parameters",
//         };
        
//     }
// 	return {
// 		status: 200,
// 	};
// }

module.exports = {
	getUsers,
	getUser,
	//createUser,
};
