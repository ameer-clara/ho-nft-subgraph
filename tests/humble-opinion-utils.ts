import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { NewReview } from "../generated/HumbleOpinion/HumbleOpinion"

export function createNewReviewEvent(
  sender: Address,
  review: string,
  rating: BigInt,
  assetHash: string,
  assetId: string,
  chainId: BigInt
): NewReview {
  let newReviewEvent = changetype<NewReview>(newMockEvent())

  newReviewEvent.parameters = new Array()

  newReviewEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  newReviewEvent.parameters.push(
    new ethereum.EventParam("review", ethereum.Value.fromString(review))
  )
  newReviewEvent.parameters.push(
    new ethereum.EventParam("rating", ethereum.Value.fromUnsignedBigInt(rating))
  )
  newReviewEvent.parameters.push(
    new ethereum.EventParam("assetHash", ethereum.Value.fromString(assetHash))
  )
  newReviewEvent.parameters.push(
    new ethereum.EventParam("assetId", ethereum.Value.fromString(assetId))
  )
  newReviewEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return newReviewEvent
}
