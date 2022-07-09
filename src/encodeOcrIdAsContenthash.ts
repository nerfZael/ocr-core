import { BigNumber, ethers } from "ethers";
import { concat, arrayify, zeroPad } from "ethers/lib/utils";
import { OCR_PROTOCOL_ID } from "./constants";
import { OcrId } from "./OcrId";
import { encodeFixedBytes } from "@nerfzael/encoding";

export const encodeOcrIdAsContenthash = (
  ocrId: OcrId,
  ocrProtocolId?: number
): Uint8Array => {
  ocrProtocolId = ocrProtocolId ?? OCR_PROTOCOL_ID;

  const bytes = encodeFixedBytes([
    new Uint8Array([ocrProtocolId]),
    arrayify(BigNumber.from(ocrId.protocolVersion)),
    arrayify(BigNumber.from(ocrId.chainId)),
    arrayify(ocrId.contractAddress),
    arrayify(BigNumber.from(ocrId.packageIndex)),
    arrayify(BigNumber.from(ocrId.startBlock)),
    arrayify(BigNumber.from(ocrId.endBlock)),
  ], [1, 2, 8, 20, 8, 8, 8]);

  return bytes;
};
