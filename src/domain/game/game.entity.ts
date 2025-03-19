import { Level } from "@/domain/user/user.constants";

export class GameEntity {
  readonly id: string;
  readonly creatorUserId: string;
  readonly dateTime: string;
  readonly durationInMinutes: number;
  readonly nbMissingPlayers: number;
  readonly level: Level;
  readonly description?: string;

  constructor(props: {
    id: string;
    creatorUserId: string;
    dateTime: string;
    durationInMinutes: number;
    nbMissingPlayers: number;
    level: Level;
    description?: string;
  }) {
    this.id = props.id;
    this.dateTime = props.dateTime;
    this.durationInMinutes = props.durationInMinutes;
    this.nbMissingPlayers = props.nbMissingPlayers;
    this.level = props.level;
    this.description = props.description;
    this.creatorUserId = props.creatorUserId;
  }

  public isCreator({ userId }: { userId: string }) {
    return this.creatorUserId === userId;
  }

  // get nickname() {
  //   return this.profile?.nickname ?? this.email.split("@")[0];
  // }

  // get acceptEmails() {
  //   return this.profile?.acceptEmails ?? true;
  // }

  // get isProfileComplete() {
  //   return this.profile !== null;
  // }

  // get name() {
  //   return this.profile?.nickname ?? this.email.split("@")[0];
  // }
}
