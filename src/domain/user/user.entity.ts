import { Level } from "@/domain/user/user.constants";

export class UserEntity {
  readonly email: string;
  readonly profile: {
    nickname: string;
    acceptEmails: boolean;
    level: Level;
  } | null;

  constructor(props: {
    email: string;
    profile: {
      nickname: string;
      acceptEmails: boolean;
      level: Level;
    } | null;
  }) {
    this.email = props.email;
    this.profile = props.profile;
  }

  get nickname() {
    return this.profile?.nickname ?? this.email.split("@")[0];
  }

  get acceptEmails() {
    return this.profile?.acceptEmails ?? true;
  }

  get level() {
    return this.profile?.level ?? "FIVE";
  }

  get isProfileComplete() {
    return this.profile !== null;
  }

  get name() {
    return this.profile?.nickname ?? this.email.split("@")[0];
  }
}
