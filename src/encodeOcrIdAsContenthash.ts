import { BigNumber, ethers } from "ethers";
import { concat, arrayify } from "ethers/lib/utils";
import { OCR_PROTOCOL_ID } from "./constants";
import { OcrId } from "./OcrId";
import { encodeBytes } from "@nerfzael/encoding";

export const encodeOcrIdAsContenthash = (
  ocrId: OcrId,
  ocrProtocolId?: number
): Uint8Array => {
  ocrProtocolId = ocrProtocolId ?? OCR_PROTOCOL_ID;

  const bytes = concat([
    new Uint8Array([ocrProtocolId]),
    encodeBytes(arrayify(BigNumber.from(ocrId.protocolVersion)), 2),
    encodeBytes(arrayify(BigNumber.from(ocrId.chainId)), 8),
    encodeBytes(arrayify(ocrId.contractAddress), 20),
    encodeBytes(arrayify(BigNumber.from(ocrId.packageIndex)), 8),
    encodeBytes(arrayify(BigNumber.from(ocrId.startBlock)), 8),
    encodeBytes(arrayify(BigNumber.from(ocrId.endBlock)), 8),
  ]);

  return bytes;
};
