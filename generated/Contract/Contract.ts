// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FillOrder extends ethereum.Event {
  get params(): FillOrder__Params {
    return new FillOrder__Params(this);
  }
}

export class FillOrder__Params {
  _event: FillOrder;

  constructor(event: FillOrder) {
    this._event = event;
  }

  get executeTxHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get userAddr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiverAddr(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get filledAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get acutalMakerAssetAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Contract__assertTransactionResultOrderStruct extends ethereum.Tuple {
  get makerAddress(): Address {
    return this[0].toAddress();
  }

  get takerAddress(): Address {
    return this[1].toAddress();
  }

  get feeRecipientAddress(): Address {
    return this[2].toAddress();
  }

  get senderAddress(): Address {
    return this[3].toAddress();
  }

  get makerAssetAmount(): BigInt {
    return this[4].toBigInt();
  }

  get takerAssetAmount(): BigInt {
    return this[5].toBigInt();
  }

  get makerFee(): BigInt {
    return this[6].toBigInt();
  }

  get takerFee(): BigInt {
    return this[7].toBigInt();
  }

  get expirationTimeSeconds(): BigInt {
    return this[8].toBigInt();
  }

  get salt(): BigInt {
    return this[9].toBigInt();
  }

  get makerAssetData(): Bytes {
    return this[10].toBytes();
  }

  get takerAssetData(): Bytes {
    return this[11].toBytes();
  }
}

export class Contract__assertTransactionResult {
  value0: Contract__assertTransactionResultOrderStruct;
  value1: Address;
  value2: Address;
  value3: i32;
  value4: Address;
  value5: Address;
  value6: Bytes;

  constructor(
    value0: Contract__assertTransactionResultOrderStruct,
    value1: Address,
    value2: Address,
    value3: i32,
    value4: Address,
    value5: Address,
    value6: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromFixedBytes(this.value6));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  isMarketMakerProxy(param0: Address): boolean {
    let result = super.call(
      "isMarketMakerProxy",
      "isMarketMakerProxy(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_isMarketMakerProxy(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isMarketMakerProxy",
      "isMarketMakerProxy(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  operator(): Address {
    let result = super.call("operator", "operator():(address)", []);

    return result[0].toAddress();
  }

  try_operator(): ethereum.CallResult<Address> {
    let result = super.tryCall("operator", "operator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transactions(param0: Bytes): Address {
    let result = super.call("transactions", "transactions(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_transactions(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "transactions",
      "transactions(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isEnabled(): boolean {
    let result = super.call("isEnabled", "isEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_isEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isEnabled", "isEnabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  EIP712_DOMAIN_HASH(): Bytes {
    let result = super.call(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_DOMAIN_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  assertTransaction(
    userSalt: BigInt,
    data: Bytes,
    userSignature: Bytes
  ): Contract__assertTransactionResult {
    let result = super.call(
      "assertTransaction",
      "assertTransaction(uint256,bytes,bytes):((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),address,address,uint16,address,address,bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(userSalt),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromBytes(userSignature)
      ]
    );

    return new Contract__assertTransactionResult(
      result[0].toTuple() as Contract__assertTransactionResultOrderStruct,
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toI32(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBytes()
    ) as Contract__assertTransactionResult;
  }

  try_assertTransaction(
    userSalt: BigInt,
    data: Bytes,
    userSignature: Bytes
  ): ethereum.CallResult<Contract__assertTransactionResult> {
    let result = super.tryCall(
      "assertTransaction",
      "assertTransaction(uint256,bytes,bytes):((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),address,address,uint16,address,address,bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(userSalt),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromBytes(userSignature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__assertTransactionResult(
        value[0].toTuple() as Contract__assertTransactionResultOrderStruct,
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toI32(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBytes()
      ) as Contract__assertTransactionResult
    );
  }
}

export class FillOrderWithETHCall extends ethereum.Call {
  get inputs(): FillOrderWithETHCall__Inputs {
    return new FillOrderWithETHCall__Inputs(this);
  }

  get outputs(): FillOrderWithETHCall__Outputs {
    return new FillOrderWithETHCall__Outputs(this);
  }
}

export class FillOrderWithETHCall__Inputs {
  _call: FillOrderWithETHCall;

  constructor(call: FillOrderWithETHCall) {
    this._call = call;
  }

  get userSalt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get userSignature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class FillOrderWithETHCall__Outputs {
  _call: FillOrderWithETHCall;

  constructor(call: FillOrderWithETHCall) {
    this._call = call;
  }
}

export class SetEnabledCall extends ethereum.Call {
  get inputs(): SetEnabledCall__Inputs {
    return new SetEnabledCall__Inputs(this);
  }

  get outputs(): SetEnabledCall__Outputs {
    return new SetEnabledCall__Outputs(this);
  }
}

export class SetEnabledCall__Inputs {
  _call: SetEnabledCall;

  constructor(call: SetEnabledCall) {
    this._call = call;
  }

  get _enable(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetEnabledCall__Outputs {
  _call: SetEnabledCall;

  constructor(call: SetEnabledCall) {
    this._call = call;
  }
}

export class SetProxyCall extends ethereum.Call {
  get inputs(): SetProxyCall__Inputs {
    return new SetProxyCall__Inputs(this);
  }

  get outputs(): SetProxyCall__Outputs {
    return new SetProxyCall__Outputs(this);
  }
}

export class SetProxyCall__Inputs {
  _call: SetProxyCall;

  constructor(call: SetProxyCall) {
    this._call = call;
  }

  get _exchange(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _userProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _weth(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetProxyCall__Outputs {
  _call: SetProxyCall;

  constructor(call: SetProxyCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get newOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class FillOrderWithTokenCall extends ethereum.Call {
  get inputs(): FillOrderWithTokenCall__Inputs {
    return new FillOrderWithTokenCall__Inputs(this);
  }

  get outputs(): FillOrderWithTokenCall__Outputs {
    return new FillOrderWithTokenCall__Outputs(this);
  }
}

export class FillOrderWithTokenCall__Inputs {
  _call: FillOrderWithTokenCall;

  constructor(call: FillOrderWithTokenCall) {
    this._call = call;
  }

  get userSalt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get userSignature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class FillOrderWithTokenCall__Outputs {
  _call: FillOrderWithTokenCall;

  constructor(call: FillOrderWithTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class RegisterMMPCall extends ethereum.Call {
  get inputs(): RegisterMMPCall__Inputs {
    return new RegisterMMPCall__Inputs(this);
  }

  get outputs(): RegisterMMPCall__Outputs {
    return new RegisterMMPCall__Outputs(this);
  }
}

export class RegisterMMPCall__Inputs {
  _call: RegisterMMPCall;

  constructor(call: RegisterMMPCall) {
    this._call = call;
  }

  get _marketMakerProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _add(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class RegisterMMPCall__Outputs {
  _call: RegisterMMPCall;

  constructor(call: RegisterMMPCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
