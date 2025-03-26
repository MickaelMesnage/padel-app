import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { mockPadelComplex } from "@/application/domain/padel-complex/padel-complex.mock";
import {
  mockUser1,
  mockUser2,
  mockUser3,
  mockUser4,
  mockUser5,
} from "@/application/domain/user/user.mock";
import { describe, expect, it } from "vitest";

describe("GameEntity", () => {
  const mockGame = {
    id: "game-1",
    dateTime: new Date(),
    durationInMinutes: 60,
    nbOfPlayersToFind: 4,
    level: "ONE",
    description: "Fun game",
    isCancelled: false,
    padelComplex: mockPadelComplex,
    participations: [],
    creator: mockUser1,
  } satisfies Game;

  describe("canUserUpdateGame", () => {
    it("should return true when user is creator and game is not cancelled", () => {
      const game = new GameEntity(mockGame);
      expect(game.canUserUpdateGame({ userId: mockUser1.id })).toBe(true);
    });

    it("should return false when user is not creator", () => {
      const game = new GameEntity(mockGame);
      expect(game.canUserUpdateGame({ userId: "user-2" })).toBe(false);
    });

    it("should return false when game is cancelled", () => {
      const cancelledGame = { ...mockGame, isCancelled: true };
      const game = new GameEntity(cancelledGame);
      expect(game.canUserUpdateGame({ userId: "user-1" })).toBe(false);
    });
  });

  describe("canUserJoinGame", () => {
    it("should return true when game is not full and user is not participating", () => {
      const game = new GameEntity(mockGame);
      expect(game.canUserJoinGame({ userId: "user-2" })).toBe(true);
    });

    it("should return false when game is full", () => {
      const fullGame = {
        ...mockGame,
        participations: [
          { user: mockUser1 },
          { user: mockUser2 },
          { user: mockUser3 },
          { user: mockUser4 },
        ],
      } satisfies Game;

      const game = new GameEntity(fullGame);
      expect(game.canUserJoinGame({ userId: mockUser5.id })).toBe(false);
    });

    it("should return false when game is cancelled", () => {
      const cancelledGame = { ...mockGame, isCancelled: true };
      const game = new GameEntity(cancelledGame);
      expect(game.canUserJoinGame({ userId: "user-2" })).toBe(false);
    });
  });

  describe("players", () => {
    it("should return array of player info", () => {
      const gameWithPlayers = {
        ...mockGame,
        participations: [
          {
            user: mockUser1,
          },
        ],
      } satisfies Game;

      const game = new GameEntity(gameWithPlayers);

      expect(game.players).toEqual([
        {
          userId: mockUser1.id,
          nickname: mockUser1.profile?.nickname,
          level: mockUser1.profile?.level,
        },
      ]);
    });
  });
});
