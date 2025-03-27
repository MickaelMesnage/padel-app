import { Level } from "@/application/domain/constants/level.const";

export interface User {
  id: string;
  email: string;
  profile: {
    nickname: string;
    acceptEmails: boolean;
    level: Level;
  } | null;
}

export class UserEntity {
  private _id: string;
  private _email: string;
  private _profile: {
    nickname: string;
    acceptEmails: boolean;
    level: Level;
  } | null;

  constructor(props: User) {
    this._id = props.id;
    this._email = props.email;
    this._profile = props.profile;
  }

  get id() {
    return this._id;
  }

  get level() {
    return this._profile?.level;
  }

  get nickname() {
    return this._profile?.nickname ?? this._email.split("@")[0];
  }

  isProfileComplete() {
    return this._profile !== null;
  }

  pourcentageComplete() {
    let pourcentage = 0;

    if (this._profile?.nickname) {
      pourcentage += 50;
    }

    if (this._profile?.level) {
      pourcentage += 50;
    }

    return `${pourcentage}%`;
  }

  get name() {
    return this._profile?.nickname ?? this._email.split("@")[0];
  }
}
