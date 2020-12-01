import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, FillOrder } from "../generated/Contract/Contract"
import {Orderfill, Taker} from "../generated/schema"

export function handleFillOrder(event: FillOrder): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  let entity = new Orderfill(event.transaction.hash.toHex())

  // BigInt and BigDecimal math are supported
  // @ts-ignore
  entity.filled_amount = event.params.filledAmount
  // Entity fields can be set based on event parameters
  entity.taker = event.params.userAddr
  entity.maker = event.params.receiverAddr
  entity.timestamp=event.block.timestamp
  entity.blocknumber=event.block.number
  // Entities can be written to the store with `.save()`
  entity.save()

  let entityT = Taker.load(event.transaction.from.toHex())
  if (entityT == null) {
    entityT = new Taker(event.transaction.from.toHex())
    entityT.taker_tx_count=BigInt.fromI32(0)
  }
  entityT.taker_tx_count = entityT.taker_tx_count + BigInt.fromI32(1)
  entityT.save()




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
}

