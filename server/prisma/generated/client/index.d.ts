
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model DMRoom
 * 
 */
export type DMRoom = $Result.DefaultSelection<Prisma.$DMRoomPayload>
/**
 * Model ChannelMember
 * 
 */
export type ChannelMember = $Result.DefaultSelection<Prisma.$ChannelMemberPayload>
/**
 * Model ChannelMessage
 * 
 */
export type ChannelMessage = $Result.DefaultSelection<Prisma.$ChannelMessagePayload>
/**
 * Model UserMessage
 * 
 */
export type UserMessage = $Result.DefaultSelection<Prisma.$UserMessagePayload>
/**
 * Model GameHistory
 * 
 */
export type GameHistory = $Result.DefaultSelection<Prisma.$GameHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotifType: {
  gameInvite: 'gameInvite',
  friendRequest: 'friendRequest',
  roomMessage: 'roomMessage'
};

export type NotifType = (typeof NotifType)[keyof typeof NotifType]


export const Type: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  PROTECTED: 'PROTECTED'
};

export type Type = (typeof Type)[keyof typeof Type]


export const Role: {
  ADMIN: 'ADMIN',
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type NotifType = $Enums.NotifType

export const NotifType: typeof $Enums.NotifType

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs>;

  /**
   * `prisma.dMRoom`: Exposes CRUD operations for the **DMRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DMRooms
    * const dMRooms = await prisma.dMRoom.findMany()
    * ```
    */
  get dMRoom(): Prisma.DMRoomDelegate<ExtArgs>;

  /**
   * `prisma.channelMember`: Exposes CRUD operations for the **ChannelMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelMembers
    * const channelMembers = await prisma.channelMember.findMany()
    * ```
    */
  get channelMember(): Prisma.ChannelMemberDelegate<ExtArgs>;

  /**
   * `prisma.channelMessage`: Exposes CRUD operations for the **ChannelMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelMessages
    * const channelMessages = await prisma.channelMessage.findMany()
    * ```
    */
  get channelMessage(): Prisma.ChannelMessageDelegate<ExtArgs>;

  /**
   * `prisma.userMessage`: Exposes CRUD operations for the **UserMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMessages
    * const userMessages = await prisma.userMessage.findMany()
    * ```
    */
  get userMessage(): Prisma.UserMessageDelegate<ExtArgs>;

  /**
   * `prisma.gameHistory`: Exposes CRUD operations for the **GameHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameHistories
    * const gameHistories = await prisma.gameHistory.findMany()
    * ```
    */
  get gameHistory(): Prisma.GameHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Notification: 'Notification',
    FriendRequest: 'FriendRequest',
    Channel: 'Channel',
    DMRoom: 'DMRoom',
    ChannelMember: 'ChannelMember',
    ChannelMessage: 'ChannelMessage',
    UserMessage: 'UserMessage',
    GameHistory: 'GameHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'notification' | 'friendRequest' | 'channel' | 'dMRoom' | 'channelMember' | 'channelMessage' | 'userMessage' | 'gameHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      DMRoom: {
        payload: Prisma.$DMRoomPayload<ExtArgs>
        fields: Prisma.DMRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DMRoomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DMRoomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          findFirst: {
            args: Prisma.DMRoomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DMRoomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          findMany: {
            args: Prisma.DMRoomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>[]
          }
          create: {
            args: Prisma.DMRoomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          createMany: {
            args: Prisma.DMRoomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DMRoomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          update: {
            args: Prisma.DMRoomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          deleteMany: {
            args: Prisma.DMRoomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DMRoomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DMRoomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DMRoomPayload>
          }
          aggregate: {
            args: Prisma.DMRoomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDMRoom>
          }
          groupBy: {
            args: Prisma.DMRoomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DMRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.DMRoomCountArgs<ExtArgs>,
            result: $Utils.Optional<DMRoomCountAggregateOutputType> | number
          }
        }
      }
      ChannelMember: {
        payload: Prisma.$ChannelMemberPayload<ExtArgs>
        fields: Prisma.ChannelMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          findFirst: {
            args: Prisma.ChannelMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          findMany: {
            args: Prisma.ChannelMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[]
          }
          create: {
            args: Prisma.ChannelMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          createMany: {
            args: Prisma.ChannelMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChannelMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          update: {
            args: Prisma.ChannelMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChannelMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChannelMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>
          }
          aggregate: {
            args: Prisma.ChannelMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannelMember>
          }
          groupBy: {
            args: Prisma.ChannelMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelMemberCountAggregateOutputType> | number
          }
        }
      }
      ChannelMessage: {
        payload: Prisma.$ChannelMessagePayload<ExtArgs>
        fields: Prisma.ChannelMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          findFirst: {
            args: Prisma.ChannelMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          findMany: {
            args: Prisma.ChannelMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>[]
          }
          create: {
            args: Prisma.ChannelMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          createMany: {
            args: Prisma.ChannelMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChannelMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          update: {
            args: Prisma.ChannelMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChannelMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChannelMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChannelMessagePayload>
          }
          aggregate: {
            args: Prisma.ChannelMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannelMessage>
          }
          groupBy: {
            args: Prisma.ChannelMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelMessageCountAggregateOutputType> | number
          }
        }
      }
      UserMessage: {
        payload: Prisma.$UserMessagePayload<ExtArgs>
        fields: Prisma.UserMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          findFirst: {
            args: Prisma.UserMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          findMany: {
            args: Prisma.UserMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>[]
          }
          create: {
            args: Prisma.UserMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          createMany: {
            args: Prisma.UserMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          update: {
            args: Prisma.UserMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          deleteMany: {
            args: Prisma.UserMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMessagePayload>
          }
          aggregate: {
            args: Prisma.UserMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserMessage>
          }
          groupBy: {
            args: Prisma.UserMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<UserMessageCountAggregateOutputType> | number
          }
        }
      }
      GameHistory: {
        payload: Prisma.$GameHistoryPayload<ExtArgs>
        fields: Prisma.GameHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          findFirst: {
            args: Prisma.GameHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          findMany: {
            args: Prisma.GameHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>[]
          }
          create: {
            args: Prisma.GameHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          createMany: {
            args: Prisma.GameHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GameHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          update: {
            args: Prisma.GameHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          deleteMany: {
            args: Prisma.GameHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GameHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GameHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameHistoryPayload>
          }
          aggregate: {
            args: Prisma.GameHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGameHistory>
          }
          groupBy: {
            args: Prisma.GameHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GameHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<GameHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    friends: number
    friendOf: number
    blocked: number
    blockedBy: number
    chatWith: number
    chatBy: number
    friendRequestsSent: number
    friendRequestsReceived: number
    channelMember: number
    banedFrom: number
    roomMember: number
    roomMessage: number
    games: number
    opponentHistories: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    blocked?: boolean | UserCountOutputTypeCountBlockedArgs
    blockedBy?: boolean | UserCountOutputTypeCountBlockedByArgs
    chatWith?: boolean | UserCountOutputTypeCountChatWithArgs
    chatBy?: boolean | UserCountOutputTypeCountChatByArgs
    friendRequestsSent?: boolean | UserCountOutputTypeCountFriendRequestsSentArgs
    friendRequestsReceived?: boolean | UserCountOutputTypeCountFriendRequestsReceivedArgs
    channelMember?: boolean | UserCountOutputTypeCountChannelMemberArgs
    banedFrom?: boolean | UserCountOutputTypeCountBanedFromArgs
    roomMember?: boolean | UserCountOutputTypeCountRoomMemberArgs
    roomMessage?: boolean | UserCountOutputTypeCountRoomMessageArgs
    games?: boolean | UserCountOutputTypeCountGamesArgs
    opponentHistories?: boolean | UserCountOutputTypeCountOpponentHistoriesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBanedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DMRoomWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameHistoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpponentHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameHistoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }



  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    channelmessages: number
    bannedUsers: number
    channelMember: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelmessages?: boolean | ChannelCountOutputTypeCountChannelmessagesArgs
    bannedUsers?: boolean | ChannelCountOutputTypeCountBannedUsersArgs
    channelMember?: boolean | ChannelCountOutputTypeCountChannelMemberArgs
  }

  // Custom InputTypes

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountChannelmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMessageWhereInput
  }


  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountBannedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountChannelMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMemberWhereInput
  }



  /**
   * Count Type DMRoomCountOutputType
   */

  export type DMRoomCountOutputType = {
    roomMembers: number
    roomMessages: number
  }

  export type DMRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomMembers?: boolean | DMRoomCountOutputTypeCountRoomMembersArgs
    roomMessages?: boolean | DMRoomCountOutputTypeCountRoomMessagesArgs
  }

  // Custom InputTypes

  /**
   * DMRoomCountOutputType without action
   */
  export type DMRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoomCountOutputType
     */
    select?: DMRoomCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DMRoomCountOutputType without action
   */
  export type DMRoomCountOutputTypeCountRoomMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * DMRoomCountOutputType without action
   */
  export type DMRoomCountOutputTypeCountRoomMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMessageWhereInput
  }



  /**
   * Count Type ChannelMemberCountOutputType
   */

  export type ChannelMemberCountOutputType = {
    channelmessages: number
  }

  export type ChannelMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelmessages?: boolean | ChannelMemberCountOutputTypeCountChannelmessagesArgs
  }

  // Custom InputTypes

  /**
   * ChannelMemberCountOutputType without action
   */
  export type ChannelMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMemberCountOutputType
     */
    select?: ChannelMemberCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChannelMemberCountOutputType without action
   */
  export type ChannelMemberCountOutputTypeCountChannelmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userGamesXp: number | null
  }

  export type UserSumAggregateOutputType = {
    userGamesXp: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    fullname: string | null
    avatarURL: string | null
    coalitionURL: string | null
    coalitionColor: string | null
    coalitionName: string | null
    twoFactorEnabled: boolean | null
    twoFactorSecret: string | null
    isOnline: boolean | null
    isInGame: boolean | null
    hasTwoFA: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userGamesXp: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    fullname: string | null
    avatarURL: string | null
    coalitionURL: string | null
    coalitionColor: string | null
    coalitionName: string | null
    twoFactorEnabled: boolean | null
    twoFactorSecret: string | null
    isOnline: boolean | null
    isInGame: boolean | null
    hasTwoFA: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userGamesXp: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    fullname: number
    avatarURL: number
    coalitionURL: number
    coalitionColor: number
    coalitionName: number
    twoFactorEnabled: number
    twoFactorSecret: number
    isOnline: number
    isInGame: number
    hasTwoFA: number
    createdAt: number
    updatedAt: number
    userGamesXp: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userGamesXp?: true
  }

  export type UserSumAggregateInputType = {
    userGamesXp?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullname?: true
    avatarURL?: true
    coalitionURL?: true
    coalitionColor?: true
    coalitionName?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    isOnline?: true
    isInGame?: true
    hasTwoFA?: true
    createdAt?: true
    updatedAt?: true
    userGamesXp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullname?: true
    avatarURL?: true
    coalitionURL?: true
    coalitionColor?: true
    coalitionName?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    isOnline?: true
    isInGame?: true
    hasTwoFA?: true
    createdAt?: true
    updatedAt?: true
    userGamesXp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullname?: true
    avatarURL?: true
    coalitionURL?: true
    coalitionColor?: true
    coalitionName?: true
    twoFactorEnabled?: true
    twoFactorSecret?: true
    isOnline?: true
    isInGame?: true
    hasTwoFA?: true
    createdAt?: true
    updatedAt?: true
    userGamesXp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    fullname: string
    avatarURL: string
    coalitionURL: string
    coalitionColor: string
    coalitionName: string
    twoFactorEnabled: boolean
    twoFactorSecret: string | null
    isOnline: boolean
    isInGame: boolean
    hasTwoFA: boolean
    createdAt: Date
    updatedAt: Date
    userGamesXp: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    fullname?: boolean
    avatarURL?: boolean
    coalitionURL?: boolean
    coalitionColor?: boolean
    coalitionName?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userGamesXp?: boolean
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    blocked?: boolean | User$blockedArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    chatWith?: boolean | User$chatWithArgs<ExtArgs>
    chatBy?: boolean | User$chatByArgs<ExtArgs>
    friendRequestsSent?: boolean | User$friendRequestsSentArgs<ExtArgs>
    friendRequestsReceived?: boolean | User$friendRequestsReceivedArgs<ExtArgs>
    channelMember?: boolean | User$channelMemberArgs<ExtArgs>
    banedFrom?: boolean | User$banedFromArgs<ExtArgs>
    roomMember?: boolean | User$roomMemberArgs<ExtArgs>
    roomMessage?: boolean | User$roomMessageArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    opponentHistories?: boolean | User$opponentHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    fullname?: boolean
    avatarURL?: boolean
    coalitionURL?: boolean
    coalitionColor?: boolean
    coalitionName?: boolean
    twoFactorEnabled?: boolean
    twoFactorSecret?: boolean
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userGamesXp?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    blocked?: boolean | User$blockedArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    chatWith?: boolean | User$chatWithArgs<ExtArgs>
    chatBy?: boolean | User$chatByArgs<ExtArgs>
    friendRequestsSent?: boolean | User$friendRequestsSentArgs<ExtArgs>
    friendRequestsReceived?: boolean | User$friendRequestsReceivedArgs<ExtArgs>
    channelMember?: boolean | User$channelMemberArgs<ExtArgs>
    banedFrom?: boolean | User$banedFromArgs<ExtArgs>
    roomMember?: boolean | User$roomMemberArgs<ExtArgs>
    roomMessage?: boolean | User$roomMessageArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    opponentHistories?: boolean | User$opponentHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      friends: Prisma.$UserPayload<ExtArgs>[]
      friendOf: Prisma.$UserPayload<ExtArgs>[]
      blocked: Prisma.$UserPayload<ExtArgs>[]
      blockedBy: Prisma.$UserPayload<ExtArgs>[]
      chatWith: Prisma.$UserPayload<ExtArgs>[]
      chatBy: Prisma.$UserPayload<ExtArgs>[]
      friendRequestsSent: Prisma.$FriendRequestPayload<ExtArgs>[]
      friendRequestsReceived: Prisma.$FriendRequestPayload<ExtArgs>[]
      channelMember: Prisma.$ChannelMemberPayload<ExtArgs>[]
      banedFrom: Prisma.$ChannelPayload<ExtArgs>[]
      roomMember: Prisma.$DMRoomPayload<ExtArgs>[]
      roomMessage: Prisma.$UserMessagePayload<ExtArgs>[]
      games: Prisma.$GameHistoryPayload<ExtArgs>[]
      opponentHistories: Prisma.$GameHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      fullname: string
      avatarURL: string
      coalitionURL: string
      coalitionColor: string
      coalitionName: string
      twoFactorEnabled: boolean
      twoFactorSecret: string | null
      isOnline: boolean
      isInGame: boolean
      hasTwoFA: boolean
      createdAt: Date
      updatedAt: Date
      userGamesXp: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    blocked<T extends User$blockedArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    blockedBy<T extends User$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    chatWith<T extends User$chatWithArgs<ExtArgs> = {}>(args?: Subset<T, User$chatWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    chatBy<T extends User$chatByArgs<ExtArgs> = {}>(args?: Subset<T, User$chatByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendRequestsSent<T extends User$friendRequestsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$friendRequestsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendRequestsReceived<T extends User$friendRequestsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$friendRequestsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    channelMember<T extends User$channelMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$channelMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    banedFrom<T extends User$banedFromArgs<ExtArgs> = {}>(args?: Subset<T, User$banedFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'> | Null>;

    roomMember<T extends User$roomMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$roomMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findMany'> | Null>;

    roomMessage<T extends User$roomMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$roomMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    opponentHistories<T extends User$opponentHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$opponentHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly avatarURL: FieldRef<"User", 'String'>
    readonly coalitionURL: FieldRef<"User", 'String'>
    readonly coalitionColor: FieldRef<"User", 'String'>
    readonly coalitionName: FieldRef<"User", 'String'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly isInGame: FieldRef<"User", 'Boolean'>
    readonly hasTwoFA: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly userGamesXp: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.blocked
   */
  export type User$blockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.blockedBy
   */
  export type User$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.chatWith
   */
  export type User$chatWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.chatBy
   */
  export type User$chatByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.friendRequestsSent
   */
  export type User$friendRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * User.friendRequestsReceived
   */
  export type User$friendRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * User.channelMember
   */
  export type User$channelMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    where?: ChannelMemberWhereInput
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    cursor?: ChannelMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[]
  }


  /**
   * User.banedFrom
   */
  export type User$banedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * User.roomMember
   */
  export type User$roomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    where?: DMRoomWhereInput
    orderBy?: DMRoomOrderByWithRelationInput | DMRoomOrderByWithRelationInput[]
    cursor?: DMRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DMRoomScalarFieldEnum | DMRoomScalarFieldEnum[]
  }


  /**
   * User.roomMessage
   */
  export type User$roomMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    where?: UserMessageWhereInput
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    cursor?: UserMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMessageScalarFieldEnum | UserMessageScalarFieldEnum[]
  }


  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    where?: GameHistoryWhereInput
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    cursor?: GameHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameHistoryScalarFieldEnum | GameHistoryScalarFieldEnum[]
  }


  /**
   * User.opponentHistories
   */
  export type User$opponentHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    where?: GameHistoryWhereInput
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    cursor?: GameHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameHistoryScalarFieldEnum | GameHistoryScalarFieldEnum[]
  }


  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    senderId: string | null
    type: $Enums.NotifType | null
    title: string | null
    description: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    senderId: string | null
    type: $Enums.NotifType | null
    title: string | null
    description: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    senderId: number
    type: number
    title: number
    description: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    senderId?: true
    type?: true
    title?: true
    description?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    senderId?: true
    type?: true
    title?: true
    description?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    senderId?: true
    type?: true
    title?: true
    description?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    senderId: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    senderId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    senderId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      senderId: string | null
      type: $Enums.NotifType
      title: string
      description: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly senderId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotifType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly description: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
  }



  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestMinAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendRequestCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendRequestMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendRequestCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    id: string
    fromUserId: string
    toUserId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FriendRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromUserId: string
      toUserId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }


  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FriendRequestFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FriendRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FriendRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
    **/
    create<T extends FriendRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FriendRequests.
     *     @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     *     @example
     *     // Create many FriendRequests
     *     const friendRequest = await prisma.friendRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
    **/
    delete<T extends FriendRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
    **/
    upsert<T extends FriendRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FriendRequest model
   */ 
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<"FriendRequest", 'String'>
    readonly fromUserId: FieldRef<"FriendRequest", 'String'>
    readonly toUserId: FieldRef<"FriendRequest", 'String'>
    readonly status: FieldRef<"FriendRequest", 'String'>
    readonly createdAt: FieldRef<"FriendRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"FriendRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }


  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }


  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
  }



  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Type | null
    password: string | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.Type | null
    password: string | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    type: number
    password: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    password?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    password?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    password?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    name: string
    type: $Enums.Type
    password: string | null
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    password?: boolean
    channelmessages?: boolean | Channel$channelmessagesArgs<ExtArgs>
    bannedUsers?: boolean | Channel$bannedUsersArgs<ExtArgs>
    channelMember?: boolean | Channel$channelMemberArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    password?: boolean
  }

  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelmessages?: boolean | Channel$channelmessagesArgs<ExtArgs>
    bannedUsers?: boolean | Channel$bannedUsersArgs<ExtArgs>
    channelMember?: boolean | Channel$channelMemberArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      channelmessages: Prisma.$ChannelMessagePayload<ExtArgs>[]
      bannedUsers: Prisma.$UserPayload<ExtArgs>[]
      channelMember: Prisma.$ChannelMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.Type
      password: string | null
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }


  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChannelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChannelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChannelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
    **/
    create<T extends ChannelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channels.
     *     @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     *     @example
     *     // Create many Channels
     *     const channel = await prisma.channel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChannelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
    **/
    delete<T extends ChannelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChannelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChannelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChannelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
    **/
    upsert<T extends ChannelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>
    ): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channelmessages<T extends Channel$channelmessagesArgs<ExtArgs> = {}>(args?: Subset<T, Channel$channelmessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    bannedUsers<T extends Channel$bannedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Channel$bannedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    channelMember<T extends Channel$channelMemberArgs<ExtArgs> = {}>(args?: Subset<T, Channel$channelMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Channel model
   */ 
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly type: FieldRef<"Channel", 'Type'>
    readonly password: FieldRef<"Channel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }


  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }


  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }


  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel.channelmessages
   */
  export type Channel$channelmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    where?: ChannelMessageWhereInput
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    cursor?: ChannelMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelMessageScalarFieldEnum | ChannelMessageScalarFieldEnum[]
  }


  /**
   * Channel.bannedUsers
   */
  export type Channel$bannedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Channel.channelMember
   */
  export type Channel$channelMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    where?: ChannelMemberWhereInput
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    cursor?: ChannelMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[]
  }


  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude<ExtArgs> | null
  }



  /**
   * Model DMRoom
   */

  export type AggregateDMRoom = {
    _count: DMRoomCountAggregateOutputType | null
    _min: DMRoomMinAggregateOutputType | null
    _max: DMRoomMaxAggregateOutputType | null
  }

  export type DMRoomMinAggregateOutputType = {
    id: string | null
  }

  export type DMRoomMaxAggregateOutputType = {
    id: string | null
  }

  export type DMRoomCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type DMRoomMinAggregateInputType = {
    id?: true
  }

  export type DMRoomMaxAggregateInputType = {
    id?: true
  }

  export type DMRoomCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type DMRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DMRoom to aggregate.
     */
    where?: DMRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMRooms to fetch.
     */
    orderBy?: DMRoomOrderByWithRelationInput | DMRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DMRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DMRooms
    **/
    _count?: true | DMRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DMRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DMRoomMaxAggregateInputType
  }

  export type GetDMRoomAggregateType<T extends DMRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateDMRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDMRoom[P]>
      : GetScalarType<T[P], AggregateDMRoom[P]>
  }




  export type DMRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DMRoomWhereInput
    orderBy?: DMRoomOrderByWithAggregationInput | DMRoomOrderByWithAggregationInput[]
    by: DMRoomScalarFieldEnum[] | DMRoomScalarFieldEnum
    having?: DMRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DMRoomCountAggregateInputType | true
    _min?: DMRoomMinAggregateInputType
    _max?: DMRoomMaxAggregateInputType
  }

  export type DMRoomGroupByOutputType = {
    id: string
    _count: DMRoomCountAggregateOutputType | null
    _min: DMRoomMinAggregateOutputType | null
    _max: DMRoomMaxAggregateOutputType | null
  }

  type GetDMRoomGroupByPayload<T extends DMRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DMRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DMRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DMRoomGroupByOutputType[P]>
            : GetScalarType<T[P], DMRoomGroupByOutputType[P]>
        }
      >
    >


  export type DMRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomMembers?: boolean | DMRoom$roomMembersArgs<ExtArgs>
    roomMessages?: boolean | DMRoom$roomMessagesArgs<ExtArgs>
    _count?: boolean | DMRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dMRoom"]>

  export type DMRoomSelectScalar = {
    id?: boolean
  }

  export type DMRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomMembers?: boolean | DMRoom$roomMembersArgs<ExtArgs>
    roomMessages?: boolean | DMRoom$roomMessagesArgs<ExtArgs>
    _count?: boolean | DMRoomCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DMRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DMRoom"
    objects: {
      roomMembers: Prisma.$UserPayload<ExtArgs>[]
      roomMessages: Prisma.$UserMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["dMRoom"]>
    composites: {}
  }


  type DMRoomGetPayload<S extends boolean | null | undefined | DMRoomDefaultArgs> = $Result.GetResult<Prisma.$DMRoomPayload, S>

  type DMRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DMRoomFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DMRoomCountAggregateInputType | true
    }

  export interface DMRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DMRoom'], meta: { name: 'DMRoom' } }
    /**
     * Find zero or one DMRoom that matches the filter.
     * @param {DMRoomFindUniqueArgs} args - Arguments to find a DMRoom
     * @example
     * // Get one DMRoom
     * const dMRoom = await prisma.dMRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DMRoomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomFindUniqueArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DMRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DMRoomFindUniqueOrThrowArgs} args - Arguments to find a DMRoom
     * @example
     * // Get one DMRoom
     * const dMRoom = await prisma.dMRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DMRoomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DMRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomFindFirstArgs} args - Arguments to find a DMRoom
     * @example
     * // Get one DMRoom
     * const dMRoom = await prisma.dMRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DMRoomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomFindFirstArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DMRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomFindFirstOrThrowArgs} args - Arguments to find a DMRoom
     * @example
     * // Get one DMRoom
     * const dMRoom = await prisma.dMRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DMRoomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DMRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DMRooms
     * const dMRooms = await prisma.dMRoom.findMany()
     * 
     * // Get first 10 DMRooms
     * const dMRooms = await prisma.dMRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dMRoomWithIdOnly = await prisma.dMRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DMRoomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DMRoom.
     * @param {DMRoomCreateArgs} args - Arguments to create a DMRoom.
     * @example
     * // Create one DMRoom
     * const DMRoom = await prisma.dMRoom.create({
     *   data: {
     *     // ... data to create a DMRoom
     *   }
     * })
     * 
    **/
    create<T extends DMRoomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomCreateArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DMRooms.
     *     @param {DMRoomCreateManyArgs} args - Arguments to create many DMRooms.
     *     @example
     *     // Create many DMRooms
     *     const dMRoom = await prisma.dMRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DMRoomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DMRoom.
     * @param {DMRoomDeleteArgs} args - Arguments to delete one DMRoom.
     * @example
     * // Delete one DMRoom
     * const DMRoom = await prisma.dMRoom.delete({
     *   where: {
     *     // ... filter to delete one DMRoom
     *   }
     * })
     * 
    **/
    delete<T extends DMRoomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomDeleteArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DMRoom.
     * @param {DMRoomUpdateArgs} args - Arguments to update one DMRoom.
     * @example
     * // Update one DMRoom
     * const dMRoom = await prisma.dMRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DMRoomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomUpdateArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DMRooms.
     * @param {DMRoomDeleteManyArgs} args - Arguments to filter DMRooms to delete.
     * @example
     * // Delete a few DMRooms
     * const { count } = await prisma.dMRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DMRoomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DMRoomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DMRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DMRooms
     * const dMRoom = await prisma.dMRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DMRoomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DMRoom.
     * @param {DMRoomUpsertArgs} args - Arguments to update or create a DMRoom.
     * @example
     * // Update or create a DMRoom
     * const dMRoom = await prisma.dMRoom.upsert({
     *   create: {
     *     // ... data to create a DMRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DMRoom we want to update
     *   }
     * })
    **/
    upsert<T extends DMRoomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DMRoomUpsertArgs<ExtArgs>>
    ): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DMRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomCountArgs} args - Arguments to filter DMRooms to count.
     * @example
     * // Count the number of DMRooms
     * const count = await prisma.dMRoom.count({
     *   where: {
     *     // ... the filter for the DMRooms we want to count
     *   }
     * })
    **/
    count<T extends DMRoomCountArgs>(
      args?: Subset<T, DMRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DMRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DMRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DMRoomAggregateArgs>(args: Subset<T, DMRoomAggregateArgs>): Prisma.PrismaPromise<GetDMRoomAggregateType<T>>

    /**
     * Group by DMRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DMRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DMRoomGroupByArgs['orderBy'] }
        : { orderBy?: DMRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DMRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDMRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DMRoom model
   */
  readonly fields: DMRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DMRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DMRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roomMembers<T extends DMRoom$roomMembersArgs<ExtArgs> = {}>(args?: Subset<T, DMRoom$roomMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    roomMessages<T extends DMRoom$roomMessagesArgs<ExtArgs> = {}>(args?: Subset<T, DMRoom$roomMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DMRoom model
   */ 
  interface DMRoomFieldRefs {
    readonly id: FieldRef<"DMRoom", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DMRoom findUnique
   */
  export type DMRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter, which DMRoom to fetch.
     */
    where: DMRoomWhereUniqueInput
  }


  /**
   * DMRoom findUniqueOrThrow
   */
  export type DMRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter, which DMRoom to fetch.
     */
    where: DMRoomWhereUniqueInput
  }


  /**
   * DMRoom findFirst
   */
  export type DMRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter, which DMRoom to fetch.
     */
    where?: DMRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMRooms to fetch.
     */
    orderBy?: DMRoomOrderByWithRelationInput | DMRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DMRooms.
     */
    cursor?: DMRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DMRooms.
     */
    distinct?: DMRoomScalarFieldEnum | DMRoomScalarFieldEnum[]
  }


  /**
   * DMRoom findFirstOrThrow
   */
  export type DMRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter, which DMRoom to fetch.
     */
    where?: DMRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMRooms to fetch.
     */
    orderBy?: DMRoomOrderByWithRelationInput | DMRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DMRooms.
     */
    cursor?: DMRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DMRooms.
     */
    distinct?: DMRoomScalarFieldEnum | DMRoomScalarFieldEnum[]
  }


  /**
   * DMRoom findMany
   */
  export type DMRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter, which DMRooms to fetch.
     */
    where?: DMRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMRooms to fetch.
     */
    orderBy?: DMRoomOrderByWithRelationInput | DMRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DMRooms.
     */
    cursor?: DMRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMRooms.
     */
    skip?: number
    distinct?: DMRoomScalarFieldEnum | DMRoomScalarFieldEnum[]
  }


  /**
   * DMRoom create
   */
  export type DMRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a DMRoom.
     */
    data?: XOR<DMRoomCreateInput, DMRoomUncheckedCreateInput>
  }


  /**
   * DMRoom createMany
   */
  export type DMRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DMRooms.
     */
    data: DMRoomCreateManyInput | DMRoomCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DMRoom update
   */
  export type DMRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a DMRoom.
     */
    data: XOR<DMRoomUpdateInput, DMRoomUncheckedUpdateInput>
    /**
     * Choose, which DMRoom to update.
     */
    where: DMRoomWhereUniqueInput
  }


  /**
   * DMRoom updateMany
   */
  export type DMRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DMRooms.
     */
    data: XOR<DMRoomUpdateManyMutationInput, DMRoomUncheckedUpdateManyInput>
    /**
     * Filter which DMRooms to update
     */
    where?: DMRoomWhereInput
  }


  /**
   * DMRoom upsert
   */
  export type DMRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the DMRoom to update in case it exists.
     */
    where: DMRoomWhereUniqueInput
    /**
     * In case the DMRoom found by the `where` argument doesn't exist, create a new DMRoom with this data.
     */
    create: XOR<DMRoomCreateInput, DMRoomUncheckedCreateInput>
    /**
     * In case the DMRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DMRoomUpdateInput, DMRoomUncheckedUpdateInput>
  }


  /**
   * DMRoom delete
   */
  export type DMRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
    /**
     * Filter which DMRoom to delete.
     */
    where: DMRoomWhereUniqueInput
  }


  /**
   * DMRoom deleteMany
   */
  export type DMRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DMRooms to delete
     */
    where?: DMRoomWhereInput
  }


  /**
   * DMRoom.roomMembers
   */
  export type DMRoom$roomMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * DMRoom.roomMessages
   */
  export type DMRoom$roomMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    where?: UserMessageWhereInput
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    cursor?: UserMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMessageScalarFieldEnum | UserMessageScalarFieldEnum[]
  }


  /**
   * DMRoom without action
   */
  export type DMRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMRoom
     */
    select?: DMRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DMRoomInclude<ExtArgs> | null
  }



  /**
   * Model ChannelMember
   */

  export type AggregateChannelMember = {
    _count: ChannelMemberCountAggregateOutputType | null
    _min: ChannelMemberMinAggregateOutputType | null
    _max: ChannelMemberMaxAggregateOutputType | null
  }

  export type ChannelMemberMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    userId: string | null
    role: $Enums.Role | null
    isMuted: boolean | null
    timeMuted: Date | null
    createdAt: Date | null
  }

  export type ChannelMemberMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    userId: string | null
    role: $Enums.Role | null
    isMuted: boolean | null
    timeMuted: Date | null
    createdAt: Date | null
  }

  export type ChannelMemberCountAggregateOutputType = {
    id: number
    channelId: number
    userId: number
    role: number
    isMuted: number
    timeMuted: number
    createdAt: number
    _all: number
  }


  export type ChannelMemberMinAggregateInputType = {
    id?: true
    channelId?: true
    userId?: true
    role?: true
    isMuted?: true
    timeMuted?: true
    createdAt?: true
  }

  export type ChannelMemberMaxAggregateInputType = {
    id?: true
    channelId?: true
    userId?: true
    role?: true
    isMuted?: true
    timeMuted?: true
    createdAt?: true
  }

  export type ChannelMemberCountAggregateInputType = {
    id?: true
    channelId?: true
    userId?: true
    role?: true
    isMuted?: true
    timeMuted?: true
    createdAt?: true
    _all?: true
  }

  export type ChannelMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelMember to aggregate.
     */
    where?: ChannelMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelMembers
    **/
    _count?: true | ChannelMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMemberMaxAggregateInputType
  }

  export type GetChannelMemberAggregateType<T extends ChannelMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelMember[P]>
      : GetScalarType<T[P], AggregateChannelMember[P]>
  }




  export type ChannelMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMemberWhereInput
    orderBy?: ChannelMemberOrderByWithAggregationInput | ChannelMemberOrderByWithAggregationInput[]
    by: ChannelMemberScalarFieldEnum[] | ChannelMemberScalarFieldEnum
    having?: ChannelMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelMemberCountAggregateInputType | true
    _min?: ChannelMemberMinAggregateInputType
    _max?: ChannelMemberMaxAggregateInputType
  }

  export type ChannelMemberGroupByOutputType = {
    id: string
    channelId: string
    userId: string
    role: $Enums.Role
    isMuted: boolean
    timeMuted: Date | null
    createdAt: Date
    _count: ChannelMemberCountAggregateOutputType | null
    _min: ChannelMemberMinAggregateOutputType | null
    _max: ChannelMemberMaxAggregateOutputType | null
  }

  type GetChannelMemberGroupByPayload<T extends ChannelMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChannelMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    timeMuted?: boolean
    createdAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    channelmessages?: boolean | ChannelMember$channelmessagesArgs<ExtArgs>
    _count?: boolean | ChannelMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelMember"]>

  export type ChannelMemberSelectScalar = {
    id?: boolean
    channelId?: boolean
    userId?: boolean
    role?: boolean
    isMuted?: boolean
    timeMuted?: boolean
    createdAt?: boolean
  }

  export type ChannelMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    channelmessages?: boolean | ChannelMember$channelmessagesArgs<ExtArgs>
    _count?: boolean | ChannelMemberCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChannelMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelMember"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      channelmessages: Prisma.$ChannelMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      userId: string
      role: $Enums.Role
      isMuted: boolean
      timeMuted: Date | null
      createdAt: Date
    }, ExtArgs["result"]["channelMember"]>
    composites: {}
  }


  type ChannelMemberGetPayload<S extends boolean | null | undefined | ChannelMemberDefaultArgs> = $Result.GetResult<Prisma.$ChannelMemberPayload, S>

  type ChannelMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChannelMemberFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChannelMemberCountAggregateInputType | true
    }

  export interface ChannelMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelMember'], meta: { name: 'ChannelMember' } }
    /**
     * Find zero or one ChannelMember that matches the filter.
     * @param {ChannelMemberFindUniqueArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChannelMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChannelMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChannelMemberFindUniqueOrThrowArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChannelMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChannelMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindFirstArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChannelMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberFindFirstArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChannelMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindFirstOrThrowArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChannelMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChannelMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelMembers
     * const channelMembers = await prisma.channelMember.findMany()
     * 
     * // Get first 10 ChannelMembers
     * const channelMembers = await prisma.channelMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelMemberWithIdOnly = await prisma.channelMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChannelMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChannelMember.
     * @param {ChannelMemberCreateArgs} args - Arguments to create a ChannelMember.
     * @example
     * // Create one ChannelMember
     * const ChannelMember = await prisma.channelMember.create({
     *   data: {
     *     // ... data to create a ChannelMember
     *   }
     * })
     * 
    **/
    create<T extends ChannelMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberCreateArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChannelMembers.
     *     @param {ChannelMemberCreateManyArgs} args - Arguments to create many ChannelMembers.
     *     @example
     *     // Create many ChannelMembers
     *     const channelMember = await prisma.channelMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChannelMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChannelMember.
     * @param {ChannelMemberDeleteArgs} args - Arguments to delete one ChannelMember.
     * @example
     * // Delete one ChannelMember
     * const ChannelMember = await prisma.channelMember.delete({
     *   where: {
     *     // ... filter to delete one ChannelMember
     *   }
     * })
     * 
    **/
    delete<T extends ChannelMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberDeleteArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChannelMember.
     * @param {ChannelMemberUpdateArgs} args - Arguments to update one ChannelMember.
     * @example
     * // Update one ChannelMember
     * const channelMember = await prisma.channelMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChannelMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberUpdateArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChannelMembers.
     * @param {ChannelMemberDeleteManyArgs} args - Arguments to filter ChannelMembers to delete.
     * @example
     * // Delete a few ChannelMembers
     * const { count } = await prisma.channelMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChannelMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelMembers
     * const channelMember = await prisma.channelMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChannelMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChannelMember.
     * @param {ChannelMemberUpsertArgs} args - Arguments to update or create a ChannelMember.
     * @example
     * // Update or create a ChannelMember
     * const channelMember = await prisma.channelMember.upsert({
     *   create: {
     *     // ... data to create a ChannelMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelMember we want to update
     *   }
     * })
    **/
    upsert<T extends ChannelMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMemberUpsertArgs<ExtArgs>>
    ): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChannelMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberCountArgs} args - Arguments to filter ChannelMembers to count.
     * @example
     * // Count the number of ChannelMembers
     * const count = await prisma.channelMember.count({
     *   where: {
     *     // ... the filter for the ChannelMembers we want to count
     *   }
     * })
    **/
    count<T extends ChannelMemberCountArgs>(
      args?: Subset<T, ChannelMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelMemberAggregateArgs>(args: Subset<T, ChannelMemberAggregateArgs>): Prisma.PrismaPromise<GetChannelMemberAggregateType<T>>

    /**
     * Group by ChannelMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChannelMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelMember model
   */
  readonly fields: ChannelMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    channelmessages<T extends ChannelMember$channelmessagesArgs<ExtArgs> = {}>(args?: Subset<T, ChannelMember$channelmessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChannelMember model
   */ 
  interface ChannelMemberFieldRefs {
    readonly id: FieldRef<"ChannelMember", 'String'>
    readonly channelId: FieldRef<"ChannelMember", 'String'>
    readonly userId: FieldRef<"ChannelMember", 'String'>
    readonly role: FieldRef<"ChannelMember", 'Role'>
    readonly isMuted: FieldRef<"ChannelMember", 'Boolean'>
    readonly timeMuted: FieldRef<"ChannelMember", 'DateTime'>
    readonly createdAt: FieldRef<"ChannelMember", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChannelMember findUnique
   */
  export type ChannelMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMember to fetch.
     */
    where: ChannelMemberWhereUniqueInput
  }


  /**
   * ChannelMember findUniqueOrThrow
   */
  export type ChannelMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMember to fetch.
     */
    where: ChannelMemberWhereUniqueInput
  }


  /**
   * ChannelMember findFirst
   */
  export type ChannelMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMember to fetch.
     */
    where?: ChannelMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelMembers.
     */
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[]
  }


  /**
   * ChannelMember findFirstOrThrow
   */
  export type ChannelMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMember to fetch.
     */
    where?: ChannelMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelMembers.
     */
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[]
  }


  /**
   * ChannelMember findMany
   */
  export type ChannelMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMembers to fetch.
     */
    where?: ChannelMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?: ChannelMemberOrderByWithRelationInput | ChannelMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMembers.
     */
    skip?: number
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[]
  }


  /**
   * ChannelMember create
   */
  export type ChannelMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelMember.
     */
    data: XOR<ChannelMemberCreateInput, ChannelMemberUncheckedCreateInput>
  }


  /**
   * ChannelMember createMany
   */
  export type ChannelMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelMembers.
     */
    data: ChannelMemberCreateManyInput | ChannelMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChannelMember update
   */
  export type ChannelMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelMember.
     */
    data: XOR<ChannelMemberUpdateInput, ChannelMemberUncheckedUpdateInput>
    /**
     * Choose, which ChannelMember to update.
     */
    where: ChannelMemberWhereUniqueInput
  }


  /**
   * ChannelMember updateMany
   */
  export type ChannelMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelMembers.
     */
    data: XOR<ChannelMemberUpdateManyMutationInput, ChannelMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChannelMembers to update
     */
    where?: ChannelMemberWhereInput
  }


  /**
   * ChannelMember upsert
   */
  export type ChannelMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelMember to update in case it exists.
     */
    where: ChannelMemberWhereUniqueInput
    /**
     * In case the ChannelMember found by the `where` argument doesn't exist, create a new ChannelMember with this data.
     */
    create: XOR<ChannelMemberCreateInput, ChannelMemberUncheckedCreateInput>
    /**
     * In case the ChannelMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelMemberUpdateInput, ChannelMemberUncheckedUpdateInput>
  }


  /**
   * ChannelMember delete
   */
  export type ChannelMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
    /**
     * Filter which ChannelMember to delete.
     */
    where: ChannelMemberWhereUniqueInput
  }


  /**
   * ChannelMember deleteMany
   */
  export type ChannelMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelMembers to delete
     */
    where?: ChannelMemberWhereInput
  }


  /**
   * ChannelMember.channelmessages
   */
  export type ChannelMember$channelmessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    where?: ChannelMessageWhereInput
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    cursor?: ChannelMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelMessageScalarFieldEnum | ChannelMessageScalarFieldEnum[]
  }


  /**
   * ChannelMember without action
   */
  export type ChannelMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMemberInclude<ExtArgs> | null
  }



  /**
   * Model ChannelMessage
   */

  export type AggregateChannelMessage = {
    _count: ChannelMessageCountAggregateOutputType | null
    _min: ChannelMessageMinAggregateOutputType | null
    _max: ChannelMessageMaxAggregateOutputType | null
  }

  export type ChannelMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    reciverID: string | null
    authorID: string | null
    authorName: string | null
    createdAt: Date | null
  }

  export type ChannelMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    reciverID: string | null
    authorID: string | null
    authorName: string | null
    createdAt: Date | null
  }

  export type ChannelMessageCountAggregateOutputType = {
    id: number
    content: number
    reciverID: number
    authorID: number
    authorName: number
    createdAt: number
    _all: number
  }


  export type ChannelMessageMinAggregateInputType = {
    id?: true
    content?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
  }

  export type ChannelMessageMaxAggregateInputType = {
    id?: true
    content?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
  }

  export type ChannelMessageCountAggregateInputType = {
    id?: true
    content?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
    _all?: true
  }

  export type ChannelMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelMessage to aggregate.
     */
    where?: ChannelMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMessages to fetch.
     */
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelMessages
    **/
    _count?: true | ChannelMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMessageMaxAggregateInputType
  }

  export type GetChannelMessageAggregateType<T extends ChannelMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelMessage[P]>
      : GetScalarType<T[P], AggregateChannelMessage[P]>
  }




  export type ChannelMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelMessageWhereInput
    orderBy?: ChannelMessageOrderByWithAggregationInput | ChannelMessageOrderByWithAggregationInput[]
    by: ChannelMessageScalarFieldEnum[] | ChannelMessageScalarFieldEnum
    having?: ChannelMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelMessageCountAggregateInputType | true
    _min?: ChannelMessageMinAggregateInputType
    _max?: ChannelMessageMaxAggregateInputType
  }

  export type ChannelMessageGroupByOutputType = {
    id: string
    content: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt: Date
    _count: ChannelMessageCountAggregateOutputType | null
    _min: ChannelMessageMinAggregateOutputType | null
    _max: ChannelMessageMaxAggregateOutputType | null
  }

  type GetChannelMessageGroupByPayload<T extends ChannelMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChannelMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    reciverID?: boolean
    authorID?: boolean
    authorName?: boolean
    createdAt?: boolean
    author?: boolean | ChannelMemberDefaultArgs<ExtArgs>
    reciver?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelMessage"]>

  export type ChannelMessageSelectScalar = {
    id?: boolean
    content?: boolean
    reciverID?: boolean
    authorID?: boolean
    authorName?: boolean
    createdAt?: boolean
  }

  export type ChannelMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ChannelMemberDefaultArgs<ExtArgs>
    reciver?: boolean | ChannelDefaultArgs<ExtArgs>
  }


  export type $ChannelMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelMessage"
    objects: {
      author: Prisma.$ChannelMemberPayload<ExtArgs>
      reciver: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      reciverID: string
      authorID: string
      authorName: string
      createdAt: Date
    }, ExtArgs["result"]["channelMessage"]>
    composites: {}
  }


  type ChannelMessageGetPayload<S extends boolean | null | undefined | ChannelMessageDefaultArgs> = $Result.GetResult<Prisma.$ChannelMessagePayload, S>

  type ChannelMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChannelMessageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChannelMessageCountAggregateInputType | true
    }

  export interface ChannelMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelMessage'], meta: { name: 'ChannelMessage' } }
    /**
     * Find zero or one ChannelMessage that matches the filter.
     * @param {ChannelMessageFindUniqueArgs} args - Arguments to find a ChannelMessage
     * @example
     * // Get one ChannelMessage
     * const channelMessage = await prisma.channelMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChannelMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChannelMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChannelMessageFindUniqueOrThrowArgs} args - Arguments to find a ChannelMessage
     * @example
     * // Get one ChannelMessage
     * const channelMessage = await prisma.channelMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChannelMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChannelMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageFindFirstArgs} args - Arguments to find a ChannelMessage
     * @example
     * // Get one ChannelMessage
     * const channelMessage = await prisma.channelMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChannelMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChannelMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageFindFirstOrThrowArgs} args - Arguments to find a ChannelMessage
     * @example
     * // Get one ChannelMessage
     * const channelMessage = await prisma.channelMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChannelMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChannelMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelMessages
     * const channelMessages = await prisma.channelMessage.findMany()
     * 
     * // Get first 10 ChannelMessages
     * const channelMessages = await prisma.channelMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelMessageWithIdOnly = await prisma.channelMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChannelMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChannelMessage.
     * @param {ChannelMessageCreateArgs} args - Arguments to create a ChannelMessage.
     * @example
     * // Create one ChannelMessage
     * const ChannelMessage = await prisma.channelMessage.create({
     *   data: {
     *     // ... data to create a ChannelMessage
     *   }
     * })
     * 
    **/
    create<T extends ChannelMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageCreateArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChannelMessages.
     *     @param {ChannelMessageCreateManyArgs} args - Arguments to create many ChannelMessages.
     *     @example
     *     // Create many ChannelMessages
     *     const channelMessage = await prisma.channelMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChannelMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChannelMessage.
     * @param {ChannelMessageDeleteArgs} args - Arguments to delete one ChannelMessage.
     * @example
     * // Delete one ChannelMessage
     * const ChannelMessage = await prisma.channelMessage.delete({
     *   where: {
     *     // ... filter to delete one ChannelMessage
     *   }
     * })
     * 
    **/
    delete<T extends ChannelMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageDeleteArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChannelMessage.
     * @param {ChannelMessageUpdateArgs} args - Arguments to update one ChannelMessage.
     * @example
     * // Update one ChannelMessage
     * const channelMessage = await prisma.channelMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChannelMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageUpdateArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChannelMessages.
     * @param {ChannelMessageDeleteManyArgs} args - Arguments to filter ChannelMessages to delete.
     * @example
     * // Delete a few ChannelMessages
     * const { count } = await prisma.channelMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChannelMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChannelMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelMessages
     * const channelMessage = await prisma.channelMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChannelMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChannelMessage.
     * @param {ChannelMessageUpsertArgs} args - Arguments to update or create a ChannelMessage.
     * @example
     * // Update or create a ChannelMessage
     * const channelMessage = await prisma.channelMessage.upsert({
     *   create: {
     *     // ... data to create a ChannelMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelMessage we want to update
     *   }
     * })
    **/
    upsert<T extends ChannelMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChannelMessageUpsertArgs<ExtArgs>>
    ): Prisma__ChannelMessageClient<$Result.GetResult<Prisma.$ChannelMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChannelMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageCountArgs} args - Arguments to filter ChannelMessages to count.
     * @example
     * // Count the number of ChannelMessages
     * const count = await prisma.channelMessage.count({
     *   where: {
     *     // ... the filter for the ChannelMessages we want to count
     *   }
     * })
    **/
    count<T extends ChannelMessageCountArgs>(
      args?: Subset<T, ChannelMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelMessageAggregateArgs>(args: Subset<T, ChannelMessageAggregateArgs>): Prisma.PrismaPromise<GetChannelMessageAggregateType<T>>

    /**
     * Group by ChannelMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChannelMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelMessage model
   */
  readonly fields: ChannelMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends ChannelMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelMemberDefaultArgs<ExtArgs>>): Prisma__ChannelMemberClient<$Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reciver<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChannelMessage model
   */ 
  interface ChannelMessageFieldRefs {
    readonly id: FieldRef<"ChannelMessage", 'String'>
    readonly content: FieldRef<"ChannelMessage", 'String'>
    readonly reciverID: FieldRef<"ChannelMessage", 'String'>
    readonly authorID: FieldRef<"ChannelMessage", 'String'>
    readonly authorName: FieldRef<"ChannelMessage", 'String'>
    readonly createdAt: FieldRef<"ChannelMessage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChannelMessage findUnique
   */
  export type ChannelMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMessage to fetch.
     */
    where: ChannelMessageWhereUniqueInput
  }


  /**
   * ChannelMessage findUniqueOrThrow
   */
  export type ChannelMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMessage to fetch.
     */
    where: ChannelMessageWhereUniqueInput
  }


  /**
   * ChannelMessage findFirst
   */
  export type ChannelMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMessage to fetch.
     */
    where?: ChannelMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMessages to fetch.
     */
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelMessages.
     */
    cursor?: ChannelMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelMessages.
     */
    distinct?: ChannelMessageScalarFieldEnum | ChannelMessageScalarFieldEnum[]
  }


  /**
   * ChannelMessage findFirstOrThrow
   */
  export type ChannelMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMessage to fetch.
     */
    where?: ChannelMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMessages to fetch.
     */
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelMessages.
     */
    cursor?: ChannelMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelMessages.
     */
    distinct?: ChannelMessageScalarFieldEnum | ChannelMessageScalarFieldEnum[]
  }


  /**
   * ChannelMessage findMany
   */
  export type ChannelMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChannelMessages to fetch.
     */
    where?: ChannelMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelMessages to fetch.
     */
    orderBy?: ChannelMessageOrderByWithRelationInput | ChannelMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelMessages.
     */
    cursor?: ChannelMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelMessages.
     */
    skip?: number
    distinct?: ChannelMessageScalarFieldEnum | ChannelMessageScalarFieldEnum[]
  }


  /**
   * ChannelMessage create
   */
  export type ChannelMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelMessage.
     */
    data: XOR<ChannelMessageCreateInput, ChannelMessageUncheckedCreateInput>
  }


  /**
   * ChannelMessage createMany
   */
  export type ChannelMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelMessages.
     */
    data: ChannelMessageCreateManyInput | ChannelMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChannelMessage update
   */
  export type ChannelMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelMessage.
     */
    data: XOR<ChannelMessageUpdateInput, ChannelMessageUncheckedUpdateInput>
    /**
     * Choose, which ChannelMessage to update.
     */
    where: ChannelMessageWhereUniqueInput
  }


  /**
   * ChannelMessage updateMany
   */
  export type ChannelMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelMessages.
     */
    data: XOR<ChannelMessageUpdateManyMutationInput, ChannelMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChannelMessages to update
     */
    where?: ChannelMessageWhereInput
  }


  /**
   * ChannelMessage upsert
   */
  export type ChannelMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelMessage to update in case it exists.
     */
    where: ChannelMessageWhereUniqueInput
    /**
     * In case the ChannelMessage found by the `where` argument doesn't exist, create a new ChannelMessage with this data.
     */
    create: XOR<ChannelMessageCreateInput, ChannelMessageUncheckedCreateInput>
    /**
     * In case the ChannelMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelMessageUpdateInput, ChannelMessageUncheckedUpdateInput>
  }


  /**
   * ChannelMessage delete
   */
  export type ChannelMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
    /**
     * Filter which ChannelMessage to delete.
     */
    where: ChannelMessageWhereUniqueInput
  }


  /**
   * ChannelMessage deleteMany
   */
  export type ChannelMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelMessages to delete
     */
    where?: ChannelMessageWhereInput
  }


  /**
   * ChannelMessage without action
   */
  export type ChannelMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelMessage
     */
    select?: ChannelMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelMessageInclude<ExtArgs> | null
  }



  /**
   * Model UserMessage
   */

  export type AggregateUserMessage = {
    _count: UserMessageCountAggregateOutputType | null
    _min: UserMessageMinAggregateOutputType | null
    _max: UserMessageMaxAggregateOutputType | null
  }

  export type UserMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    reciverName: string | null
    reciverID: string | null
    authorID: string | null
    authorName: string | null
    createdAt: Date | null
  }

  export type UserMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    reciverName: string | null
    reciverID: string | null
    authorID: string | null
    authorName: string | null
    createdAt: Date | null
  }

  export type UserMessageCountAggregateOutputType = {
    id: number
    content: number
    reciverName: number
    reciverID: number
    authorID: number
    authorName: number
    createdAt: number
    _all: number
  }


  export type UserMessageMinAggregateInputType = {
    id?: true
    content?: true
    reciverName?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
  }

  export type UserMessageMaxAggregateInputType = {
    id?: true
    content?: true
    reciverName?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
  }

  export type UserMessageCountAggregateInputType = {
    id?: true
    content?: true
    reciverName?: true
    reciverID?: true
    authorID?: true
    authorName?: true
    createdAt?: true
    _all?: true
  }

  export type UserMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMessage to aggregate.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMessages
    **/
    _count?: true | UserMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMessageMaxAggregateInputType
  }

  export type GetUserMessageAggregateType<T extends UserMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMessage[P]>
      : GetScalarType<T[P], AggregateUserMessage[P]>
  }




  export type UserMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMessageWhereInput
    orderBy?: UserMessageOrderByWithAggregationInput | UserMessageOrderByWithAggregationInput[]
    by: UserMessageScalarFieldEnum[] | UserMessageScalarFieldEnum
    having?: UserMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMessageCountAggregateInputType | true
    _min?: UserMessageMinAggregateInputType
    _max?: UserMessageMaxAggregateInputType
  }

  export type UserMessageGroupByOutputType = {
    id: string
    content: string
    reciverName: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt: Date
    _count: UserMessageCountAggregateOutputType | null
    _min: UserMessageMinAggregateOutputType | null
    _max: UserMessageMaxAggregateOutputType | null
  }

  type GetUserMessageGroupByPayload<T extends UserMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMessageGroupByOutputType[P]>
            : GetScalarType<T[P], UserMessageGroupByOutputType[P]>
        }
      >
    >


  export type UserMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    reciverName?: boolean
    reciverID?: boolean
    authorID?: boolean
    authorName?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    reciver?: boolean | DMRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMessage"]>

  export type UserMessageSelectScalar = {
    id?: boolean
    content?: boolean
    reciverName?: boolean
    reciverID?: boolean
    authorID?: boolean
    authorName?: boolean
    createdAt?: boolean
  }

  export type UserMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    reciver?: boolean | DMRoomDefaultArgs<ExtArgs>
  }


  export type $UserMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMessage"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      reciver: Prisma.$DMRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      reciverName: string
      reciverID: string
      authorID: string
      authorName: string
      createdAt: Date
    }, ExtArgs["result"]["userMessage"]>
    composites: {}
  }


  type UserMessageGetPayload<S extends boolean | null | undefined | UserMessageDefaultArgs> = $Result.GetResult<Prisma.$UserMessagePayload, S>

  type UserMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserMessageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserMessageCountAggregateInputType | true
    }

  export interface UserMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMessage'], meta: { name: 'UserMessage' } }
    /**
     * Find zero or one UserMessage that matches the filter.
     * @param {UserMessageFindUniqueArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserMessageFindUniqueOrThrowArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindFirstArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageFindFirstArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindFirstOrThrowArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMessages
     * const userMessages = await prisma.userMessage.findMany()
     * 
     * // Get first 10 UserMessages
     * const userMessages = await prisma.userMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMessageWithIdOnly = await prisma.userMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserMessage.
     * @param {UserMessageCreateArgs} args - Arguments to create a UserMessage.
     * @example
     * // Create one UserMessage
     * const UserMessage = await prisma.userMessage.create({
     *   data: {
     *     // ... data to create a UserMessage
     *   }
     * })
     * 
    **/
    create<T extends UserMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageCreateArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserMessages.
     *     @param {UserMessageCreateManyArgs} args - Arguments to create many UserMessages.
     *     @example
     *     // Create many UserMessages
     *     const userMessage = await prisma.userMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMessage.
     * @param {UserMessageDeleteArgs} args - Arguments to delete one UserMessage.
     * @example
     * // Delete one UserMessage
     * const UserMessage = await prisma.userMessage.delete({
     *   where: {
     *     // ... filter to delete one UserMessage
     *   }
     * })
     * 
    **/
    delete<T extends UserMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageDeleteArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserMessage.
     * @param {UserMessageUpdateArgs} args - Arguments to update one UserMessage.
     * @example
     * // Update one UserMessage
     * const userMessage = await prisma.userMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageUpdateArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserMessages.
     * @param {UserMessageDeleteManyArgs} args - Arguments to filter UserMessages to delete.
     * @example
     * // Delete a few UserMessages
     * const { count } = await prisma.userMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMessages
     * const userMessage = await prisma.userMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMessage.
     * @param {UserMessageUpsertArgs} args - Arguments to update or create a UserMessage.
     * @example
     * // Update or create a UserMessage
     * const userMessage = await prisma.userMessage.upsert({
     *   create: {
     *     // ... data to create a UserMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMessage we want to update
     *   }
     * })
    **/
    upsert<T extends UserMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserMessageUpsertArgs<ExtArgs>>
    ): Prisma__UserMessageClient<$Result.GetResult<Prisma.$UserMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageCountArgs} args - Arguments to filter UserMessages to count.
     * @example
     * // Count the number of UserMessages
     * const count = await prisma.userMessage.count({
     *   where: {
     *     // ... the filter for the UserMessages we want to count
     *   }
     * })
    **/
    count<T extends UserMessageCountArgs>(
      args?: Subset<T, UserMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMessageAggregateArgs>(args: Subset<T, UserMessageAggregateArgs>): Prisma.PrismaPromise<GetUserMessageAggregateType<T>>

    /**
     * Group by UserMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMessageGroupByArgs['orderBy'] }
        : { orderBy?: UserMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMessage model
   */
  readonly fields: UserMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reciver<T extends DMRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DMRoomDefaultArgs<ExtArgs>>): Prisma__DMRoomClient<$Result.GetResult<Prisma.$DMRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserMessage model
   */ 
  interface UserMessageFieldRefs {
    readonly id: FieldRef<"UserMessage", 'String'>
    readonly content: FieldRef<"UserMessage", 'String'>
    readonly reciverName: FieldRef<"UserMessage", 'String'>
    readonly reciverID: FieldRef<"UserMessage", 'String'>
    readonly authorID: FieldRef<"UserMessage", 'String'>
    readonly authorName: FieldRef<"UserMessage", 'String'>
    readonly createdAt: FieldRef<"UserMessage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserMessage findUnique
   */
  export type UserMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage findUniqueOrThrow
   */
  export type UserMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage findFirst
   */
  export type UserMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMessages.
     */
    distinct?: UserMessageScalarFieldEnum | UserMessageScalarFieldEnum[]
  }


  /**
   * UserMessage findFirstOrThrow
   */
  export type UserMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMessages.
     */
    distinct?: UserMessageScalarFieldEnum | UserMessageScalarFieldEnum[]
  }


  /**
   * UserMessage findMany
   */
  export type UserMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserMessages to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: UserMessageOrderByWithRelationInput | UserMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    distinct?: UserMessageScalarFieldEnum | UserMessageScalarFieldEnum[]
  }


  /**
   * UserMessage create
   */
  export type UserMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMessage.
     */
    data: XOR<UserMessageCreateInput, UserMessageUncheckedCreateInput>
  }


  /**
   * UserMessage createMany
   */
  export type UserMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMessages.
     */
    data: UserMessageCreateManyInput | UserMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserMessage update
   */
  export type UserMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMessage.
     */
    data: XOR<UserMessageUpdateInput, UserMessageUncheckedUpdateInput>
    /**
     * Choose, which UserMessage to update.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage updateMany
   */
  export type UserMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMessages.
     */
    data: XOR<UserMessageUpdateManyMutationInput, UserMessageUncheckedUpdateManyInput>
    /**
     * Filter which UserMessages to update
     */
    where?: UserMessageWhereInput
  }


  /**
   * UserMessage upsert
   */
  export type UserMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMessage to update in case it exists.
     */
    where: UserMessageWhereUniqueInput
    /**
     * In case the UserMessage found by the `where` argument doesn't exist, create a new UserMessage with this data.
     */
    create: XOR<UserMessageCreateInput, UserMessageUncheckedCreateInput>
    /**
     * In case the UserMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMessageUpdateInput, UserMessageUncheckedUpdateInput>
  }


  /**
   * UserMessage delete
   */
  export type UserMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
    /**
     * Filter which UserMessage to delete.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage deleteMany
   */
  export type UserMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMessages to delete
     */
    where?: UserMessageWhereInput
  }


  /**
   * UserMessage without action
   */
  export type UserMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude<ExtArgs> | null
  }



  /**
   * Model GameHistory
   */

  export type AggregateGameHistory = {
    _count: GameHistoryCountAggregateOutputType | null
    _avg: GameHistoryAvgAggregateOutputType | null
    _sum: GameHistorySumAggregateOutputType | null
    _min: GameHistoryMinAggregateOutputType | null
    _max: GameHistoryMaxAggregateOutputType | null
  }

  export type GameHistoryAvgAggregateOutputType = {
    userScore: number | null
    opponentScore: number | null
    rounds: number | null
    matches: number | null
    xp: number | null
  }

  export type GameHistorySumAggregateOutputType = {
    userScore: number | null
    opponentScore: number | null
    rounds: number | null
    matches: number | null
    xp: number | null
  }

  export type GameHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    opponentId: string | null
    status: string | null
    userScore: number | null
    opponentScore: number | null
    rounds: number | null
    matches: number | null
    xp: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    opponentId: string | null
    status: string | null
    userScore: number | null
    opponentScore: number | null
    rounds: number | null
    matches: number | null
    xp: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameHistoryCountAggregateOutputType = {
    id: number
    userId: number
    opponentId: number
    status: number
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameHistoryAvgAggregateInputType = {
    userScore?: true
    opponentScore?: true
    rounds?: true
    matches?: true
    xp?: true
  }

  export type GameHistorySumAggregateInputType = {
    userScore?: true
    opponentScore?: true
    rounds?: true
    matches?: true
    xp?: true
  }

  export type GameHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    opponentId?: true
    status?: true
    userScore?: true
    opponentScore?: true
    rounds?: true
    matches?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    opponentId?: true
    status?: true
    userScore?: true
    opponentScore?: true
    rounds?: true
    matches?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    opponentId?: true
    status?: true
    userScore?: true
    opponentScore?: true
    rounds?: true
    matches?: true
    xp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameHistory to aggregate.
     */
    where?: GameHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameHistories to fetch.
     */
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameHistories
    **/
    _count?: true | GameHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameHistoryMaxAggregateInputType
  }

  export type GetGameHistoryAggregateType<T extends GameHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGameHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameHistory[P]>
      : GetScalarType<T[P], AggregateGameHistory[P]>
  }




  export type GameHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameHistoryWhereInput
    orderBy?: GameHistoryOrderByWithAggregationInput | GameHistoryOrderByWithAggregationInput[]
    by: GameHistoryScalarFieldEnum[] | GameHistoryScalarFieldEnum
    having?: GameHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameHistoryCountAggregateInputType | true
    _avg?: GameHistoryAvgAggregateInputType
    _sum?: GameHistorySumAggregateInputType
    _min?: GameHistoryMinAggregateInputType
    _max?: GameHistoryMaxAggregateInputType
  }

  export type GameHistoryGroupByOutputType = {
    id: string
    userId: string
    opponentId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp: number
    createdAt: Date
    updatedAt: Date
    _count: GameHistoryCountAggregateOutputType | null
    _avg: GameHistoryAvgAggregateOutputType | null
    _sum: GameHistorySumAggregateOutputType | null
    _min: GameHistoryMinAggregateOutputType | null
    _max: GameHistoryMaxAggregateOutputType | null
  }

  type GetGameHistoryGroupByPayload<T extends GameHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], GameHistoryGroupByOutputType[P]>
        }
      >
    >


  export type GameHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    opponentId?: boolean
    status?: boolean
    userScore?: boolean
    opponentScore?: boolean
    rounds?: boolean
    matches?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameHistory"]>

  export type GameHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    opponentId?: boolean
    status?: boolean
    userScore?: boolean
    opponentScore?: boolean
    rounds?: boolean
    matches?: boolean
    xp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    opponent?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $GameHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      opponent: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      opponentId: string
      status: string
      userScore: number
      opponentScore: number
      rounds: number
      matches: number
      xp: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameHistory"]>
    composites: {}
  }


  type GameHistoryGetPayload<S extends boolean | null | undefined | GameHistoryDefaultArgs> = $Result.GetResult<Prisma.$GameHistoryPayload, S>

  type GameHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameHistoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GameHistoryCountAggregateInputType | true
    }

  export interface GameHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameHistory'], meta: { name: 'GameHistory' } }
    /**
     * Find zero or one GameHistory that matches the filter.
     * @param {GameHistoryFindUniqueArgs} args - Arguments to find a GameHistory
     * @example
     * // Get one GameHistory
     * const gameHistory = await prisma.gameHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GameHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameHistoryFindUniqueOrThrowArgs} args - Arguments to find a GameHistory
     * @example
     * // Get one GameHistory
     * const gameHistory = await prisma.gameHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GameHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryFindFirstArgs} args - Arguments to find a GameHistory
     * @example
     * // Get one GameHistory
     * const gameHistory = await prisma.gameHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GameHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryFindFirstOrThrowArgs} args - Arguments to find a GameHistory
     * @example
     * // Get one GameHistory
     * const gameHistory = await prisma.gameHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GameHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameHistories
     * const gameHistories = await prisma.gameHistory.findMany()
     * 
     * // Get first 10 GameHistories
     * const gameHistories = await prisma.gameHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameHistoryWithIdOnly = await prisma.gameHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GameHistory.
     * @param {GameHistoryCreateArgs} args - Arguments to create a GameHistory.
     * @example
     * // Create one GameHistory
     * const GameHistory = await prisma.gameHistory.create({
     *   data: {
     *     // ... data to create a GameHistory
     *   }
     * })
     * 
    **/
    create<T extends GameHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryCreateArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GameHistories.
     *     @param {GameHistoryCreateManyArgs} args - Arguments to create many GameHistories.
     *     @example
     *     // Create many GameHistories
     *     const gameHistory = await prisma.gameHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameHistory.
     * @param {GameHistoryDeleteArgs} args - Arguments to delete one GameHistory.
     * @example
     * // Delete one GameHistory
     * const GameHistory = await prisma.gameHistory.delete({
     *   where: {
     *     // ... filter to delete one GameHistory
     *   }
     * })
     * 
    **/
    delete<T extends GameHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryDeleteArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GameHistory.
     * @param {GameHistoryUpdateArgs} args - Arguments to update one GameHistory.
     * @example
     * // Update one GameHistory
     * const gameHistory = await prisma.gameHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryUpdateArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GameHistories.
     * @param {GameHistoryDeleteManyArgs} args - Arguments to filter GameHistories to delete.
     * @example
     * // Delete a few GameHistories
     * const { count } = await prisma.gameHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameHistories
     * const gameHistory = await prisma.gameHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameHistory.
     * @param {GameHistoryUpsertArgs} args - Arguments to update or create a GameHistory.
     * @example
     * // Update or create a GameHistory
     * const gameHistory = await prisma.gameHistory.upsert({
     *   create: {
     *     // ... data to create a GameHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameHistory we want to update
     *   }
     * })
    **/
    upsert<T extends GameHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GameHistoryUpsertArgs<ExtArgs>>
    ): Prisma__GameHistoryClient<$Result.GetResult<Prisma.$GameHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GameHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryCountArgs} args - Arguments to filter GameHistories to count.
     * @example
     * // Count the number of GameHistories
     * const count = await prisma.gameHistory.count({
     *   where: {
     *     // ... the filter for the GameHistories we want to count
     *   }
     * })
    **/
    count<T extends GameHistoryCountArgs>(
      args?: Subset<T, GameHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameHistoryAggregateArgs>(args: Subset<T, GameHistoryAggregateArgs>): Prisma.PrismaPromise<GetGameHistoryAggregateType<T>>

    /**
     * Group by GameHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameHistoryGroupByArgs['orderBy'] }
        : { orderBy?: GameHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameHistory model
   */
  readonly fields: GameHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    opponent<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GameHistory model
   */ 
  interface GameHistoryFieldRefs {
    readonly id: FieldRef<"GameHistory", 'String'>
    readonly userId: FieldRef<"GameHistory", 'String'>
    readonly opponentId: FieldRef<"GameHistory", 'String'>
    readonly status: FieldRef<"GameHistory", 'String'>
    readonly userScore: FieldRef<"GameHistory", 'Int'>
    readonly opponentScore: FieldRef<"GameHistory", 'Int'>
    readonly rounds: FieldRef<"GameHistory", 'Int'>
    readonly matches: FieldRef<"GameHistory", 'Int'>
    readonly xp: FieldRef<"GameHistory", 'Int'>
    readonly createdAt: FieldRef<"GameHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"GameHistory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GameHistory findUnique
   */
  export type GameHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter, which GameHistory to fetch.
     */
    where: GameHistoryWhereUniqueInput
  }


  /**
   * GameHistory findUniqueOrThrow
   */
  export type GameHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter, which GameHistory to fetch.
     */
    where: GameHistoryWhereUniqueInput
  }


  /**
   * GameHistory findFirst
   */
  export type GameHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter, which GameHistory to fetch.
     */
    where?: GameHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameHistories to fetch.
     */
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameHistories.
     */
    cursor?: GameHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameHistories.
     */
    distinct?: GameHistoryScalarFieldEnum | GameHistoryScalarFieldEnum[]
  }


  /**
   * GameHistory findFirstOrThrow
   */
  export type GameHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter, which GameHistory to fetch.
     */
    where?: GameHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameHistories to fetch.
     */
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameHistories.
     */
    cursor?: GameHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameHistories.
     */
    distinct?: GameHistoryScalarFieldEnum | GameHistoryScalarFieldEnum[]
  }


  /**
   * GameHistory findMany
   */
  export type GameHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter, which GameHistories to fetch.
     */
    where?: GameHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameHistories to fetch.
     */
    orderBy?: GameHistoryOrderByWithRelationInput | GameHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameHistories.
     */
    cursor?: GameHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameHistories.
     */
    skip?: number
    distinct?: GameHistoryScalarFieldEnum | GameHistoryScalarFieldEnum[]
  }


  /**
   * GameHistory create
   */
  export type GameHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a GameHistory.
     */
    data: XOR<GameHistoryCreateInput, GameHistoryUncheckedCreateInput>
  }


  /**
   * GameHistory createMany
   */
  export type GameHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameHistories.
     */
    data: GameHistoryCreateManyInput | GameHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GameHistory update
   */
  export type GameHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a GameHistory.
     */
    data: XOR<GameHistoryUpdateInput, GameHistoryUncheckedUpdateInput>
    /**
     * Choose, which GameHistory to update.
     */
    where: GameHistoryWhereUniqueInput
  }


  /**
   * GameHistory updateMany
   */
  export type GameHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameHistories.
     */
    data: XOR<GameHistoryUpdateManyMutationInput, GameHistoryUncheckedUpdateManyInput>
    /**
     * Filter which GameHistories to update
     */
    where?: GameHistoryWhereInput
  }


  /**
   * GameHistory upsert
   */
  export type GameHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the GameHistory to update in case it exists.
     */
    where: GameHistoryWhereUniqueInput
    /**
     * In case the GameHistory found by the `where` argument doesn't exist, create a new GameHistory with this data.
     */
    create: XOR<GameHistoryCreateInput, GameHistoryUncheckedCreateInput>
    /**
     * In case the GameHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameHistoryUpdateInput, GameHistoryUncheckedUpdateInput>
  }


  /**
   * GameHistory delete
   */
  export type GameHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
    /**
     * Filter which GameHistory to delete.
     */
    where: GameHistoryWhereUniqueInput
  }


  /**
   * GameHistory deleteMany
   */
  export type GameHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameHistories to delete
     */
    where?: GameHistoryWhereInput
  }


  /**
   * GameHistory without action
   */
  export type GameHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameHistory
     */
    select?: GameHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameHistoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    fullname: 'fullname',
    avatarURL: 'avatarURL',
    coalitionURL: 'coalitionURL',
    coalitionColor: 'coalitionColor',
    coalitionName: 'coalitionName',
    twoFactorEnabled: 'twoFactorEnabled',
    twoFactorSecret: 'twoFactorSecret',
    isOnline: 'isOnline',
    isInGame: 'isInGame',
    hasTwoFA: 'hasTwoFA',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userGamesXp: 'userGamesXp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    senderId: 'senderId',
    type: 'type',
    title: 'title',
    description: 'description',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    password: 'password'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const DMRoomScalarFieldEnum: {
    id: 'id'
  };

  export type DMRoomScalarFieldEnum = (typeof DMRoomScalarFieldEnum)[keyof typeof DMRoomScalarFieldEnum]


  export const ChannelMemberScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    userId: 'userId',
    role: 'role',
    isMuted: 'isMuted',
    timeMuted: 'timeMuted',
    createdAt: 'createdAt'
  };

  export type ChannelMemberScalarFieldEnum = (typeof ChannelMemberScalarFieldEnum)[keyof typeof ChannelMemberScalarFieldEnum]


  export const ChannelMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    reciverID: 'reciverID',
    authorID: 'authorID',
    authorName: 'authorName',
    createdAt: 'createdAt'
  };

  export type ChannelMessageScalarFieldEnum = (typeof ChannelMessageScalarFieldEnum)[keyof typeof ChannelMessageScalarFieldEnum]


  export const UserMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    reciverName: 'reciverName',
    reciverID: 'reciverID',
    authorID: 'authorID',
    authorName: 'authorName',
    createdAt: 'createdAt'
  };

  export type UserMessageScalarFieldEnum = (typeof UserMessageScalarFieldEnum)[keyof typeof UserMessageScalarFieldEnum]


  export const GameHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    opponentId: 'opponentId',
    status: 'status',
    userScore: 'userScore',
    opponentScore: 'opponentScore',
    rounds: 'rounds',
    matches: 'matches',
    xp: 'xp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameHistoryScalarFieldEnum = (typeof GameHistoryScalarFieldEnum)[keyof typeof GameHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'NotifType'
   */
  export type EnumNotifTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotifType'>
    


  /**
   * Reference to a field of type 'NotifType[]'
   */
  export type ListEnumNotifTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotifType[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    avatarURL?: StringFilter<"User"> | string
    coalitionURL?: StringFilter<"User"> | string
    coalitionColor?: StringFilter<"User"> | string
    coalitionName?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    isInGame?: BoolFilter<"User"> | boolean
    hasTwoFA?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userGamesXp?: IntFilter<"User"> | number
    friends?: UserListRelationFilter
    friendOf?: UserListRelationFilter
    blocked?: UserListRelationFilter
    blockedBy?: UserListRelationFilter
    chatWith?: UserListRelationFilter
    chatBy?: UserListRelationFilter
    friendRequestsSent?: FriendRequestListRelationFilter
    friendRequestsReceived?: FriendRequestListRelationFilter
    channelMember?: ChannelMemberListRelationFilter
    banedFrom?: ChannelListRelationFilter
    roomMember?: DMRoomListRelationFilter
    roomMessage?: UserMessageListRelationFilter
    games?: GameHistoryListRelationFilter
    opponentHistories?: GameHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarURL?: SortOrder
    coalitionURL?: SortOrder
    coalitionColor?: SortOrder
    coalitionName?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    isInGame?: SortOrder
    hasTwoFA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGamesXp?: SortOrder
    friends?: UserOrderByRelationAggregateInput
    friendOf?: UserOrderByRelationAggregateInput
    blocked?: UserOrderByRelationAggregateInput
    blockedBy?: UserOrderByRelationAggregateInput
    chatWith?: UserOrderByRelationAggregateInput
    chatBy?: UserOrderByRelationAggregateInput
    friendRequestsSent?: FriendRequestOrderByRelationAggregateInput
    friendRequestsReceived?: FriendRequestOrderByRelationAggregateInput
    channelMember?: ChannelMemberOrderByRelationAggregateInput
    banedFrom?: ChannelOrderByRelationAggregateInput
    roomMember?: DMRoomOrderByRelationAggregateInput
    roomMessage?: UserMessageOrderByRelationAggregateInput
    games?: GameHistoryOrderByRelationAggregateInput
    opponentHistories?: GameHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    avatarURL?: StringFilter<"User"> | string
    coalitionURL?: StringFilter<"User"> | string
    coalitionColor?: StringFilter<"User"> | string
    coalitionName?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    isInGame?: BoolFilter<"User"> | boolean
    hasTwoFA?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userGamesXp?: IntFilter<"User"> | number
    friends?: UserListRelationFilter
    friendOf?: UserListRelationFilter
    blocked?: UserListRelationFilter
    blockedBy?: UserListRelationFilter
    chatWith?: UserListRelationFilter
    chatBy?: UserListRelationFilter
    friendRequestsSent?: FriendRequestListRelationFilter
    friendRequestsReceived?: FriendRequestListRelationFilter
    channelMember?: ChannelMemberListRelationFilter
    banedFrom?: ChannelListRelationFilter
    roomMember?: DMRoomListRelationFilter
    roomMessage?: UserMessageListRelationFilter
    games?: GameHistoryListRelationFilter
    opponentHistories?: GameHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarURL?: SortOrder
    coalitionURL?: SortOrder
    coalitionColor?: SortOrder
    coalitionName?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    isInGame?: SortOrder
    hasTwoFA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGamesXp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    avatarURL?: StringWithAggregatesFilter<"User"> | string
    coalitionURL?: StringWithAggregatesFilter<"User"> | string
    coalitionColor?: StringWithAggregatesFilter<"User"> | string
    coalitionName?: StringWithAggregatesFilter<"User"> | string
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    isInGame?: BoolWithAggregatesFilter<"User"> | boolean
    hasTwoFA?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userGamesXp?: IntWithAggregatesFilter<"User"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    senderId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotifTypeFilter<"Notification"> | $Enums.NotifType
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    senderId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotifTypeFilter<"Notification"> | $Enums.NotifType
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    senderId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotifTypeWithAggregatesFilter<"Notification"> | $Enums.NotifType
    title?: StringWithAggregatesFilter<"Notification"> | string
    description?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    fromUserId?: StringFilter<"FriendRequest"> | string
    toUserId?: StringFilter<"FriendRequest"> | string
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FriendRequest"> | Date | string
    fromUser?: XOR<UserRelationFilter, UserWhereInput>
    toUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    fromUserId?: StringFilter<"FriendRequest"> | string
    toUserId?: StringFilter<"FriendRequest"> | string
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FriendRequest"> | Date | string
    fromUser?: XOR<UserRelationFilter, UserWhereInput>
    toUser?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FriendRequest"> | string
    fromUserId?: StringWithAggregatesFilter<"FriendRequest"> | string
    toUserId?: StringWithAggregatesFilter<"FriendRequest"> | string
    status?: StringWithAggregatesFilter<"FriendRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    type?: EnumTypeFilter<"Channel"> | $Enums.Type
    password?: StringNullableFilter<"Channel"> | string | null
    channelmessages?: ChannelMessageListRelationFilter
    bannedUsers?: UserListRelationFilter
    channelMember?: ChannelMemberListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    password?: SortOrderInput | SortOrder
    channelmessages?: ChannelMessageOrderByRelationAggregateInput
    bannedUsers?: UserOrderByRelationAggregateInput
    channelMember?: ChannelMemberOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    type?: EnumTypeFilter<"Channel"> | $Enums.Type
    password?: StringNullableFilter<"Channel"> | string | null
    channelmessages?: ChannelMessageListRelationFilter
    bannedUsers?: UserListRelationFilter
    channelMember?: ChannelMemberListRelationFilter
  }, "id" | "name">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    type?: EnumTypeWithAggregatesFilter<"Channel"> | $Enums.Type
    password?: StringNullableWithAggregatesFilter<"Channel"> | string | null
  }

  export type DMRoomWhereInput = {
    AND?: DMRoomWhereInput | DMRoomWhereInput[]
    OR?: DMRoomWhereInput[]
    NOT?: DMRoomWhereInput | DMRoomWhereInput[]
    id?: StringFilter<"DMRoom"> | string
    roomMembers?: UserListRelationFilter
    roomMessages?: UserMessageListRelationFilter
  }

  export type DMRoomOrderByWithRelationInput = {
    id?: SortOrder
    roomMembers?: UserOrderByRelationAggregateInput
    roomMessages?: UserMessageOrderByRelationAggregateInput
  }

  export type DMRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DMRoomWhereInput | DMRoomWhereInput[]
    OR?: DMRoomWhereInput[]
    NOT?: DMRoomWhereInput | DMRoomWhereInput[]
    roomMembers?: UserListRelationFilter
    roomMessages?: UserMessageListRelationFilter
  }, "id">

  export type DMRoomOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: DMRoomCountOrderByAggregateInput
    _max?: DMRoomMaxOrderByAggregateInput
    _min?: DMRoomMinOrderByAggregateInput
  }

  export type DMRoomScalarWhereWithAggregatesInput = {
    AND?: DMRoomScalarWhereWithAggregatesInput | DMRoomScalarWhereWithAggregatesInput[]
    OR?: DMRoomScalarWhereWithAggregatesInput[]
    NOT?: DMRoomScalarWhereWithAggregatesInput | DMRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DMRoom"> | string
  }

  export type ChannelMemberWhereInput = {
    AND?: ChannelMemberWhereInput | ChannelMemberWhereInput[]
    OR?: ChannelMemberWhereInput[]
    NOT?: ChannelMemberWhereInput | ChannelMemberWhereInput[]
    id?: StringFilter<"ChannelMember"> | string
    channelId?: StringFilter<"ChannelMember"> | string
    userId?: StringFilter<"ChannelMember"> | string
    role?: EnumRoleFilter<"ChannelMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChannelMember"> | boolean
    timeMuted?: DateTimeNullableFilter<"ChannelMember"> | Date | string | null
    createdAt?: DateTimeFilter<"ChannelMember"> | Date | string
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    channelmessages?: ChannelMessageListRelationFilter
  }

  export type ChannelMemberOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    timeMuted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    channelmessages?: ChannelMessageOrderByRelationAggregateInput
  }

  export type ChannelMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelMemberWhereInput | ChannelMemberWhereInput[]
    OR?: ChannelMemberWhereInput[]
    NOT?: ChannelMemberWhereInput | ChannelMemberWhereInput[]
    channelId?: StringFilter<"ChannelMember"> | string
    userId?: StringFilter<"ChannelMember"> | string
    role?: EnumRoleFilter<"ChannelMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChannelMember"> | boolean
    timeMuted?: DateTimeNullableFilter<"ChannelMember"> | Date | string | null
    createdAt?: DateTimeFilter<"ChannelMember"> | Date | string
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    channelmessages?: ChannelMessageListRelationFilter
  }, "id">

  export type ChannelMemberOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    timeMuted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChannelMemberCountOrderByAggregateInput
    _max?: ChannelMemberMaxOrderByAggregateInput
    _min?: ChannelMemberMinOrderByAggregateInput
  }

  export type ChannelMemberScalarWhereWithAggregatesInput = {
    AND?: ChannelMemberScalarWhereWithAggregatesInput | ChannelMemberScalarWhereWithAggregatesInput[]
    OR?: ChannelMemberScalarWhereWithAggregatesInput[]
    NOT?: ChannelMemberScalarWhereWithAggregatesInput | ChannelMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelMember"> | string
    channelId?: StringWithAggregatesFilter<"ChannelMember"> | string
    userId?: StringWithAggregatesFilter<"ChannelMember"> | string
    role?: EnumRoleWithAggregatesFilter<"ChannelMember"> | $Enums.Role
    isMuted?: BoolWithAggregatesFilter<"ChannelMember"> | boolean
    timeMuted?: DateTimeNullableWithAggregatesFilter<"ChannelMember"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChannelMember"> | Date | string
  }

  export type ChannelMessageWhereInput = {
    AND?: ChannelMessageWhereInput | ChannelMessageWhereInput[]
    OR?: ChannelMessageWhereInput[]
    NOT?: ChannelMessageWhereInput | ChannelMessageWhereInput[]
    id?: StringFilter<"ChannelMessage"> | string
    content?: StringFilter<"ChannelMessage"> | string
    reciverID?: StringFilter<"ChannelMessage"> | string
    authorID?: StringFilter<"ChannelMessage"> | string
    authorName?: StringFilter<"ChannelMessage"> | string
    createdAt?: DateTimeFilter<"ChannelMessage"> | Date | string
    author?: XOR<ChannelMemberRelationFilter, ChannelMemberWhereInput>
    reciver?: XOR<ChannelRelationFilter, ChannelWhereInput>
  }

  export type ChannelMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    author?: ChannelMemberOrderByWithRelationInput
    reciver?: ChannelOrderByWithRelationInput
  }

  export type ChannelMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelMessageWhereInput | ChannelMessageWhereInput[]
    OR?: ChannelMessageWhereInput[]
    NOT?: ChannelMessageWhereInput | ChannelMessageWhereInput[]
    content?: StringFilter<"ChannelMessage"> | string
    reciverID?: StringFilter<"ChannelMessage"> | string
    authorID?: StringFilter<"ChannelMessage"> | string
    authorName?: StringFilter<"ChannelMessage"> | string
    createdAt?: DateTimeFilter<"ChannelMessage"> | Date | string
    author?: XOR<ChannelMemberRelationFilter, ChannelMemberWhereInput>
    reciver?: XOR<ChannelRelationFilter, ChannelWhereInput>
  }, "id">

  export type ChannelMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    _count?: ChannelMessageCountOrderByAggregateInput
    _max?: ChannelMessageMaxOrderByAggregateInput
    _min?: ChannelMessageMinOrderByAggregateInput
  }

  export type ChannelMessageScalarWhereWithAggregatesInput = {
    AND?: ChannelMessageScalarWhereWithAggregatesInput | ChannelMessageScalarWhereWithAggregatesInput[]
    OR?: ChannelMessageScalarWhereWithAggregatesInput[]
    NOT?: ChannelMessageScalarWhereWithAggregatesInput | ChannelMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelMessage"> | string
    content?: StringWithAggregatesFilter<"ChannelMessage"> | string
    reciverID?: StringWithAggregatesFilter<"ChannelMessage"> | string
    authorID?: StringWithAggregatesFilter<"ChannelMessage"> | string
    authorName?: StringWithAggregatesFilter<"ChannelMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChannelMessage"> | Date | string
  }

  export type UserMessageWhereInput = {
    AND?: UserMessageWhereInput | UserMessageWhereInput[]
    OR?: UserMessageWhereInput[]
    NOT?: UserMessageWhereInput | UserMessageWhereInput[]
    id?: StringFilter<"UserMessage"> | string
    content?: StringFilter<"UserMessage"> | string
    reciverName?: StringFilter<"UserMessage"> | string
    reciverID?: StringFilter<"UserMessage"> | string
    authorID?: StringFilter<"UserMessage"> | string
    authorName?: StringFilter<"UserMessage"> | string
    createdAt?: DateTimeFilter<"UserMessage"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    reciver?: XOR<DMRoomRelationFilter, DMRoomWhereInput>
  }

  export type UserMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    reciverName?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    reciver?: DMRoomOrderByWithRelationInput
  }

  export type UserMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserMessageWhereInput | UserMessageWhereInput[]
    OR?: UserMessageWhereInput[]
    NOT?: UserMessageWhereInput | UserMessageWhereInput[]
    content?: StringFilter<"UserMessage"> | string
    reciverName?: StringFilter<"UserMessage"> | string
    reciverID?: StringFilter<"UserMessage"> | string
    authorID?: StringFilter<"UserMessage"> | string
    authorName?: StringFilter<"UserMessage"> | string
    createdAt?: DateTimeFilter<"UserMessage"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    reciver?: XOR<DMRoomRelationFilter, DMRoomWhereInput>
  }, "id">

  export type UserMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    reciverName?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    _count?: UserMessageCountOrderByAggregateInput
    _max?: UserMessageMaxOrderByAggregateInput
    _min?: UserMessageMinOrderByAggregateInput
  }

  export type UserMessageScalarWhereWithAggregatesInput = {
    AND?: UserMessageScalarWhereWithAggregatesInput | UserMessageScalarWhereWithAggregatesInput[]
    OR?: UserMessageScalarWhereWithAggregatesInput[]
    NOT?: UserMessageScalarWhereWithAggregatesInput | UserMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMessage"> | string
    content?: StringWithAggregatesFilter<"UserMessage"> | string
    reciverName?: StringWithAggregatesFilter<"UserMessage"> | string
    reciverID?: StringWithAggregatesFilter<"UserMessage"> | string
    authorID?: StringWithAggregatesFilter<"UserMessage"> | string
    authorName?: StringWithAggregatesFilter<"UserMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserMessage"> | Date | string
  }

  export type GameHistoryWhereInput = {
    AND?: GameHistoryWhereInput | GameHistoryWhereInput[]
    OR?: GameHistoryWhereInput[]
    NOT?: GameHistoryWhereInput | GameHistoryWhereInput[]
    id?: StringFilter<"GameHistory"> | string
    userId?: StringFilter<"GameHistory"> | string
    opponentId?: StringFilter<"GameHistory"> | string
    status?: StringFilter<"GameHistory"> | string
    userScore?: IntFilter<"GameHistory"> | number
    opponentScore?: IntFilter<"GameHistory"> | number
    rounds?: IntFilter<"GameHistory"> | number
    matches?: IntFilter<"GameHistory"> | number
    xp?: IntFilter<"GameHistory"> | number
    createdAt?: DateTimeFilter<"GameHistory"> | Date | string
    updatedAt?: DateTimeFilter<"GameHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    opponent?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GameHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    opponentId?: SortOrder
    status?: SortOrder
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    opponent?: UserOrderByWithRelationInput
  }

  export type GameHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameHistoryWhereInput | GameHistoryWhereInput[]
    OR?: GameHistoryWhereInput[]
    NOT?: GameHistoryWhereInput | GameHistoryWhereInput[]
    userId?: StringFilter<"GameHistory"> | string
    opponentId?: StringFilter<"GameHistory"> | string
    status?: StringFilter<"GameHistory"> | string
    userScore?: IntFilter<"GameHistory"> | number
    opponentScore?: IntFilter<"GameHistory"> | number
    rounds?: IntFilter<"GameHistory"> | number
    matches?: IntFilter<"GameHistory"> | number
    xp?: IntFilter<"GameHistory"> | number
    createdAt?: DateTimeFilter<"GameHistory"> | Date | string
    updatedAt?: DateTimeFilter<"GameHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    opponent?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GameHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    opponentId?: SortOrder
    status?: SortOrder
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameHistoryCountOrderByAggregateInput
    _avg?: GameHistoryAvgOrderByAggregateInput
    _max?: GameHistoryMaxOrderByAggregateInput
    _min?: GameHistoryMinOrderByAggregateInput
    _sum?: GameHistorySumOrderByAggregateInput
  }

  export type GameHistoryScalarWhereWithAggregatesInput = {
    AND?: GameHistoryScalarWhereWithAggregatesInput | GameHistoryScalarWhereWithAggregatesInput[]
    OR?: GameHistoryScalarWhereWithAggregatesInput[]
    NOT?: GameHistoryScalarWhereWithAggregatesInput | GameHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameHistory"> | string
    userId?: StringWithAggregatesFilter<"GameHistory"> | string
    opponentId?: StringWithAggregatesFilter<"GameHistory"> | string
    status?: StringWithAggregatesFilter<"GameHistory"> | string
    userScore?: IntWithAggregatesFilter<"GameHistory"> | number
    opponentScore?: IntWithAggregatesFilter<"GameHistory"> | number
    rounds?: IntWithAggregatesFilter<"GameHistory"> | number
    matches?: IntWithAggregatesFilter<"GameHistory"> | number
    xp?: IntWithAggregatesFilter<"GameHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    id?: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutFriendRequestsSentInput
    toUser: UserCreateNestedOneWithoutFriendRequestsReceivedInput
  }

  export type FriendRequestUncheckedCreateInput = {
    id?: string
    fromUserId: string
    toUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput
    toUser?: UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput
  }

  export type FriendRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateManyInput = {
    id?: string
    fromUserId: string
    toUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageCreateNestedManyWithoutReciverInput
    bannedUsers?: UserCreateNestedManyWithoutBanedFromInput
    channelMember?: ChannelMemberCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutReciverInput
    bannedUsers?: UserUncheckedCreateNestedManyWithoutBanedFromInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUpdateManyWithoutReciverNestedInput
    bannedUsers?: UserUpdateManyWithoutBanedFromNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutReciverNestedInput
    bannedUsers?: UserUncheckedUpdateManyWithoutBanedFromNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DMRoomCreateInput = {
    id?: string
    roomMembers?: UserCreateNestedManyWithoutRoomMemberInput
    roomMessages?: UserMessageCreateNestedManyWithoutReciverInput
  }

  export type DMRoomUncheckedCreateInput = {
    id?: string
    roomMembers?: UserUncheckedCreateNestedManyWithoutRoomMemberInput
    roomMessages?: UserMessageUncheckedCreateNestedManyWithoutReciverInput
  }

  export type DMRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMembers?: UserUpdateManyWithoutRoomMemberNestedInput
    roomMessages?: UserMessageUpdateManyWithoutReciverNestedInput
  }

  export type DMRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMembers?: UserUncheckedUpdateManyWithoutRoomMemberNestedInput
    roomMessages?: UserMessageUncheckedUpdateManyWithoutReciverNestedInput
  }

  export type DMRoomCreateManyInput = {
    id?: string
  }

  export type DMRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DMRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutChannelMemberInput
    user: UserCreateNestedOneWithoutChannelMemberInput
    channelmessages?: ChannelMessageCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberUncheckedCreateInput = {
    id?: string
    channelId: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutChannelMemberNestedInput
    user?: UserUpdateOneRequiredWithoutChannelMemberNestedInput
    channelmessages?: ChannelMessageUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberCreateManyInput = {
    id?: string
    channelId: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
  }

  export type ChannelMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageCreateInput = {
    id?: string
    content: string
    authorName: string
    createdAt?: Date | string
    author: ChannelMemberCreateNestedOneWithoutChannelmessagesInput
    reciver: ChannelCreateNestedOneWithoutChannelmessagesInput
  }

  export type ChannelMessageUncheckedCreateInput = {
    id?: string
    content: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ChannelMemberUpdateOneRequiredWithoutChannelmessagesNestedInput
    reciver?: ChannelUpdateOneRequiredWithoutChannelmessagesNestedInput
  }

  export type ChannelMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageCreateManyInput = {
    id?: string
    content: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageCreateInput = {
    id?: string
    content: string
    reciverName: string
    authorName: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRoomMessageInput
    reciver: DMRoomCreateNestedOneWithoutRoomMessagesInput
  }

  export type UserMessageUncheckedCreateInput = {
    id?: string
    content: string
    reciverName: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type UserMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRoomMessageNestedInput
    reciver?: DMRoomUpdateOneRequiredWithoutRoomMessagesNestedInput
  }

  export type UserMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageCreateManyInput = {
    id?: string
    content: string
    reciverName: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type UserMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryCreateInput = {
    id?: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGamesInput
    opponent: UserCreateNestedOneWithoutOpponentHistoriesInput
  }

  export type GameHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    opponentId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    opponent?: UserUpdateOneRequiredWithoutOpponentHistoriesNestedInput
  }

  export type GameHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryCreateManyInput = {
    id?: string
    userId: string
    opponentId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput
    some?: FriendRequestWhereInput
    none?: FriendRequestWhereInput
  }

  export type ChannelMemberListRelationFilter = {
    every?: ChannelMemberWhereInput
    some?: ChannelMemberWhereInput
    none?: ChannelMemberWhereInput
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type DMRoomListRelationFilter = {
    every?: DMRoomWhereInput
    some?: DMRoomWhereInput
    none?: DMRoomWhereInput
  }

  export type UserMessageListRelationFilter = {
    every?: UserMessageWhereInput
    some?: UserMessageWhereInput
    none?: UserMessageWhereInput
  }

  export type GameHistoryListRelationFilter = {
    every?: GameHistoryWhereInput
    some?: GameHistoryWhereInput
    none?: GameHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DMRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarURL?: SortOrder
    coalitionURL?: SortOrder
    coalitionColor?: SortOrder
    coalitionName?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    isOnline?: SortOrder
    isInGame?: SortOrder
    hasTwoFA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGamesXp?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userGamesXp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarURL?: SortOrder
    coalitionURL?: SortOrder
    coalitionColor?: SortOrder
    coalitionName?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    isOnline?: SortOrder
    isInGame?: SortOrder
    hasTwoFA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGamesXp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarURL?: SortOrder
    coalitionURL?: SortOrder
    coalitionColor?: SortOrder
    coalitionName?: SortOrder
    twoFactorEnabled?: SortOrder
    twoFactorSecret?: SortOrder
    isOnline?: SortOrder
    isInGame?: SortOrder
    hasTwoFA?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGamesXp?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userGamesXp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumNotifTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifType | EnumNotifTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotifTypeFilter<$PrismaModel> | $Enums.NotifType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotifTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifType | EnumNotifTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotifTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotifType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotifTypeFilter<$PrismaModel>
    _max?: NestedEnumNotifTypeFilter<$PrismaModel>
  }

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type ChannelMessageListRelationFilter = {
    every?: ChannelMessageWhereInput
    some?: ChannelMessageWhereInput
    none?: ChannelMessageWhereInput
  }

  export type ChannelMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    password?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    password?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    password?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type DMRoomCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DMRoomMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DMRoomMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChannelRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type ChannelMemberCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    timeMuted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    timeMuted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelMemberMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isMuted?: SortOrder
    timeMuted?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChannelMemberRelationFilter = {
    is?: ChannelMemberWhereInput
    isNot?: ChannelMemberWhereInput
  }

  export type ChannelMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type DMRoomRelationFilter = {
    is?: DMRoomWhereInput
    isNot?: DMRoomWhereInput
  }

  export type UserMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverName?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverName?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reciverName?: SortOrder
    reciverID?: SortOrder
    authorID?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
  }

  export type GameHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    opponentId?: SortOrder
    status?: SortOrder
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameHistoryAvgOrderByAggregateInput = {
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
  }

  export type GameHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    opponentId?: SortOrder
    status?: SortOrder
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    opponentId?: SortOrder
    status?: SortOrder
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameHistorySumOrderByAggregateInput = {
    userScore?: SortOrder
    opponentScore?: SortOrder
    rounds?: SortOrder
    matches?: SortOrder
    xp?: SortOrder
  }

  export type UserCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput> | UserCreateWithoutFriendOfInput[] | UserUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput | UserCreateOrConnectWithoutFriendOfInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput> | UserCreateWithoutFriendsInput[] | UserUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput | UserCreateOrConnectWithoutFriendsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBlockedByInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput> | UserCreateWithoutBlockedByInput[] | UserUncheckedCreateWithoutBlockedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | UserCreateOrConnectWithoutBlockedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBlockedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput> | UserCreateWithoutBlockedInput[] | UserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | UserCreateOrConnectWithoutBlockedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutChatByInput = {
    create?: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput> | UserCreateWithoutChatByInput[] | UserUncheckedCreateWithoutChatByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatByInput | UserCreateOrConnectWithoutChatByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutChatWithInput = {
    create?: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput> | UserCreateWithoutChatWithInput[] | UserUncheckedCreateWithoutChatWithInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatWithInput | UserCreateOrConnectWithoutChatWithInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutFromUserInput = {
    create?: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput> | FriendRequestCreateWithoutFromUserInput[] | FriendRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromUserInput | FriendRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: FriendRequestCreateManyFromUserInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutToUserInput = {
    create?: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput> | FriendRequestCreateWithoutToUserInput[] | FriendRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToUserInput | FriendRequestCreateOrConnectWithoutToUserInput[]
    createMany?: FriendRequestCreateManyToUserInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type ChannelMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput> | ChannelMemberCreateWithoutUserInput[] | ChannelMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutUserInput | ChannelMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChannelMemberCreateManyUserInputEnvelope
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutBannedUsersInput = {
    create?: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput> | ChannelCreateWithoutBannedUsersInput[] | ChannelUncheckedCreateWithoutBannedUsersInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutBannedUsersInput | ChannelCreateOrConnectWithoutBannedUsersInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type DMRoomCreateNestedManyWithoutRoomMembersInput = {
    create?: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput> | DMRoomCreateWithoutRoomMembersInput[] | DMRoomUncheckedCreateWithoutRoomMembersInput[]
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMembersInput | DMRoomCreateOrConnectWithoutRoomMembersInput[]
    connect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
  }

  export type UserMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput> | UserMessageCreateWithoutAuthorInput[] | UserMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutAuthorInput | UserMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: UserMessageCreateManyAuthorInputEnvelope
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
  }

  export type GameHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput> | GameHistoryCreateWithoutUserInput[] | GameHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutUserInput | GameHistoryCreateOrConnectWithoutUserInput[]
    createMany?: GameHistoryCreateManyUserInputEnvelope
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
  }

  export type GameHistoryCreateNestedManyWithoutOpponentInput = {
    create?: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput> | GameHistoryCreateWithoutOpponentInput[] | GameHistoryUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutOpponentInput | GameHistoryCreateOrConnectWithoutOpponentInput[]
    createMany?: GameHistoryCreateManyOpponentInputEnvelope
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput> | UserCreateWithoutFriendOfInput[] | UserUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput | UserCreateOrConnectWithoutFriendOfInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput> | UserCreateWithoutFriendsInput[] | UserUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput | UserCreateOrConnectWithoutFriendsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBlockedByInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput> | UserCreateWithoutBlockedByInput[] | UserUncheckedCreateWithoutBlockedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | UserCreateOrConnectWithoutBlockedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput> | UserCreateWithoutBlockedInput[] | UserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | UserCreateOrConnectWithoutBlockedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatByInput = {
    create?: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput> | UserCreateWithoutChatByInput[] | UserUncheckedCreateWithoutChatByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatByInput | UserCreateOrConnectWithoutChatByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatWithInput = {
    create?: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput> | UserCreateWithoutChatWithInput[] | UserUncheckedCreateWithoutChatWithInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatWithInput | UserCreateOrConnectWithoutChatWithInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput> | FriendRequestCreateWithoutFromUserInput[] | FriendRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromUserInput | FriendRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: FriendRequestCreateManyFromUserInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput> | FriendRequestCreateWithoutToUserInput[] | FriendRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToUserInput | FriendRequestCreateOrConnectWithoutToUserInput[]
    createMany?: FriendRequestCreateManyToUserInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type ChannelMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput> | ChannelMemberCreateWithoutUserInput[] | ChannelMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutUserInput | ChannelMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChannelMemberCreateManyUserInputEnvelope
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutBannedUsersInput = {
    create?: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput> | ChannelCreateWithoutBannedUsersInput[] | ChannelUncheckedCreateWithoutBannedUsersInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutBannedUsersInput | ChannelCreateOrConnectWithoutBannedUsersInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput = {
    create?: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput> | DMRoomCreateWithoutRoomMembersInput[] | DMRoomUncheckedCreateWithoutRoomMembersInput[]
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMembersInput | DMRoomCreateOrConnectWithoutRoomMembersInput[]
    connect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
  }

  export type UserMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput> | UserMessageCreateWithoutAuthorInput[] | UserMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutAuthorInput | UserMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: UserMessageCreateManyAuthorInputEnvelope
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
  }

  export type GameHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput> | GameHistoryCreateWithoutUserInput[] | GameHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutUserInput | GameHistoryCreateOrConnectWithoutUserInput[]
    createMany?: GameHistoryCreateManyUserInputEnvelope
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
  }

  export type GameHistoryUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput> | GameHistoryCreateWithoutOpponentInput[] | GameHistoryUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutOpponentInput | GameHistoryCreateOrConnectWithoutOpponentInput[]
    createMany?: GameHistoryCreateManyOpponentInputEnvelope
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput> | UserCreateWithoutFriendOfInput[] | UserUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput | UserCreateOrConnectWithoutFriendOfInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFriendOfInput | UserUpsertWithWhereUniqueWithoutFriendOfInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFriendOfInput | UserUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFriendOfInput | UserUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput> | UserCreateWithoutFriendsInput[] | UserUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput | UserCreateOrConnectWithoutFriendsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput | UserUpsertWithWhereUniqueWithoutFriendsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFriendsInput | UserUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFriendsInput | UserUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBlockedByNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput> | UserCreateWithoutBlockedByInput[] | UserUncheckedCreateWithoutBlockedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | UserCreateOrConnectWithoutBlockedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlockedByInput | UserUpsertWithWhereUniqueWithoutBlockedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlockedByInput | UserUpdateWithWhereUniqueWithoutBlockedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlockedByInput | UserUpdateManyWithWhereWithoutBlockedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput> | UserCreateWithoutBlockedInput[] | UserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | UserCreateOrConnectWithoutBlockedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlockedInput | UserUpsertWithWhereUniqueWithoutBlockedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlockedInput | UserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlockedInput | UserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutChatByNestedInput = {
    create?: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput> | UserCreateWithoutChatByInput[] | UserUncheckedCreateWithoutChatByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatByInput | UserCreateOrConnectWithoutChatByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatByInput | UserUpsertWithWhereUniqueWithoutChatByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatByInput | UserUpdateWithWhereUniqueWithoutChatByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatByInput | UserUpdateManyWithWhereWithoutChatByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutChatWithNestedInput = {
    create?: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput> | UserCreateWithoutChatWithInput[] | UserUncheckedCreateWithoutChatWithInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatWithInput | UserCreateOrConnectWithoutChatWithInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatWithInput | UserUpsertWithWhereUniqueWithoutChatWithInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatWithInput | UserUpdateWithWhereUniqueWithoutChatWithInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatWithInput | UserUpdateManyWithWhereWithoutChatWithInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput> | FriendRequestCreateWithoutFromUserInput[] | FriendRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromUserInput | FriendRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFromUserInput | FriendRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: FriendRequestCreateManyFromUserInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFromUserInput | FriendRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFromUserInput | FriendRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutToUserNestedInput = {
    create?: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput> | FriendRequestCreateWithoutToUserInput[] | FriendRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToUserInput | FriendRequestCreateOrConnectWithoutToUserInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutToUserInput | FriendRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: FriendRequestCreateManyToUserInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutToUserInput | FriendRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutToUserInput | FriendRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type ChannelMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput> | ChannelMemberCreateWithoutUserInput[] | ChannelMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutUserInput | ChannelMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChannelMemberUpsertWithWhereUniqueWithoutUserInput | ChannelMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelMemberCreateManyUserInputEnvelope
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    disconnect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    update?: ChannelMemberUpdateWithWhereUniqueWithoutUserInput | ChannelMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelMemberUpdateManyWithWhereWithoutUserInput | ChannelMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutBannedUsersNestedInput = {
    create?: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput> | ChannelCreateWithoutBannedUsersInput[] | ChannelUncheckedCreateWithoutBannedUsersInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutBannedUsersInput | ChannelCreateOrConnectWithoutBannedUsersInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutBannedUsersInput | ChannelUpsertWithWhereUniqueWithoutBannedUsersInput[]
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutBannedUsersInput | ChannelUpdateWithWhereUniqueWithoutBannedUsersInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutBannedUsersInput | ChannelUpdateManyWithWhereWithoutBannedUsersInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type DMRoomUpdateManyWithoutRoomMembersNestedInput = {
    create?: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput> | DMRoomCreateWithoutRoomMembersInput[] | DMRoomUncheckedCreateWithoutRoomMembersInput[]
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMembersInput | DMRoomCreateOrConnectWithoutRoomMembersInput[]
    upsert?: DMRoomUpsertWithWhereUniqueWithoutRoomMembersInput | DMRoomUpsertWithWhereUniqueWithoutRoomMembersInput[]
    set?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    disconnect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    delete?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    connect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    update?: DMRoomUpdateWithWhereUniqueWithoutRoomMembersInput | DMRoomUpdateWithWhereUniqueWithoutRoomMembersInput[]
    updateMany?: DMRoomUpdateManyWithWhereWithoutRoomMembersInput | DMRoomUpdateManyWithWhereWithoutRoomMembersInput[]
    deleteMany?: DMRoomScalarWhereInput | DMRoomScalarWhereInput[]
  }

  export type UserMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput> | UserMessageCreateWithoutAuthorInput[] | UserMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutAuthorInput | UserMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: UserMessageUpsertWithWhereUniqueWithoutAuthorInput | UserMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserMessageCreateManyAuthorInputEnvelope
    set?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    disconnect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    delete?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    update?: UserMessageUpdateWithWhereUniqueWithoutAuthorInput | UserMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserMessageUpdateManyWithWhereWithoutAuthorInput | UserMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
  }

  export type GameHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput> | GameHistoryCreateWithoutUserInput[] | GameHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutUserInput | GameHistoryCreateOrConnectWithoutUserInput[]
    upsert?: GameHistoryUpsertWithWhereUniqueWithoutUserInput | GameHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameHistoryCreateManyUserInputEnvelope
    set?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    disconnect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    delete?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    update?: GameHistoryUpdateWithWhereUniqueWithoutUserInput | GameHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameHistoryUpdateManyWithWhereWithoutUserInput | GameHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
  }

  export type GameHistoryUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput> | GameHistoryCreateWithoutOpponentInput[] | GameHistoryUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutOpponentInput | GameHistoryCreateOrConnectWithoutOpponentInput[]
    upsert?: GameHistoryUpsertWithWhereUniqueWithoutOpponentInput | GameHistoryUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: GameHistoryCreateManyOpponentInputEnvelope
    set?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    disconnect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    delete?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    update?: GameHistoryUpdateWithWhereUniqueWithoutOpponentInput | GameHistoryUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: GameHistoryUpdateManyWithWhereWithoutOpponentInput | GameHistoryUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput> | UserCreateWithoutFriendOfInput[] | UserUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput | UserCreateOrConnectWithoutFriendOfInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFriendOfInput | UserUpsertWithWhereUniqueWithoutFriendOfInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFriendOfInput | UserUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFriendOfInput | UserUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput> | UserCreateWithoutFriendsInput[] | UserUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput | UserCreateOrConnectWithoutFriendsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput | UserUpsertWithWhereUniqueWithoutFriendsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFriendsInput | UserUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFriendsInput | UserUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBlockedByNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput> | UserCreateWithoutBlockedByInput[] | UserUncheckedCreateWithoutBlockedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput | UserCreateOrConnectWithoutBlockedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlockedByInput | UserUpsertWithWhereUniqueWithoutBlockedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlockedByInput | UserUpdateWithWhereUniqueWithoutBlockedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlockedByInput | UserUpdateManyWithWhereWithoutBlockedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput> | UserCreateWithoutBlockedInput[] | UserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput | UserCreateOrConnectWithoutBlockedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBlockedInput | UserUpsertWithWhereUniqueWithoutBlockedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBlockedInput | UserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBlockedInput | UserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatByNestedInput = {
    create?: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput> | UserCreateWithoutChatByInput[] | UserUncheckedCreateWithoutChatByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatByInput | UserCreateOrConnectWithoutChatByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatByInput | UserUpsertWithWhereUniqueWithoutChatByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatByInput | UserUpdateWithWhereUniqueWithoutChatByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatByInput | UserUpdateManyWithWhereWithoutChatByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatWithNestedInput = {
    create?: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput> | UserCreateWithoutChatWithInput[] | UserUncheckedCreateWithoutChatWithInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatWithInput | UserCreateOrConnectWithoutChatWithInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatWithInput | UserUpsertWithWhereUniqueWithoutChatWithInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatWithInput | UserUpdateWithWhereUniqueWithoutChatWithInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatWithInput | UserUpdateManyWithWhereWithoutChatWithInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput> | FriendRequestCreateWithoutFromUserInput[] | FriendRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromUserInput | FriendRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFromUserInput | FriendRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: FriendRequestCreateManyFromUserInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFromUserInput | FriendRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFromUserInput | FriendRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput> | FriendRequestCreateWithoutToUserInput[] | FriendRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToUserInput | FriendRequestCreateOrConnectWithoutToUserInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutToUserInput | FriendRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: FriendRequestCreateManyToUserInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutToUserInput | FriendRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutToUserInput | FriendRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type ChannelMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput> | ChannelMemberCreateWithoutUserInput[] | ChannelMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutUserInput | ChannelMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChannelMemberUpsertWithWhereUniqueWithoutUserInput | ChannelMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelMemberCreateManyUserInputEnvelope
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    disconnect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    update?: ChannelMemberUpdateWithWhereUniqueWithoutUserInput | ChannelMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelMemberUpdateManyWithWhereWithoutUserInput | ChannelMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput = {
    create?: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput> | ChannelCreateWithoutBannedUsersInput[] | ChannelUncheckedCreateWithoutBannedUsersInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutBannedUsersInput | ChannelCreateOrConnectWithoutBannedUsersInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutBannedUsersInput | ChannelUpsertWithWhereUniqueWithoutBannedUsersInput[]
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutBannedUsersInput | ChannelUpdateWithWhereUniqueWithoutBannedUsersInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutBannedUsersInput | ChannelUpdateManyWithWhereWithoutBannedUsersInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput = {
    create?: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput> | DMRoomCreateWithoutRoomMembersInput[] | DMRoomUncheckedCreateWithoutRoomMembersInput[]
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMembersInput | DMRoomCreateOrConnectWithoutRoomMembersInput[]
    upsert?: DMRoomUpsertWithWhereUniqueWithoutRoomMembersInput | DMRoomUpsertWithWhereUniqueWithoutRoomMembersInput[]
    set?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    disconnect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    delete?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    connect?: DMRoomWhereUniqueInput | DMRoomWhereUniqueInput[]
    update?: DMRoomUpdateWithWhereUniqueWithoutRoomMembersInput | DMRoomUpdateWithWhereUniqueWithoutRoomMembersInput[]
    updateMany?: DMRoomUpdateManyWithWhereWithoutRoomMembersInput | DMRoomUpdateManyWithWhereWithoutRoomMembersInput[]
    deleteMany?: DMRoomScalarWhereInput | DMRoomScalarWhereInput[]
  }

  export type UserMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput> | UserMessageCreateWithoutAuthorInput[] | UserMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutAuthorInput | UserMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: UserMessageUpsertWithWhereUniqueWithoutAuthorInput | UserMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserMessageCreateManyAuthorInputEnvelope
    set?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    disconnect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    delete?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    update?: UserMessageUpdateWithWhereUniqueWithoutAuthorInput | UserMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserMessageUpdateManyWithWhereWithoutAuthorInput | UserMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
  }

  export type GameHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput> | GameHistoryCreateWithoutUserInput[] | GameHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutUserInput | GameHistoryCreateOrConnectWithoutUserInput[]
    upsert?: GameHistoryUpsertWithWhereUniqueWithoutUserInput | GameHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameHistoryCreateManyUserInputEnvelope
    set?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    disconnect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    delete?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    update?: GameHistoryUpdateWithWhereUniqueWithoutUserInput | GameHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameHistoryUpdateManyWithWhereWithoutUserInput | GameHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
  }

  export type GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput> | GameHistoryCreateWithoutOpponentInput[] | GameHistoryUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: GameHistoryCreateOrConnectWithoutOpponentInput | GameHistoryCreateOrConnectWithoutOpponentInput[]
    upsert?: GameHistoryUpsertWithWhereUniqueWithoutOpponentInput | GameHistoryUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: GameHistoryCreateManyOpponentInputEnvelope
    set?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    disconnect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    delete?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    connect?: GameHistoryWhereUniqueInput | GameHistoryWhereUniqueInput[]
    update?: GameHistoryUpdateWithWhereUniqueWithoutOpponentInput | GameHistoryUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: GameHistoryUpdateManyWithWhereWithoutOpponentInput | GameHistoryUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotifTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotifType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutFriendRequestsSentInput = {
    create?: XOR<UserCreateWithoutFriendRequestsSentInput, UserUncheckedCreateWithoutFriendRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendRequestsReceivedInput = {
    create?: XOR<UserCreateWithoutFriendRequestsReceivedInput, UserUncheckedCreateWithoutFriendRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput = {
    create?: XOR<UserCreateWithoutFriendRequestsSentInput, UserUncheckedCreateWithoutFriendRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput
    upsert?: UserUpsertWithoutFriendRequestsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendRequestsSentInput, UserUpdateWithoutFriendRequestsSentInput>, UserUncheckedUpdateWithoutFriendRequestsSentInput>
  }

  export type UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutFriendRequestsReceivedInput, UserUncheckedCreateWithoutFriendRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput
    upsert?: UserUpsertWithoutFriendRequestsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput, UserUpdateWithoutFriendRequestsReceivedInput>, UserUncheckedUpdateWithoutFriendRequestsReceivedInput>
  }

  export type ChannelMessageCreateNestedManyWithoutReciverInput = {
    create?: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput> | ChannelMessageCreateWithoutReciverInput[] | ChannelMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutReciverInput | ChannelMessageCreateOrConnectWithoutReciverInput[]
    createMany?: ChannelMessageCreateManyReciverInputEnvelope
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBanedFromInput = {
    create?: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput> | UserCreateWithoutBanedFromInput[] | UserUncheckedCreateWithoutBanedFromInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBanedFromInput | UserCreateOrConnectWithoutBanedFromInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChannelMemberCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput> | ChannelMemberCreateWithoutChannelInput[] | ChannelMemberUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelInput | ChannelMemberCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelMemberCreateManyChannelInputEnvelope
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
  }

  export type ChannelMessageUncheckedCreateNestedManyWithoutReciverInput = {
    create?: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput> | ChannelMessageCreateWithoutReciverInput[] | ChannelMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutReciverInput | ChannelMessageCreateOrConnectWithoutReciverInput[]
    createMany?: ChannelMessageCreateManyReciverInputEnvelope
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBanedFromInput = {
    create?: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput> | UserCreateWithoutBanedFromInput[] | UserUncheckedCreateWithoutBanedFromInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBanedFromInput | UserCreateOrConnectWithoutBanedFromInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChannelMemberUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput> | ChannelMemberCreateWithoutChannelInput[] | ChannelMemberUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelInput | ChannelMemberCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelMemberCreateManyChannelInputEnvelope
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type ChannelMessageUpdateManyWithoutReciverNestedInput = {
    create?: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput> | ChannelMessageCreateWithoutReciverInput[] | ChannelMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutReciverInput | ChannelMessageCreateOrConnectWithoutReciverInput[]
    upsert?: ChannelMessageUpsertWithWhereUniqueWithoutReciverInput | ChannelMessageUpsertWithWhereUniqueWithoutReciverInput[]
    createMany?: ChannelMessageCreateManyReciverInputEnvelope
    set?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    disconnect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    delete?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    update?: ChannelMessageUpdateWithWhereUniqueWithoutReciverInput | ChannelMessageUpdateWithWhereUniqueWithoutReciverInput[]
    updateMany?: ChannelMessageUpdateManyWithWhereWithoutReciverInput | ChannelMessageUpdateManyWithWhereWithoutReciverInput[]
    deleteMany?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBanedFromNestedInput = {
    create?: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput> | UserCreateWithoutBanedFromInput[] | UserUncheckedCreateWithoutBanedFromInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBanedFromInput | UserCreateOrConnectWithoutBanedFromInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBanedFromInput | UserUpsertWithWhereUniqueWithoutBanedFromInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBanedFromInput | UserUpdateWithWhereUniqueWithoutBanedFromInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBanedFromInput | UserUpdateManyWithWhereWithoutBanedFromInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChannelMemberUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput> | ChannelMemberCreateWithoutChannelInput[] | ChannelMemberUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelInput | ChannelMemberCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelMemberUpsertWithWhereUniqueWithoutChannelInput | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelMemberCreateManyChannelInputEnvelope
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    disconnect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    update?: ChannelMemberUpdateWithWhereUniqueWithoutChannelInput | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelMemberUpdateManyWithWhereWithoutChannelInput | ChannelMemberUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
  }

  export type ChannelMessageUncheckedUpdateManyWithoutReciverNestedInput = {
    create?: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput> | ChannelMessageCreateWithoutReciverInput[] | ChannelMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutReciverInput | ChannelMessageCreateOrConnectWithoutReciverInput[]
    upsert?: ChannelMessageUpsertWithWhereUniqueWithoutReciverInput | ChannelMessageUpsertWithWhereUniqueWithoutReciverInput[]
    createMany?: ChannelMessageCreateManyReciverInputEnvelope
    set?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    disconnect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    delete?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    update?: ChannelMessageUpdateWithWhereUniqueWithoutReciverInput | ChannelMessageUpdateWithWhereUniqueWithoutReciverInput[]
    updateMany?: ChannelMessageUpdateManyWithWhereWithoutReciverInput | ChannelMessageUpdateManyWithWhereWithoutReciverInput[]
    deleteMany?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBanedFromNestedInput = {
    create?: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput> | UserCreateWithoutBanedFromInput[] | UserUncheckedCreateWithoutBanedFromInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBanedFromInput | UserCreateOrConnectWithoutBanedFromInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBanedFromInput | UserUpsertWithWhereUniqueWithoutBanedFromInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBanedFromInput | UserUpdateWithWhereUniqueWithoutBanedFromInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBanedFromInput | UserUpdateManyWithWhereWithoutBanedFromInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput> | ChannelMemberCreateWithoutChannelInput[] | ChannelMemberUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelInput | ChannelMemberCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelMemberUpsertWithWhereUniqueWithoutChannelInput | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelMemberCreateManyChannelInputEnvelope
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    disconnect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[]
    update?: ChannelMemberUpdateWithWhereUniqueWithoutChannelInput | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelMemberUpdateManyWithWhereWithoutChannelInput | ChannelMemberUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoomMemberInput = {
    create?: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput> | UserCreateWithoutRoomMemberInput[] | UserUncheckedCreateWithoutRoomMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomMemberInput | UserCreateOrConnectWithoutRoomMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserMessageCreateNestedManyWithoutReciverInput = {
    create?: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput> | UserMessageCreateWithoutReciverInput[] | UserMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutReciverInput | UserMessageCreateOrConnectWithoutReciverInput[]
    createMany?: UserMessageCreateManyReciverInputEnvelope
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoomMemberInput = {
    create?: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput> | UserCreateWithoutRoomMemberInput[] | UserUncheckedCreateWithoutRoomMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomMemberInput | UserCreateOrConnectWithoutRoomMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserMessageUncheckedCreateNestedManyWithoutReciverInput = {
    create?: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput> | UserMessageCreateWithoutReciverInput[] | UserMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutReciverInput | UserMessageCreateOrConnectWithoutReciverInput[]
    createMany?: UserMessageCreateManyReciverInputEnvelope
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoomMemberNestedInput = {
    create?: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput> | UserCreateWithoutRoomMemberInput[] | UserUncheckedCreateWithoutRoomMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomMemberInput | UserCreateOrConnectWithoutRoomMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomMemberInput | UserUpsertWithWhereUniqueWithoutRoomMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomMemberInput | UserUpdateWithWhereUniqueWithoutRoomMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomMemberInput | UserUpdateManyWithWhereWithoutRoomMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserMessageUpdateManyWithoutReciverNestedInput = {
    create?: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput> | UserMessageCreateWithoutReciverInput[] | UserMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutReciverInput | UserMessageCreateOrConnectWithoutReciverInput[]
    upsert?: UserMessageUpsertWithWhereUniqueWithoutReciverInput | UserMessageUpsertWithWhereUniqueWithoutReciverInput[]
    createMany?: UserMessageCreateManyReciverInputEnvelope
    set?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    disconnect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    delete?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    update?: UserMessageUpdateWithWhereUniqueWithoutReciverInput | UserMessageUpdateWithWhereUniqueWithoutReciverInput[]
    updateMany?: UserMessageUpdateManyWithWhereWithoutReciverInput | UserMessageUpdateManyWithWhereWithoutReciverInput[]
    deleteMany?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoomMemberNestedInput = {
    create?: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput> | UserCreateWithoutRoomMemberInput[] | UserUncheckedCreateWithoutRoomMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomMemberInput | UserCreateOrConnectWithoutRoomMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomMemberInput | UserUpsertWithWhereUniqueWithoutRoomMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomMemberInput | UserUpdateWithWhereUniqueWithoutRoomMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomMemberInput | UserUpdateManyWithWhereWithoutRoomMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserMessageUncheckedUpdateManyWithoutReciverNestedInput = {
    create?: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput> | UserMessageCreateWithoutReciverInput[] | UserMessageUncheckedCreateWithoutReciverInput[]
    connectOrCreate?: UserMessageCreateOrConnectWithoutReciverInput | UserMessageCreateOrConnectWithoutReciverInput[]
    upsert?: UserMessageUpsertWithWhereUniqueWithoutReciverInput | UserMessageUpsertWithWhereUniqueWithoutReciverInput[]
    createMany?: UserMessageCreateManyReciverInputEnvelope
    set?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    disconnect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    delete?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    connect?: UserMessageWhereUniqueInput | UserMessageWhereUniqueInput[]
    update?: UserMessageUpdateWithWhereUniqueWithoutReciverInput | UserMessageUpdateWithWhereUniqueWithoutReciverInput[]
    updateMany?: UserMessageUpdateManyWithWhereWithoutReciverInput | UserMessageUpdateManyWithWhereWithoutReciverInput[]
    deleteMany?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
  }

  export type ChannelCreateNestedOneWithoutChannelMemberInput = {
    create?: XOR<ChannelCreateWithoutChannelMemberInput, ChannelUncheckedCreateWithoutChannelMemberInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutChannelMemberInput
    connect?: ChannelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChannelMemberInput = {
    create?: XOR<UserCreateWithoutChannelMemberInput, UserUncheckedCreateWithoutChannelMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelMemberInput
    connect?: UserWhereUniqueInput
  }

  export type ChannelMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput> | ChannelMessageCreateWithoutAuthorInput[] | ChannelMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutAuthorInput | ChannelMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChannelMessageCreateManyAuthorInputEnvelope
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
  }

  export type ChannelMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput> | ChannelMessageCreateWithoutAuthorInput[] | ChannelMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutAuthorInput | ChannelMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChannelMessageCreateManyAuthorInputEnvelope
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChannelUpdateOneRequiredWithoutChannelMemberNestedInput = {
    create?: XOR<ChannelCreateWithoutChannelMemberInput, ChannelUncheckedCreateWithoutChannelMemberInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutChannelMemberInput
    upsert?: ChannelUpsertWithoutChannelMemberInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutChannelMemberInput, ChannelUpdateWithoutChannelMemberInput>, ChannelUncheckedUpdateWithoutChannelMemberInput>
  }

  export type UserUpdateOneRequiredWithoutChannelMemberNestedInput = {
    create?: XOR<UserCreateWithoutChannelMemberInput, UserUncheckedCreateWithoutChannelMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelMemberInput
    upsert?: UserUpsertWithoutChannelMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelMemberInput, UserUpdateWithoutChannelMemberInput>, UserUncheckedUpdateWithoutChannelMemberInput>
  }

  export type ChannelMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput> | ChannelMessageCreateWithoutAuthorInput[] | ChannelMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutAuthorInput | ChannelMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChannelMessageUpsertWithWhereUniqueWithoutAuthorInput | ChannelMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChannelMessageCreateManyAuthorInputEnvelope
    set?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    disconnect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    delete?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    update?: ChannelMessageUpdateWithWhereUniqueWithoutAuthorInput | ChannelMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChannelMessageUpdateManyWithWhereWithoutAuthorInput | ChannelMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
  }

  export type ChannelMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput> | ChannelMessageCreateWithoutAuthorInput[] | ChannelMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChannelMessageCreateOrConnectWithoutAuthorInput | ChannelMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChannelMessageUpsertWithWhereUniqueWithoutAuthorInput | ChannelMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChannelMessageCreateManyAuthorInputEnvelope
    set?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    disconnect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    delete?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    connect?: ChannelMessageWhereUniqueInput | ChannelMessageWhereUniqueInput[]
    update?: ChannelMessageUpdateWithWhereUniqueWithoutAuthorInput | ChannelMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChannelMessageUpdateManyWithWhereWithoutAuthorInput | ChannelMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
  }

  export type ChannelMemberCreateNestedOneWithoutChannelmessagesInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelmessagesInput, ChannelMemberUncheckedCreateWithoutChannelmessagesInput>
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelmessagesInput
    connect?: ChannelMemberWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutChannelmessagesInput = {
    create?: XOR<ChannelCreateWithoutChannelmessagesInput, ChannelUncheckedCreateWithoutChannelmessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutChannelmessagesInput
    connect?: ChannelWhereUniqueInput
  }

  export type ChannelMemberUpdateOneRequiredWithoutChannelmessagesNestedInput = {
    create?: XOR<ChannelMemberCreateWithoutChannelmessagesInput, ChannelMemberUncheckedCreateWithoutChannelmessagesInput>
    connectOrCreate?: ChannelMemberCreateOrConnectWithoutChannelmessagesInput
    upsert?: ChannelMemberUpsertWithoutChannelmessagesInput
    connect?: ChannelMemberWhereUniqueInput
    update?: XOR<XOR<ChannelMemberUpdateToOneWithWhereWithoutChannelmessagesInput, ChannelMemberUpdateWithoutChannelmessagesInput>, ChannelMemberUncheckedUpdateWithoutChannelmessagesInput>
  }

  export type ChannelUpdateOneRequiredWithoutChannelmessagesNestedInput = {
    create?: XOR<ChannelCreateWithoutChannelmessagesInput, ChannelUncheckedCreateWithoutChannelmessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutChannelmessagesInput
    upsert?: ChannelUpsertWithoutChannelmessagesInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutChannelmessagesInput, ChannelUpdateWithoutChannelmessagesInput>, ChannelUncheckedUpdateWithoutChannelmessagesInput>
  }

  export type UserCreateNestedOneWithoutRoomMessageInput = {
    create?: XOR<UserCreateWithoutRoomMessageInput, UserUncheckedCreateWithoutRoomMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomMessageInput
    connect?: UserWhereUniqueInput
  }

  export type DMRoomCreateNestedOneWithoutRoomMessagesInput = {
    create?: XOR<DMRoomCreateWithoutRoomMessagesInput, DMRoomUncheckedCreateWithoutRoomMessagesInput>
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMessagesInput
    connect?: DMRoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoomMessageNestedInput = {
    create?: XOR<UserCreateWithoutRoomMessageInput, UserUncheckedCreateWithoutRoomMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomMessageInput
    upsert?: UserUpsertWithoutRoomMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomMessageInput, UserUpdateWithoutRoomMessageInput>, UserUncheckedUpdateWithoutRoomMessageInput>
  }

  export type DMRoomUpdateOneRequiredWithoutRoomMessagesNestedInput = {
    create?: XOR<DMRoomCreateWithoutRoomMessagesInput, DMRoomUncheckedCreateWithoutRoomMessagesInput>
    connectOrCreate?: DMRoomCreateOrConnectWithoutRoomMessagesInput
    upsert?: DMRoomUpsertWithoutRoomMessagesInput
    connect?: DMRoomWhereUniqueInput
    update?: XOR<XOR<DMRoomUpdateToOneWithWhereWithoutRoomMessagesInput, DMRoomUpdateWithoutRoomMessagesInput>, DMRoomUncheckedUpdateWithoutRoomMessagesInput>
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOpponentHistoriesInput = {
    create?: XOR<UserCreateWithoutOpponentHistoriesInput, UserUncheckedCreateWithoutOpponentHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpponentHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateOneRequiredWithoutOpponentHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutOpponentHistoriesInput, UserUncheckedCreateWithoutOpponentHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpponentHistoriesInput
    upsert?: UserUpsertWithoutOpponentHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpponentHistoriesInput, UserUpdateWithoutOpponentHistoriesInput>, UserUncheckedUpdateWithoutOpponentHistoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumNotifTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifType | EnumNotifTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotifTypeFilter<$PrismaModel> | $Enums.NotifType
  }

  export type NestedEnumNotifTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotifType | EnumNotifTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotifType[] | ListEnumNotifTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotifTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotifType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotifTypeFilter<$PrismaModel>
    _max?: NestedEnumNotifTypeFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutBlockedByInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedByInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
  }

  export type UserCreateWithoutBlockedInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
  }

  export type UserCreateWithoutChatByInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatByInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput>
  }

  export type UserCreateWithoutChatWithInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatWithInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatWithInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput>
  }

  export type FriendRequestCreateWithoutFromUserInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toUser: UserCreateNestedOneWithoutFriendRequestsReceivedInput
  }

  export type FriendRequestUncheckedCreateWithoutFromUserInput = {
    id?: string
    toUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutFromUserInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput>
  }

  export type FriendRequestCreateManyFromUserInputEnvelope = {
    data: FriendRequestCreateManyFromUserInput | FriendRequestCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutToUserInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutFriendRequestsSentInput
  }

  export type FriendRequestUncheckedCreateWithoutToUserInput = {
    id?: string
    fromUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutToUserInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput>
  }

  export type FriendRequestCreateManyToUserInputEnvelope = {
    data: FriendRequestCreateManyToUserInput | FriendRequestCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type ChannelMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutChannelMemberInput
    channelmessages?: ChannelMessageCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberUncheckedCreateWithoutUserInput = {
    id?: string
    channelId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberCreateOrConnectWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput
    create: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput>
  }

  export type ChannelMemberCreateManyUserInputEnvelope = {
    data: ChannelMemberCreateManyUserInput | ChannelMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutBannedUsersInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageCreateNestedManyWithoutReciverInput
    channelMember?: ChannelMemberCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutBannedUsersInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutReciverInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutBannedUsersInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput>
  }

  export type DMRoomCreateWithoutRoomMembersInput = {
    id?: string
    roomMessages?: UserMessageCreateNestedManyWithoutReciverInput
  }

  export type DMRoomUncheckedCreateWithoutRoomMembersInput = {
    id?: string
    roomMessages?: UserMessageUncheckedCreateNestedManyWithoutReciverInput
  }

  export type DMRoomCreateOrConnectWithoutRoomMembersInput = {
    where: DMRoomWhereUniqueInput
    create: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput>
  }

  export type UserMessageCreateWithoutAuthorInput = {
    id?: string
    content: string
    reciverName: string
    authorName: string
    createdAt?: Date | string
    reciver: DMRoomCreateNestedOneWithoutRoomMessagesInput
  }

  export type UserMessageUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    reciverName: string
    reciverID: string
    authorName: string
    createdAt?: Date | string
  }

  export type UserMessageCreateOrConnectWithoutAuthorInput = {
    where: UserMessageWhereUniqueInput
    create: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput>
  }

  export type UserMessageCreateManyAuthorInputEnvelope = {
    data: UserMessageCreateManyAuthorInput | UserMessageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type GameHistoryCreateWithoutUserInput = {
    id?: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opponent: UserCreateNestedOneWithoutOpponentHistoriesInput
  }

  export type GameHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    opponentId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameHistoryCreateOrConnectWithoutUserInput = {
    where: GameHistoryWhereUniqueInput
    create: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput>
  }

  export type GameHistoryCreateManyUserInputEnvelope = {
    data: GameHistoryCreateManyUserInput | GameHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameHistoryCreateWithoutOpponentInput = {
    id?: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GameHistoryUncheckedCreateWithoutOpponentInput = {
    id?: string
    userId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameHistoryCreateOrConnectWithoutOpponentInput = {
    where: GameHistoryWhereUniqueInput
    create: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput>
  }

  export type GameHistoryCreateManyOpponentInputEnvelope = {
    data: GameHistoryCreateManyOpponentInput | GameHistoryCreateManyOpponentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateManyWithWhereWithoutFriendOfInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFriendOfInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    avatarURL?: StringFilter<"User"> | string
    coalitionURL?: StringFilter<"User"> | string
    coalitionColor?: StringFilter<"User"> | string
    coalitionName?: StringFilter<"User"> | string
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    isInGame?: BoolFilter<"User"> | boolean
    hasTwoFA?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userGamesXp?: IntFilter<"User"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutFriendsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFriendsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateManyWithWhereWithoutFriendsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFriendsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserUpdateManyWithWhereWithoutBlockedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBlockedByInput>
  }

  export type UserUpsertWithWhereUniqueWithoutBlockedInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBlockedInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
  }

  export type UserUpdateManyWithWhereWithoutBlockedInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBlockedInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatByInput, UserUncheckedUpdateWithoutChatByInput>
    create: XOR<UserCreateWithoutChatByInput, UserUncheckedCreateWithoutChatByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatByInput, UserUncheckedUpdateWithoutChatByInput>
  }

  export type UserUpdateManyWithWhereWithoutChatByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatByInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatWithInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatWithInput, UserUncheckedUpdateWithoutChatWithInput>
    create: XOR<UserCreateWithoutChatWithInput, UserUncheckedCreateWithoutChatWithInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatWithInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatWithInput, UserUncheckedUpdateWithoutChatWithInput>
  }

  export type UserUpdateManyWithWhereWithoutChatWithInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatWithInput>
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutFromUserInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutFromUserInput, FriendRequestUncheckedUpdateWithoutFromUserInput>
    create: XOR<FriendRequestCreateWithoutFromUserInput, FriendRequestUncheckedCreateWithoutFromUserInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutFromUserInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutFromUserInput, FriendRequestUncheckedUpdateWithoutFromUserInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutFromUserInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutFromUserInput>
  }

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    OR?: FriendRequestScalarWhereInput[]
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    fromUserId?: StringFilter<"FriendRequest"> | string
    toUserId?: StringFilter<"FriendRequest"> | string
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutToUserInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutToUserInput, FriendRequestUncheckedUpdateWithoutToUserInput>
    create: XOR<FriendRequestCreateWithoutToUserInput, FriendRequestUncheckedCreateWithoutToUserInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutToUserInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutToUserInput, FriendRequestUncheckedUpdateWithoutToUserInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutToUserInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutToUserInput>
  }

  export type ChannelMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput
    update: XOR<ChannelMemberUpdateWithoutUserInput, ChannelMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelMemberCreateWithoutUserInput, ChannelMemberUncheckedCreateWithoutUserInput>
  }

  export type ChannelMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput
    data: XOR<ChannelMemberUpdateWithoutUserInput, ChannelMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChannelMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChannelMemberScalarWhereInput
    data: XOR<ChannelMemberUpdateManyMutationInput, ChannelMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelMemberScalarWhereInput = {
    AND?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
    OR?: ChannelMemberScalarWhereInput[]
    NOT?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[]
    id?: StringFilter<"ChannelMember"> | string
    channelId?: StringFilter<"ChannelMember"> | string
    userId?: StringFilter<"ChannelMember"> | string
    role?: EnumRoleFilter<"ChannelMember"> | $Enums.Role
    isMuted?: BoolFilter<"ChannelMember"> | boolean
    timeMuted?: DateTimeNullableFilter<"ChannelMember"> | Date | string | null
    createdAt?: DateTimeFilter<"ChannelMember"> | Date | string
  }

  export type ChannelUpsertWithWhereUniqueWithoutBannedUsersInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutBannedUsersInput, ChannelUncheckedUpdateWithoutBannedUsersInput>
    create: XOR<ChannelCreateWithoutBannedUsersInput, ChannelUncheckedCreateWithoutBannedUsersInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutBannedUsersInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutBannedUsersInput, ChannelUncheckedUpdateWithoutBannedUsersInput>
  }

  export type ChannelUpdateManyWithWhereWithoutBannedUsersInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutBannedUsersInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    type?: EnumTypeFilter<"Channel"> | $Enums.Type
    password?: StringNullableFilter<"Channel"> | string | null
  }

  export type DMRoomUpsertWithWhereUniqueWithoutRoomMembersInput = {
    where: DMRoomWhereUniqueInput
    update: XOR<DMRoomUpdateWithoutRoomMembersInput, DMRoomUncheckedUpdateWithoutRoomMembersInput>
    create: XOR<DMRoomCreateWithoutRoomMembersInput, DMRoomUncheckedCreateWithoutRoomMembersInput>
  }

  export type DMRoomUpdateWithWhereUniqueWithoutRoomMembersInput = {
    where: DMRoomWhereUniqueInput
    data: XOR<DMRoomUpdateWithoutRoomMembersInput, DMRoomUncheckedUpdateWithoutRoomMembersInput>
  }

  export type DMRoomUpdateManyWithWhereWithoutRoomMembersInput = {
    where: DMRoomScalarWhereInput
    data: XOR<DMRoomUpdateManyMutationInput, DMRoomUncheckedUpdateManyWithoutRoomMembersInput>
  }

  export type DMRoomScalarWhereInput = {
    AND?: DMRoomScalarWhereInput | DMRoomScalarWhereInput[]
    OR?: DMRoomScalarWhereInput[]
    NOT?: DMRoomScalarWhereInput | DMRoomScalarWhereInput[]
    id?: StringFilter<"DMRoom"> | string
  }

  export type UserMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: UserMessageWhereUniqueInput
    update: XOR<UserMessageUpdateWithoutAuthorInput, UserMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<UserMessageCreateWithoutAuthorInput, UserMessageUncheckedCreateWithoutAuthorInput>
  }

  export type UserMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: UserMessageWhereUniqueInput
    data: XOR<UserMessageUpdateWithoutAuthorInput, UserMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type UserMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: UserMessageScalarWhereInput
    data: XOR<UserMessageUpdateManyMutationInput, UserMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserMessageScalarWhereInput = {
    AND?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
    OR?: UserMessageScalarWhereInput[]
    NOT?: UserMessageScalarWhereInput | UserMessageScalarWhereInput[]
    id?: StringFilter<"UserMessage"> | string
    content?: StringFilter<"UserMessage"> | string
    reciverName?: StringFilter<"UserMessage"> | string
    reciverID?: StringFilter<"UserMessage"> | string
    authorID?: StringFilter<"UserMessage"> | string
    authorName?: StringFilter<"UserMessage"> | string
    createdAt?: DateTimeFilter<"UserMessage"> | Date | string
  }

  export type GameHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: GameHistoryWhereUniqueInput
    update: XOR<GameHistoryUpdateWithoutUserInput, GameHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<GameHistoryCreateWithoutUserInput, GameHistoryUncheckedCreateWithoutUserInput>
  }

  export type GameHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: GameHistoryWhereUniqueInput
    data: XOR<GameHistoryUpdateWithoutUserInput, GameHistoryUncheckedUpdateWithoutUserInput>
  }

  export type GameHistoryUpdateManyWithWhereWithoutUserInput = {
    where: GameHistoryScalarWhereInput
    data: XOR<GameHistoryUpdateManyMutationInput, GameHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type GameHistoryScalarWhereInput = {
    AND?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
    OR?: GameHistoryScalarWhereInput[]
    NOT?: GameHistoryScalarWhereInput | GameHistoryScalarWhereInput[]
    id?: StringFilter<"GameHistory"> | string
    userId?: StringFilter<"GameHistory"> | string
    opponentId?: StringFilter<"GameHistory"> | string
    status?: StringFilter<"GameHistory"> | string
    userScore?: IntFilter<"GameHistory"> | number
    opponentScore?: IntFilter<"GameHistory"> | number
    rounds?: IntFilter<"GameHistory"> | number
    matches?: IntFilter<"GameHistory"> | number
    xp?: IntFilter<"GameHistory"> | number
    createdAt?: DateTimeFilter<"GameHistory"> | Date | string
    updatedAt?: DateTimeFilter<"GameHistory"> | Date | string
  }

  export type GameHistoryUpsertWithWhereUniqueWithoutOpponentInput = {
    where: GameHistoryWhereUniqueInput
    update: XOR<GameHistoryUpdateWithoutOpponentInput, GameHistoryUncheckedUpdateWithoutOpponentInput>
    create: XOR<GameHistoryCreateWithoutOpponentInput, GameHistoryUncheckedCreateWithoutOpponentInput>
  }

  export type GameHistoryUpdateWithWhereUniqueWithoutOpponentInput = {
    where: GameHistoryWhereUniqueInput
    data: XOR<GameHistoryUpdateWithoutOpponentInput, GameHistoryUncheckedUpdateWithoutOpponentInput>
  }

  export type GameHistoryUpdateManyWithWhereWithoutOpponentInput = {
    where: GameHistoryScalarWhereInput
    data: XOR<GameHistoryUpdateManyMutationInput, GameHistoryUncheckedUpdateManyWithoutOpponentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    senderId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotifTypeFilter<"Notification"> | $Enums.NotifType
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type UserCreateWithoutFriendRequestsSentInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendRequestsSentInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendRequestsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendRequestsSentInput, UserUncheckedCreateWithoutFriendRequestsSentInput>
  }

  export type UserCreateWithoutFriendRequestsReceivedInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendRequestsReceivedInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendRequestsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendRequestsReceivedInput, UserUncheckedCreateWithoutFriendRequestsReceivedInput>
  }

  export type UserUpsertWithoutFriendRequestsSentInput = {
    update: XOR<UserUpdateWithoutFriendRequestsSentInput, UserUncheckedUpdateWithoutFriendRequestsSentInput>
    create: XOR<UserCreateWithoutFriendRequestsSentInput, UserUncheckedCreateWithoutFriendRequestsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendRequestsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendRequestsSentInput, UserUncheckedUpdateWithoutFriendRequestsSentInput>
  }

  export type UserUpdateWithoutFriendRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendRequestsReceivedInput = {
    update: XOR<UserUpdateWithoutFriendRequestsReceivedInput, UserUncheckedUpdateWithoutFriendRequestsReceivedInput>
    create: XOR<UserCreateWithoutFriendRequestsReceivedInput, UserUncheckedCreateWithoutFriendRequestsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendRequestsReceivedInput, UserUncheckedUpdateWithoutFriendRequestsReceivedInput>
  }

  export type UserUpdateWithoutFriendRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelMessageCreateWithoutReciverInput = {
    id?: string
    content: string
    authorName: string
    createdAt?: Date | string
    author: ChannelMemberCreateNestedOneWithoutChannelmessagesInput
  }

  export type ChannelMessageUncheckedCreateWithoutReciverInput = {
    id?: string
    content: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMessageCreateOrConnectWithoutReciverInput = {
    where: ChannelMessageWhereUniqueInput
    create: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput>
  }

  export type ChannelMessageCreateManyReciverInputEnvelope = {
    data: ChannelMessageCreateManyReciverInput | ChannelMessageCreateManyReciverInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBanedFromInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBanedFromInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBanedFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput>
  }

  export type ChannelMemberCreateWithoutChannelInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChannelMemberInput
    channelmessages?: ChannelMessageCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberUncheckedCreateWithoutChannelInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ChannelMemberCreateOrConnectWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput
    create: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput>
  }

  export type ChannelMemberCreateManyChannelInputEnvelope = {
    data: ChannelMemberCreateManyChannelInput | ChannelMemberCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ChannelMessageUpsertWithWhereUniqueWithoutReciverInput = {
    where: ChannelMessageWhereUniqueInput
    update: XOR<ChannelMessageUpdateWithoutReciverInput, ChannelMessageUncheckedUpdateWithoutReciverInput>
    create: XOR<ChannelMessageCreateWithoutReciverInput, ChannelMessageUncheckedCreateWithoutReciverInput>
  }

  export type ChannelMessageUpdateWithWhereUniqueWithoutReciverInput = {
    where: ChannelMessageWhereUniqueInput
    data: XOR<ChannelMessageUpdateWithoutReciverInput, ChannelMessageUncheckedUpdateWithoutReciverInput>
  }

  export type ChannelMessageUpdateManyWithWhereWithoutReciverInput = {
    where: ChannelMessageScalarWhereInput
    data: XOR<ChannelMessageUpdateManyMutationInput, ChannelMessageUncheckedUpdateManyWithoutReciverInput>
  }

  export type ChannelMessageScalarWhereInput = {
    AND?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
    OR?: ChannelMessageScalarWhereInput[]
    NOT?: ChannelMessageScalarWhereInput | ChannelMessageScalarWhereInput[]
    id?: StringFilter<"ChannelMessage"> | string
    content?: StringFilter<"ChannelMessage"> | string
    reciverID?: StringFilter<"ChannelMessage"> | string
    authorID?: StringFilter<"ChannelMessage"> | string
    authorName?: StringFilter<"ChannelMessage"> | string
    createdAt?: DateTimeFilter<"ChannelMessage"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutBanedFromInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBanedFromInput, UserUncheckedUpdateWithoutBanedFromInput>
    create: XOR<UserCreateWithoutBanedFromInput, UserUncheckedCreateWithoutBanedFromInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBanedFromInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBanedFromInput, UserUncheckedUpdateWithoutBanedFromInput>
  }

  export type UserUpdateManyWithWhereWithoutBanedFromInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBanedFromInput>
  }

  export type ChannelMemberUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput
    update: XOR<ChannelMemberUpdateWithoutChannelInput, ChannelMemberUncheckedUpdateWithoutChannelInput>
    create: XOR<ChannelMemberCreateWithoutChannelInput, ChannelMemberUncheckedCreateWithoutChannelInput>
  }

  export type ChannelMemberUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput
    data: XOR<ChannelMemberUpdateWithoutChannelInput, ChannelMemberUncheckedUpdateWithoutChannelInput>
  }

  export type ChannelMemberUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelMemberScalarWhereInput
    data: XOR<ChannelMemberUpdateManyMutationInput, ChannelMemberUncheckedUpdateManyWithoutChannelInput>
  }

  export type UserCreateWithoutRoomMemberInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomMemberInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput>
  }

  export type UserMessageCreateWithoutReciverInput = {
    id?: string
    content: string
    reciverName: string
    authorName: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRoomMessageInput
  }

  export type UserMessageUncheckedCreateWithoutReciverInput = {
    id?: string
    content: string
    reciverName: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type UserMessageCreateOrConnectWithoutReciverInput = {
    where: UserMessageWhereUniqueInput
    create: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput>
  }

  export type UserMessageCreateManyReciverInputEnvelope = {
    data: UserMessageCreateManyReciverInput | UserMessageCreateManyReciverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoomMemberInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoomMemberInput, UserUncheckedUpdateWithoutRoomMemberInput>
    create: XOR<UserCreateWithoutRoomMemberInput, UserUncheckedCreateWithoutRoomMemberInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoomMemberInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoomMemberInput, UserUncheckedUpdateWithoutRoomMemberInput>
  }

  export type UserUpdateManyWithWhereWithoutRoomMemberInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoomMemberInput>
  }

  export type UserMessageUpsertWithWhereUniqueWithoutReciverInput = {
    where: UserMessageWhereUniqueInput
    update: XOR<UserMessageUpdateWithoutReciverInput, UserMessageUncheckedUpdateWithoutReciverInput>
    create: XOR<UserMessageCreateWithoutReciverInput, UserMessageUncheckedCreateWithoutReciverInput>
  }

  export type UserMessageUpdateWithWhereUniqueWithoutReciverInput = {
    where: UserMessageWhereUniqueInput
    data: XOR<UserMessageUpdateWithoutReciverInput, UserMessageUncheckedUpdateWithoutReciverInput>
  }

  export type UserMessageUpdateManyWithWhereWithoutReciverInput = {
    where: UserMessageScalarWhereInput
    data: XOR<UserMessageUpdateManyMutationInput, UserMessageUncheckedUpdateManyWithoutReciverInput>
  }

  export type ChannelCreateWithoutChannelMemberInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageCreateNestedManyWithoutReciverInput
    bannedUsers?: UserCreateNestedManyWithoutBanedFromInput
  }

  export type ChannelUncheckedCreateWithoutChannelMemberInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    channelmessages?: ChannelMessageUncheckedCreateNestedManyWithoutReciverInput
    bannedUsers?: UserUncheckedCreateNestedManyWithoutBanedFromInput
  }

  export type ChannelCreateOrConnectWithoutChannelMemberInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutChannelMemberInput, ChannelUncheckedCreateWithoutChannelMemberInput>
  }

  export type UserCreateWithoutChannelMemberInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelMemberInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelMemberInput, UserUncheckedCreateWithoutChannelMemberInput>
  }

  export type ChannelMessageCreateWithoutAuthorInput = {
    id?: string
    content: string
    authorName: string
    createdAt?: Date | string
    reciver: ChannelCreateNestedOneWithoutChannelmessagesInput
  }

  export type ChannelMessageUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    reciverID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMessageCreateOrConnectWithoutAuthorInput = {
    where: ChannelMessageWhereUniqueInput
    create: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChannelMessageCreateManyAuthorInputEnvelope = {
    data: ChannelMessageCreateManyAuthorInput | ChannelMessageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ChannelUpsertWithoutChannelMemberInput = {
    update: XOR<ChannelUpdateWithoutChannelMemberInput, ChannelUncheckedUpdateWithoutChannelMemberInput>
    create: XOR<ChannelCreateWithoutChannelMemberInput, ChannelUncheckedCreateWithoutChannelMemberInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutChannelMemberInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutChannelMemberInput, ChannelUncheckedUpdateWithoutChannelMemberInput>
  }

  export type ChannelUpdateWithoutChannelMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUpdateManyWithoutReciverNestedInput
    bannedUsers?: UserUpdateManyWithoutBanedFromNestedInput
  }

  export type ChannelUncheckedUpdateWithoutChannelMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutReciverNestedInput
    bannedUsers?: UserUncheckedUpdateManyWithoutBanedFromNestedInput
  }

  export type UserUpsertWithoutChannelMemberInput = {
    update: XOR<UserUpdateWithoutChannelMemberInput, UserUncheckedUpdateWithoutChannelMemberInput>
    create: XOR<UserCreateWithoutChannelMemberInput, UserUncheckedCreateWithoutChannelMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelMemberInput, UserUncheckedUpdateWithoutChannelMemberInput>
  }

  export type UserUpdateWithoutChannelMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ChannelMessageWhereUniqueInput
    update: XOR<ChannelMessageUpdateWithoutAuthorInput, ChannelMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<ChannelMessageCreateWithoutAuthorInput, ChannelMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChannelMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ChannelMessageWhereUniqueInput
    data: XOR<ChannelMessageUpdateWithoutAuthorInput, ChannelMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type ChannelMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: ChannelMessageScalarWhereInput
    data: XOR<ChannelMessageUpdateManyMutationInput, ChannelMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ChannelMemberCreateWithoutChannelmessagesInput = {
    id?: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutChannelMemberInput
    user: UserCreateNestedOneWithoutChannelMemberInput
  }

  export type ChannelMemberUncheckedCreateWithoutChannelmessagesInput = {
    id?: string
    channelId: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
  }

  export type ChannelMemberCreateOrConnectWithoutChannelmessagesInput = {
    where: ChannelMemberWhereUniqueInput
    create: XOR<ChannelMemberCreateWithoutChannelmessagesInput, ChannelMemberUncheckedCreateWithoutChannelmessagesInput>
  }

  export type ChannelCreateWithoutChannelmessagesInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    bannedUsers?: UserCreateNestedManyWithoutBanedFromInput
    channelMember?: ChannelMemberCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutChannelmessagesInput = {
    id?: string
    name: string
    type?: $Enums.Type
    password?: string | null
    bannedUsers?: UserUncheckedCreateNestedManyWithoutBanedFromInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutChannelmessagesInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutChannelmessagesInput, ChannelUncheckedCreateWithoutChannelmessagesInput>
  }

  export type ChannelMemberUpsertWithoutChannelmessagesInput = {
    update: XOR<ChannelMemberUpdateWithoutChannelmessagesInput, ChannelMemberUncheckedUpdateWithoutChannelmessagesInput>
    create: XOR<ChannelMemberCreateWithoutChannelmessagesInput, ChannelMemberUncheckedCreateWithoutChannelmessagesInput>
    where?: ChannelMemberWhereInput
  }

  export type ChannelMemberUpdateToOneWithWhereWithoutChannelmessagesInput = {
    where?: ChannelMemberWhereInput
    data: XOR<ChannelMemberUpdateWithoutChannelmessagesInput, ChannelMemberUncheckedUpdateWithoutChannelmessagesInput>
  }

  export type ChannelMemberUpdateWithoutChannelmessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutChannelMemberNestedInput
    user?: UserUpdateOneRequiredWithoutChannelMemberNestedInput
  }

  export type ChannelMemberUncheckedUpdateWithoutChannelmessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpsertWithoutChannelmessagesInput = {
    update: XOR<ChannelUpdateWithoutChannelmessagesInput, ChannelUncheckedUpdateWithoutChannelmessagesInput>
    create: XOR<ChannelCreateWithoutChannelmessagesInput, ChannelUncheckedCreateWithoutChannelmessagesInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutChannelmessagesInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutChannelmessagesInput, ChannelUncheckedUpdateWithoutChannelmessagesInput>
  }

  export type ChannelUpdateWithoutChannelmessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bannedUsers?: UserUpdateManyWithoutBanedFromNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutChannelmessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bannedUsers?: UserUncheckedUpdateManyWithoutBanedFromNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutRoomMessageInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomMessageInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomMessageInput, UserUncheckedCreateWithoutRoomMessageInput>
  }

  export type DMRoomCreateWithoutRoomMessagesInput = {
    id?: string
    roomMembers?: UserCreateNestedManyWithoutRoomMemberInput
  }

  export type DMRoomUncheckedCreateWithoutRoomMessagesInput = {
    id?: string
    roomMembers?: UserUncheckedCreateNestedManyWithoutRoomMemberInput
  }

  export type DMRoomCreateOrConnectWithoutRoomMessagesInput = {
    where: DMRoomWhereUniqueInput
    create: XOR<DMRoomCreateWithoutRoomMessagesInput, DMRoomUncheckedCreateWithoutRoomMessagesInput>
  }

  export type UserUpsertWithoutRoomMessageInput = {
    update: XOR<UserUpdateWithoutRoomMessageInput, UserUncheckedUpdateWithoutRoomMessageInput>
    create: XOR<UserCreateWithoutRoomMessageInput, UserUncheckedCreateWithoutRoomMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomMessageInput, UserUncheckedUpdateWithoutRoomMessageInput>
  }

  export type UserUpdateWithoutRoomMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DMRoomUpsertWithoutRoomMessagesInput = {
    update: XOR<DMRoomUpdateWithoutRoomMessagesInput, DMRoomUncheckedUpdateWithoutRoomMessagesInput>
    create: XOR<DMRoomCreateWithoutRoomMessagesInput, DMRoomUncheckedCreateWithoutRoomMessagesInput>
    where?: DMRoomWhereInput
  }

  export type DMRoomUpdateToOneWithWhereWithoutRoomMessagesInput = {
    where?: DMRoomWhereInput
    data: XOR<DMRoomUpdateWithoutRoomMessagesInput, DMRoomUncheckedUpdateWithoutRoomMessagesInput>
  }

  export type DMRoomUpdateWithoutRoomMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMembers?: UserUpdateManyWithoutRoomMemberNestedInput
  }

  export type DMRoomUncheckedUpdateWithoutRoomMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMembers?: UserUncheckedUpdateManyWithoutRoomMemberNestedInput
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    opponentHistories?: GameHistoryCreateNestedManyWithoutOpponentInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    opponentHistories?: GameHistoryUncheckedCreateNestedManyWithoutOpponentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type UserCreateWithoutOpponentHistoriesInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserCreateNestedManyWithoutFriendOfInput
    friendOf?: UserCreateNestedManyWithoutFriendsInput
    blocked?: UserCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserCreateNestedManyWithoutBlockedInput
    chatWith?: UserCreateNestedManyWithoutChatByInput
    chatBy?: UserCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberCreateNestedManyWithoutUserInput
    banedFrom?: ChannelCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageCreateNestedManyWithoutAuthorInput
    games?: GameHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOpponentHistoriesInput = {
    id?: string
    username: string
    email: string
    fullname: string
    avatarURL?: string
    coalitionURL?: string
    coalitionColor?: string
    coalitionName?: string
    twoFactorEnabled?: boolean
    twoFactorSecret?: string | null
    isOnline?: boolean
    isInGame?: boolean
    hasTwoFA?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userGamesXp?: number
    friends?: UserUncheckedCreateNestedManyWithoutFriendOfInput
    friendOf?: UserUncheckedCreateNestedManyWithoutFriendsInput
    blocked?: UserUncheckedCreateNestedManyWithoutBlockedByInput
    blockedBy?: UserUncheckedCreateNestedManyWithoutBlockedInput
    chatWith?: UserUncheckedCreateNestedManyWithoutChatByInput
    chatBy?: UserUncheckedCreateNestedManyWithoutChatWithInput
    friendRequestsSent?: FriendRequestUncheckedCreateNestedManyWithoutFromUserInput
    friendRequestsReceived?: FriendRequestUncheckedCreateNestedManyWithoutToUserInput
    channelMember?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput
    banedFrom?: ChannelUncheckedCreateNestedManyWithoutBannedUsersInput
    roomMember?: DMRoomUncheckedCreateNestedManyWithoutRoomMembersInput
    roomMessage?: UserMessageUncheckedCreateNestedManyWithoutAuthorInput
    games?: GameHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOpponentHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpponentHistoriesInput, UserUncheckedCreateWithoutOpponentHistoriesInput>
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOpponentHistoriesInput = {
    update: XOR<UserUpdateWithoutOpponentHistoriesInput, UserUncheckedUpdateWithoutOpponentHistoriesInput>
    create: XOR<UserCreateWithoutOpponentHistoriesInput, UserUncheckedCreateWithoutOpponentHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpponentHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpponentHistoriesInput, UserUncheckedUpdateWithoutOpponentHistoriesInput>
  }

  export type UserUpdateWithoutOpponentHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOpponentHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendRequestCreateManyFromUserInput = {
    id?: string
    toUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestCreateManyToUserInput = {
    id?: string
    fromUserId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelMemberCreateManyUserInput = {
    id?: string
    channelId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
  }

  export type UserMessageCreateManyAuthorInput = {
    id?: string
    content: string
    reciverName: string
    reciverID: string
    authorName: string
    createdAt?: Date | string
  }

  export type GameHistoryCreateManyUserInput = {
    id?: string
    opponentId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameHistoryCreateManyOpponentInput = {
    id?: string
    userId: string
    status: string
    userScore: number
    opponentScore: number
    rounds: number
    matches: number
    xp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    senderId?: string | null
    type: $Enums.NotifType
    title: string
    description: string
    read?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutChatByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutChatWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type FriendRequestUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutChannelMemberNestedInput
    channelmessages?: ChannelMessageUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpdateWithoutBannedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUpdateManyWithoutReciverNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutBannedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutReciverNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutBannedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DMRoomUpdateWithoutRoomMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMessages?: UserMessageUpdateManyWithoutReciverNestedInput
  }

  export type DMRoomUncheckedUpdateWithoutRoomMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomMessages?: UserMessageUncheckedUpdateManyWithoutReciverNestedInput
  }

  export type DMRoomUncheckedUpdateManyWithoutRoomMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserMessageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reciver?: DMRoomUpdateOneRequiredWithoutRoomMessagesNestedInput
  }

  export type UserMessageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: UserUpdateOneRequiredWithoutOpponentHistoriesNestedInput
  }

  export type GameHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameHistoryUncheckedUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameHistoryUncheckedUpdateManyWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userScore?: IntFieldUpdateOperationsInput | number
    opponentScore?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotifTypeFieldUpdateOperationsInput | $Enums.NotifType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageCreateManyReciverInput = {
    id?: string
    content: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMemberCreateManyChannelInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    isMuted?: boolean
    timeMuted?: Date | string | null
    createdAt?: Date | string
  }

  export type ChannelMessageUpdateWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ChannelMemberUpdateOneRequiredWithoutChannelmessagesNestedInput
  }

  export type ChannelMessageUncheckedUpdateWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageUncheckedUpdateManyWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutBanedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    roomMember?: DMRoomUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBanedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    roomMember?: DMRoomUncheckedUpdateManyWithoutRoomMembersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBanedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type ChannelMemberUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelMemberNestedInput
    channelmessages?: ChannelMessageUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelmessages?: ChannelMessageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ChannelMemberUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isMuted?: BoolFieldUpdateOperationsInput | boolean
    timeMuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageCreateManyReciverInput = {
    id?: string
    content: string
    reciverName: string
    authorID: string
    authorName: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoomMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUpdateManyWithoutFriendsNestedInput
    blocked?: UserUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUpdateManyWithoutChatByNestedInput
    chatBy?: UserUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUpdateManyWithoutBannedUsersNestedInput
    roomMessage?: UserMessageUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
    friends?: UserUncheckedUpdateManyWithoutFriendOfNestedInput
    friendOf?: UserUncheckedUpdateManyWithoutFriendsNestedInput
    blocked?: UserUncheckedUpdateManyWithoutBlockedByNestedInput
    blockedBy?: UserUncheckedUpdateManyWithoutBlockedNestedInput
    chatWith?: UserUncheckedUpdateManyWithoutChatByNestedInput
    chatBy?: UserUncheckedUpdateManyWithoutChatWithNestedInput
    friendRequestsSent?: FriendRequestUncheckedUpdateManyWithoutFromUserNestedInput
    friendRequestsReceived?: FriendRequestUncheckedUpdateManyWithoutToUserNestedInput
    channelMember?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput
    banedFrom?: ChannelUncheckedUpdateManyWithoutBannedUsersNestedInput
    roomMessage?: UserMessageUncheckedUpdateManyWithoutAuthorNestedInput
    games?: GameHistoryUncheckedUpdateManyWithoutUserNestedInput
    opponentHistories?: GameHistoryUncheckedUpdateManyWithoutOpponentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoomMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    avatarURL?: StringFieldUpdateOperationsInput | string
    coalitionURL?: StringFieldUpdateOperationsInput | string
    coalitionColor?: StringFieldUpdateOperationsInput | string
    coalitionName?: StringFieldUpdateOperationsInput | string
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInGame?: BoolFieldUpdateOperationsInput | boolean
    hasTwoFA?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGamesXp?: IntFieldUpdateOperationsInput | number
  }

  export type UserMessageUpdateWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRoomMessageNestedInput
  }

  export type UserMessageUncheckedUpdateWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateManyWithoutReciverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageCreateManyAuthorInput = {
    id?: string
    content: string
    reciverID: string
    authorName: string
    createdAt?: Date | string
  }

  export type ChannelMessageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reciver?: ChannelUpdateOneRequiredWithoutChannelmessagesNestedInput
  }

  export type ChannelMessageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reciverID?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelCountOutputTypeDefaultArgs instead
     */
    export type ChannelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DMRoomCountOutputTypeDefaultArgs instead
     */
    export type DMRoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DMRoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelMemberCountOutputTypeDefaultArgs instead
     */
    export type ChannelMemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelMemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendRequestDefaultArgs instead
     */
    export type FriendRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FriendRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelDefaultArgs instead
     */
    export type ChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DMRoomDefaultArgs instead
     */
    export type DMRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DMRoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelMemberDefaultArgs instead
     */
    export type ChannelMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelMessageDefaultArgs instead
     */
    export type ChannelMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserMessageDefaultArgs instead
     */
    export type UserMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameHistoryDefaultArgs instead
     */
    export type GameHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}