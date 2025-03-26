import { describe, expect, it } from "vitest";
import { UserEntity } from "./user.entity";

describe("UserEntity", () => {
  describe("nickname", () => {
    it("should return nickname when profile exists", () => {
      const user = new UserEntity({
        id: "1",
        email: "john.doe@example.com",
        profile: {
          nickname: "JohnD",
          acceptEmails: true,
          level: "ONE",
        },
      });

      expect(user.nickname).toBe("JohnD");
    });

    it("should return email prefix when profile is null", () => {
      const user = new UserEntity({
        id: "1",
        email: "john.doe@example.com",
        profile: null,
      });

      expect(user.nickname).toBe("john.doe");
    });
  });

  describe("isProfileComplete", () => {
    it("should return true when profile exists", () => {
      const user = new UserEntity({
        id: "1",
        email: "john.doe@example.com",
        profile: {
          nickname: "JohnD",
          acceptEmails: true,
          level: "ONE",
        },
      });

      expect(user.isProfileComplete).toBe(true);
    });

    it("should return false when profile is null", () => {
      const user = new UserEntity({
        id: "1",
        email: "john.doe@example.com",
        profile: null,
      });

      expect(user.isProfileComplete).toBe(false);
    });
  });
});
