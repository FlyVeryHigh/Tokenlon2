import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, FillOrder } from "../generated/Contract/Contract"
import {Orderfill, User} from "../generated/schema"

export function handleFillOrder(event: FillOrder): void {

  let entityT = User.load(event.params.userAddr.toHex())
  if (entityT == null) {
    entityT = new User(event.transaction.from.toHex())
    entityT.tradesTxCount = BigInt.fromI32(0)
  }
  entityT.tradesTxCount = entityT.tradesTxCount + BigInt.fromI32(1)
  entityT.save()

  let entityM = User.load(event.params.userAddr.toHex())
  if (entityM == null) {
    entityM = new User(event.transaction.from.toHex())
    entityM.tradesTxCount = BigInt.fromI32(0)
  }
  entityM.tradesTxCount = entityM.tradesTxCount + BigInt.fromI32(1)
  entityM.save()


  let entity = new Orderfill(event.transaction.hash.toHex())

  // BigInt and BigDecimal math are supported
  // @ts-ignore
  entity.filledAmount = event.params.filledAmount
  // Entity fields can be set based on event parameters
  entity.taker = event.params.userAddr.toHex()
  entity.maker = event.params.receiverAddr.toHex()
  entity.timestamp = event.block.timestamp
  entity.blocknumber = event.block.number
  // Entities can be written to the store with `.save()`
  entity.save()
}





  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.isMarketMakerProxy(...)
  // - contract.version(...)
  // - contract.operator(...)
  // - contract.transactions(...)
  // - contract.isEnabled(...)
  // - contract.owner(...)
  // - contract.EIP712_DOMAIN_HASH(...)
  // - contract.assertTransaction(...)

