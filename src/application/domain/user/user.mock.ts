import { User } from "@/application/domain/user/user.entity";

export const mockUser1 = {
  id: "1",
  email: "john.doe@example.com",
  profile: {
    nickname: "JohnD",
    acceptEmails: true,
    level: "ONE",
  },
} satisfies User;

export const mockUser2 = {
  id: "2",
  email: "jane.doe@example.com",
  profile: null,
} satisfies User;

export const mockUser3 = {
  id: "3",
  email: "sylvie@example.com",
  profile: {
    nickname: "Sylvie",
    acceptEmails: true,
    level: "ONE",
  },
} satisfies User;

export const mockUser4 = {
  id: "4",
  email: "test@test.com",
  profile: null,
} satisfies User;

export const mockUser5 = {
  id: "5",
  email: "test2@test.com",
  profile: null,
} satisfies User;
