export type LoginResponse = {
	success: boolean;
	access_token: string;
	refresh_token: string;
	role: string;
	username: string;
	message: string;
};

export type SuccessLoginResponse = {
	access_token: string;
	refresh_token: string;
	role: string;
	username: string;
};

export type ErrorLoginResponse = {
	error: string;
	details: string;
};

export type UnauthorizedResponse = {
	error: string;
};

export type RefreshTokenResponse = {
	access_token: string;
	refresh_token: string;
};

export type RefreshToken = {
	refresh_token: string;
};

export type VerificationSuccess = {
	message: string;
};

export type VerificationError = {
	error: string;
};
