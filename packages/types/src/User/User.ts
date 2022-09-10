export type UserEntityConstructor = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export type UserEntity = UserEntityConstructor & {
	id: string;
	version: number;
};
