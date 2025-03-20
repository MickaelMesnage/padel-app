export const PATHS = {
  home: "/home",
  loginByEmail: "/login-by-email",
  otpConfirmation: ({ email }: { email: string }) => {
    const params = new URLSearchParams();
    params.set("email", email);
    return `/otp-confirmation?${params.toString()}`;
  },
  profile: "/profile",
  games: {
    create: "/games/create",
    update: ({ gameId }: { gameId: string }) => `/games/update/${gameId}`,
    list: "/games/list",
  },
};
