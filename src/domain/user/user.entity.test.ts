import { describe, expect, it } from "vitest";
import { UserEntity } from "./user.entity";

describe("UserEntity", () => {
  describe("isProfileComplete", () => {
    it("should return true when profile is not null", () => {
      const user = new UserEntity({
        email: "john@example.com",
        profile: { nickname: "John" },
      });

      expect(user.isProfileComplete).toBe(true);
    });

    it("should return false when profile is null", () => {
      const user = new UserEntity({
        email: "john@example.com",
        profile: null,
      });

      expect(user.isProfileComplete).toBe(false);
    });
  });

  describe("name", () => {
    it("should return nickname when profile exists", () => {
      const user = new UserEntity({
        email: "john@example.com",
        profile: { nickname: "Johnny" },
      });

      expect(user.name).toBe("Johnny");
    });

    it("should return email prefix when profile is null", () => {
      const user = new UserEntity({
        email: "john.doe@example.com",
        profile: null,
      });

      expect(user.name).toBe("john.doe");
    });
  });
});
