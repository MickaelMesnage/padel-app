export class UserEntity {
  readonly email: string;
  readonly profile: {
    nickname: string;
  } | null;

  constructor(props: {
    email: string;
    profile: {
      nickname: string;
    } | null;
  }) {
    this.email = props.email;
    this.profile = props.profile;
  }

  get isProfileComplete() {
    return this.profile !== null;
  }

  get name() {
    return this.profile?.nickname ?? this.email.split("@")[0];
  }
}
