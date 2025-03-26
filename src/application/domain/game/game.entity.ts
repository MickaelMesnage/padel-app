import { Level } from "@/application/domain/constants/level.const";
import { PadelComplex } from "@/application/domain/padel-complex/padel-complex.entity";
import { User, UserEntity } from "@/application/domain/user/user.entity";

export interface Game {
  id: string;
  // creatorUserId: string;
  creator: User;
  dateTime: Date;
  durationInMinutes: number;
  nbOfPlayersToFind: number;
  level: Level;
  description: string;
  // padelComplexId: string;
  isCancelled: boolean;
  padelComplex: PadelComplex;
  participations: {
    user: User;
  }[];
}

export class GameEntity {
  private _creatorUserId: string;
  private _nbOfPlayersToFind: number;
  private _players: UserEntity[];
  private _isCancelled: boolean;
  constructor(props: Game) {
    this._nbOfPlayersToFind = props.nbOfPlayersToFind;
    this._creatorUserId = props.creator.id;
    this._isCancelled = props.isCancelled;
    this._players = props.participations.map(
      (participation) => new UserEntity(participation.user)
    );
  }

  public canUserUpdateGame({ userId }: { userId: string }) {
    return this._creatorUserId === userId && !this._isCancelled;
  }

  public canUserDeleteGame({ userId }: { userId: string }) {
    return this._creatorUserId === userId && this.nbOfPlayers === 0;
  }

  public canUserCancelGame({ userId }: { userId: string }) {
    return (
      this._creatorUserId === userId &&
      this.nbOfPlayers > 0 &&
      !this._isCancelled
    );
  }

  public canUserJoinGame(props: { userId: string }) {
    return (
      !this.isFull &&
      !this._isCancelled &&
      !this.isUserParticipating(props) &&
      !this.isUserCreator(props)
    );
  }

  public canUserLeaveGame({ userId }: { userId: string }) {
    return this.isUserParticipating({ userId }) && !this._isCancelled;
  }

  public canUserRemoveParticipant({ userId }: { userId: string }) {
    return this._creatorUserId === userId && !this._isCancelled;
  }

  public isUserCreator({ userId }: { userId: string }) {
    return this._creatorUserId === userId;
  }

  public isUserParticipating({ userId }: { userId: string }) {
    return this._players.some((player) => player.id === userId);
  }

  public get players() {
    return this._players.map((player) => ({
      userId: player.id,
      nickname: player.nickname,
      level: player.level,
    }));
  }

  public get nbOfPlayers() {
    return this._players.length;
  }

  public get nbOfMissingPlayers() {
    return this._nbOfPlayersToFind - this.nbOfPlayers;
  }

  public get isFull() {
    return this.nbOfPlayers === this._nbOfPlayersToFind;
  }
}
