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
    list: "/games/list",
    update: ({ gameId }: { gameId: string }) => `/games/${gameId}/update`,
    view: ({ gameId }: { gameId: string }) => `/games/${gameId}/view`,
    delete: ({ gameId }: { gameId: string }) => `/games/${gameId}/delete`,
    cancel: ({ gameId }: { gameId: string }) => `/games/${gameId}/cancel`,
    join: ({ gameId }: { gameId: string }) => `/games/${gameId}/join`,
    leave: ({ gameId }: { gameId: string }) => `/games/${gameId}/leave`,
    removeParticipant: ({
      gameId,
      participantId,
    }: {
      gameId: string;
      participantId: string;
    }) => `/games/${gameId}/remove-participant?participantId=${participantId}`,
  },
  public: {
    profile: ({ userId }: { userId: string }) => `/public/profile/${userId}`,
  },
};
