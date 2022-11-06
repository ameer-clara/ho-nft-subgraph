import { NewReview as NewReviewEvent } from "../generated/HumbleOpinion/HumbleOpinion"
import { NewReview } from "../generated/schema"

export function handleNewReview(event: NewReviewEvent): void {
  let entity = new NewReview(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.review = event.params.review
  entity.rating = event.params.rating
  entity.assetHash = event.params.assetHash
  entity.assetId = event.params.assetId
  entity.chainId = event.params.chainId
  entity.save()
}
