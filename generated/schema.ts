// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Orderfill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Orderfill entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Orderfill entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Orderfill", id.toString(), this);
  }

  static load(id: string): Orderfill | null {
    return store.get("Orderfill", id) as Orderfill | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get filledAmount(): BigInt {
    let value = this.get("filledAmount");
    return value.toBigInt();
  }

  set filledAmount(value: BigInt) {
    this.set("filledAmount", Value.fromBigInt(value));
  }

  get taker(): string | null {
    let value = this.get("taker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set taker(value: string | null) {
    if (value === null) {
      this.unset("taker");
    } else {
      this.set("taker", Value.fromString(value as string));
    }
  }

  get maker(): string | null {
    let value = this.get("maker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set maker(value: string | null) {
    if (value === null) {
      this.unset("maker");
    } else {
      this.set("maker", Value.fromString(value as string));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blocknumber(): BigInt {
    let value = this.get("blocknumber");
    return value.toBigInt();
  }

  set blocknumber(value: BigInt) {
    this.set("blocknumber", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tradesTxCount(): BigInt {
    let value = this.get("tradesTxCount");
    return value.toBigInt();
  }

  set tradesTxCount(value: BigInt) {
    this.set("tradesTxCount", Value.fromBigInt(value));
  }

  get takerTrades(): Array<string> {
    let value = this.get("takerTrades");
    return value.toStringArray();
  }

  set takerTrades(value: Array<string>) {
    this.set("takerTrades", Value.fromStringArray(value));
  }

  get makerTrades(): Array<string> {
    let value = this.get("makerTrades");
    return value.toStringArray();
  }

  set makerTrades(value: Array<string>) {
    this.set("makerTrades", Value.fromStringArray(value));
  }
}
