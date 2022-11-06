import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NewReview } from "../generated/schema"
import { NewReview as NewReviewEvent } from "../generated/HumbleOpinion/HumbleOpinion"
import { handleNewReview } from "../src/humble-opinion"
import { createNewReviewEvent } from "./humble-opinion-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let review = "Example string value"
    let rating = BigInt.fromI32(234)
    let assetHash = "Example string value"
    let assetId = "Example string value"
    let chainId = BigInt.fromI32(234)
    let newNewReviewEvent = createNewReviewEvent(
      sender,
      review,
      rating,
      assetHash,
      assetId,
      chainId
    )
    handleNewReview(newNewReviewEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewReview created and stored", () => {
    assert.entityCount("NewReview", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "review",
      "Example string value"
    )
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rating",
      "234"
    )
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetHash",
      "Example string value"
    )
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetId",
      "Example string value"
    )
    assert.fieldEquals(
      "NewReview",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "chainId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
