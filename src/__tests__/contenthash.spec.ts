import { decodeOcrIdFromContenthash } from "../decodeOcrIdFromContenthash";
import { encodeOcrIdAsContenthash } from "../encodeOcrIdAsContenthash";
import { OcrId } from "../OcrId";

describe("Contenthash", () => {
  it("can encode and decode contenthash", async () => {
      const ocrId: OcrId = {
        protocolVersion: 231,
        chainId: 5_354,
        packageIndex: 1_123_323,
        contractAddress: "0x000000000000000000000000000000000f0a5b56",
        startBlock: 15_000_324,
        endBlock: 15_000_420,
      };

      expect(
        decodeOcrIdFromContenthash(
          encodeOcrIdAsContenthash(ocrId)
        )
      ).toEqual(
        ocrId
      );
  });
});
